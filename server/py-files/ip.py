import socket
from flask import jsonify
from flask_cors import cross_origin
from getmac import get_mac_address as gma
import subprocess
import netifaces as ni

@cross_origin(origin="http://127.0.0.1:5173")
def getIp():
    # hostname
    hostname = socket.gethostname()
    # mac address
    mac_address = gma()
    # connection name
    connection_name = "No connection"
    try:
        # Run the iwconfig command to get details about the connected WiFi network
        connection_name = subprocess.check_output(['iwgetid']).decode().strip()
    except subprocess.CalledProcessError as e:
        print("Error:", e)
    
    # json
    json = {
        'hostname':str(hostname),
        'macAddress':str(mac_address),
        'connectionName':str(connection_name),
        'connectionInterface': str(connection_name)
    }

    return jsonify(json)