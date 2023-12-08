import sys
from flask import Flask
sys.path.append("py-files")
from ip import getIp

app = Flask(__name__)

app.route('/api/v1/ip', methods=['GET'])(getIp)

if __name__ == '__main__':
    app.run()