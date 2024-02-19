import hashlib
from flask import jsonify, request
import json
from mongoConfig import *
from flask_cors import cross_origin

def signup():
    try:
        data = request.json
        pass_hash = hashlib.sha256(data['password'].encode('UTF-8')).hexdigest()
        data['password'] = pass_hash
        connectUser().insert_one(data)
        return "success"
    except Exception as e:
        Error(e)

def siginin():
    username = request.args.get('username')
    password = request.args.get('password')
    pass_hash = hashlib.sha256(password.encode('UTF-8')).hexdigest()
    try:
        check_pass_hash = ""
        for doc in connectUser().find({'username':str(username)}):
            check_pass_hash = doc['password']
        if pass_hash==check_pass_hash:
            return "true"
        return "false"
    except Exception as e:
        Error(e)

def Error(e):
    return jsonify({
        'Error':e
    })