import socket
from flask import jsonify
from flask_cors import cross_origin

@cross_origin(origins="http://127.0.0.1:5173")
def getIp():
    hostname = socket.gethostname()
    ip_address = socket.gethostbyname(hostname)
    json = {
        'hostname':str(hostname),
        'ip':str(ip_address)
    }
    return jsonify(json)