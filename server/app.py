from flask import Flask, jsonify, send_file, request
from flask_cors import CORS
from flask_socketio import SocketIO, emit
from scapy.all import sniff, IP, wrpcap
from threading import Thread, Event
import time

app = Flask(__name__)
CORS(app)

network_data = []
capturing = False
stop_capture_event = Event()

def process_packet(packet):
    if capturing and IP in packet:
        packet_info = {
            'source_ip': packet[IP].src,
            'destination_ip': packet[IP].dst,
            'protocol': packet[IP].proto,
            'length': len(packet),
            'payload': bytes(packet.payload),  # Capture payload as bytes
        }
        network_data.append(packet_info)

def continuous_capture():
    while capturing and not stop_capture_event.is_set():
        sniff(prn=process_packet, store=False, count=1, iface="wlan0")

@app.route('/start_capture', methods=['GET'])
def start_capture():
    global capturing
    global network_data
    global stop_capture_event

    network_data = []
    capturing = True
    stop_capture_event.clear()
    capture_thread = Thread(target=continuous_capture)
    capture_thread.start()

    return jsonify({'message': 'Capture started'})

@app.route('/stop_capture', methods=['GET'])
def stop_capture():
    global capturing
    global stop_capture_event
    capturing = False
    stop_capture_event.set()

    # Save captured packets to a new .pcap file
    pcap_filename = f'captured_packets_{time.strftime("%Y%m%d_%H%M%S")}.pcap'
    wrpcap(pcap_filename, [packet['payload'] for packet in network_data])

    return jsonify({'message': 'Capture stopped', 'data': str(network_data), 'pcap_filename': str(pcap_filename)})

@app.route('/download_pcap', methods=['GET'])
def download_pcap():
    filename = request.args.get('filename')
    return send_file(filename, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
