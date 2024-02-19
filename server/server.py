import sys
from flask import Flask
from flask_cors import CORS
sys.path.append("api")
from api.login import *
from api.netSpecs import *
from api.osSpecs import *
from api.forensics import *
from api.networkCapture import *
from api.analyze import *

app = Flask(__name__)
CORS(app)

uri='/api/v1'

app.route(uri+'/register', methods=['POST'])(signup)
app.route(uri+'/login', methods=['GET'])(siginin)
app.route(uri+'/net', methods=['GET'])(getIp)
app.route(uri+'/os', methods=['GET'])(getOs)
app.route(uri+'/forensic', methods=['POST'])(uploadFile)
app.route(uri+'/start', methods=['GET'])(start_capture)
app.route(uri+'/stop', methods=['GET'])(stop_capture)
app.route(uri+'/analyze',methods=['GET'])(analyze)
@app.route(uri+'/files')
def get_file_names():
    folder_path = './api/netcap_files'  # Update this with your folder path
    files = os.listdir(folder_path)
    return jsonify(files)
if __name__ == '__main__':
    app.run(debug=True)