import os
from flask import request, jsonify
from flask_cors import cross_origin
import subprocess
import hashlib
from virus_total_apis import PublicApi as VirusTotalPublicApi

API_KEY='7b26848de47e32a19573c794079bdf97d45d231ebc08e2a93be4f059cef4b589'

def calculate_file_hash(file_path):
    sha256 = hashlib.sha256()
    with open(file_path, 'rb') as f:
        while True:
            data = f.read(65536)  # Read file in chunks of 64KB
            if not data:
                break
            sha256.update(data)
    return sha256.hexdigest()

def scan_file(file_path):
    # Initialize the VirusTotal API client
    vt = VirusTotalPublicApi(API_KEY)

    # Calculate the SHA256 hash of the file
    file_hash = calculate_file_hash(file_path)

    # Check if the file has already been scanned
    response = vt.get_file_report(file_hash)
    if response['response_code'] == 0:
        # File has not been scanned, upload and scan it
        scan_result = vt.scan_file(file_path)
        scan_id = scan_result['scan_id']
        result = vt.get_file_report(scan_id=scan_id)
        if result['response_code'] == 1:
            if 'positives' in result['results']:
                positives = result['results']['positives']
                total = result['results']['total']
                if positives > 0:
                    return f"The file is infected. Detected by {positives} out of {total} scanners."
                else:
                    return "The file is clean."
            else:
                return "The file is clean."
        else:
            return "Failed to retrieve scan results."
    elif response['response_code'] == 1:
        # File has been scanned, check the scan results
        if 'positives' in response['results']:
            positives = response['results']['positives']
            total = response['results']['total']
            if positives > 0:
                return f"The file is infected. Detected by {positives} out of {total} scanners."
            else:
                return "The file is clean."
        else:
            return "The file is clean."
    else:
        return "Failed to retrieve scan results."


file_path = "./forensic_files/network.gif"
if os.path.exists(file_path):
    result = scan_file(file_path)
    print(result)
else:
    print("File not found.")

def uploadFile():
    if 'file' not in request.files:
        return 'No file part'
    file = request.files['file']
    if file.filename == '':
        return 'No selected file'
    file_path = os.path.join('./api/forensic_files', file.filename)
    file.save(file_path)
    return analyseFile(path=file_path)

def analyseFile(path):
    try:
        # Run ExifTool command
        exif_output = subprocess.check_output(['exiftool', path], universal_newlines=True)
        # Convert the output to a dictionary (optional, depends on your use case)
        exif_data = {}
        for line in exif_output.split('\n'):
            if ':' in line:
                key, value = map(str.strip, line.split(':', 1))
                exif_data[key] = value
        return jsonify(exif_data)
    except subprocess.CalledProcessError as e:
        return Error(e)

def Error(e):
    return jsonify({
        'Error':e
    })
