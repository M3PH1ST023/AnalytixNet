import sys
from flask import Flask
sys.path.append("py-files")
from ip import getIp
from osDetails import getOs

app = Flask(__name__)

app.route('/api/v1/ip', methods=['GET'])(getIp)
app.route('/api/v1/os', methods=['GET'])(getOs)

if __name__ == '__main__':
    app.run()