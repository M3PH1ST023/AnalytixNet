import platform
from flask import jsonify
from flask_cors import cross_origin

@cross_origin(origin="http://127.0.0.1:5173")
def getOs():
    os_name = platform.system()  # Get the operating system name (e.g., 'Windows', 'Linux', 'Darwin')
    os_version = platform.version()  # Get the OS version
    os_release = platform.release()  # Get the OS release

    # Additional information
    os_architecture = platform.architecture()  # Get the OS architecture (e.g., 32-bit, 64-bit)
    machine = platform.machine()  # Get the machine type (e.g., 'x86_64')
    json = {
        'os':str(os_name),
        'version':str(os_version),
        'release':str(os_release),
        'architecture':str(os_architecture),
        'machineType':str(machine)
    }
    return jsonify(json)