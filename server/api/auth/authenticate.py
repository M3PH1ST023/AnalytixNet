import hashlib
from flask import jsonify, request

def signup():
    try:
        data = request.json
        pass_hash = hashlib.sha256(data['password'].encode('UTF-8')).hexdigest()
        pass_hash = data['username']+pass_hash
        pass_hash = hashlib.sha256(pass_hash.encode('UTF-8')).hexdigest()
        data['password'] = pass_hash

        file = open('Creds', 'a')
        file.write(data)
        file = file.close()

        return "true"
    except Exception as e:
        Error(e)

def login():
    username = request.args.get('username')
    password = request.args.get('password')
    pass_hash = hashlib.sha256(password.encode('UTF-8')).hexdigest()
    pass_hash = username+pass_hash
    pass_hash = hashlib.sha256(pass_hash.encode('UTF-8')).hexdigest()
    data = jsonify({
        'username':str(username),
        'password':str(pass_hash)
    })
    
    file = open('Creds', 'r')
    doc = file.read()
    
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