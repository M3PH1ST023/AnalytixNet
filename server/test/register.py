import requests
from flask import jsonify

url = 'http://127.0.0.1:5000/api/v1/register'

data = {
    'username':'admin',
    'password':'admin'
    }

r = requests.post(url, jsonify(data))

print(r.status_code, r.reason)