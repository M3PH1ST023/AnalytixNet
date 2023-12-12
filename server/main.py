import sys
from flask import Flask
sys.path.append("py-files")
from ip import *
from osDetails import *
from steg import *
from config import *

app = Flask(__name__)

app.route('/api/v1/ip', methods=['GET'])(getIp)
app.route('/api/v1/os', methods=['GET'])(getOs)
app.route('/api/v1/steg', methods=['POST'])(doSteg)
app.route('/api/v1/config', methods=['GET'])(getConfig)

if __name__ == '__main__':
    app.run()