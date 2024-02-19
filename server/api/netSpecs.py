import socket
from flask import jsonify
from flask_cors import cross_origin
from getmac import get_mac_address as gma
import subprocess
import requests

def getIp():
    # hostname
    hostname = socket.gethostname()
    # mac address
    mac_address = gma()
    # ip address
    url = 'https://api.ipify.org'
    resp = requests.get(url)
    ip = resp.text
    # connection name
    connection_name = "No connection"
    connection_interface = ""
    try:
        # Run the iwconfig command to get details about the connected WiFi network
        connection_name = subprocess.check_output(['iwgetid']).decode().strip()
        for i in connection_name:
            if i != ' ':
                connection_interface += i
            else:
                break;
    except subprocess.CalledProcessError as e:
        print("Error:", e)
    temp = ""
    flag=0
    for i in connection_name:
        if i == '\"':
            flag=1
        if flag == 1:
            temp+=i
    connection_name = temp[1:len(temp)-1]
    if(mac_address=='00:11:22:33:44:55'):
        mac_address='spoofing detected'

    # json
    json = {
        'ip':str(ip),
        'hostname':str(hostname),
        'macAddress':str(mac_address),
        'connectionName':str(connection_name),
        'connectionInterface': str(connection_interface)
    }

    return jsonify(json)