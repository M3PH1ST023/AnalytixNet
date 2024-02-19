from flask import jsonify, request
from scapy.all import sniff, IP, wrpcap
from threading import Thread, Event
import os

network_data = []
capturing = False
stop_capture_event = Event()

op_folder='./api/netcap_files'

def process_packet(packet):
    network_data.append(packet)


def continuous_capture():
    while capturing and not stop_capture_event.is_set():
        sniff(prn=process_packet, store=False, count=1, iface="wlan0")

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

def stop_capture():
    global capturing
    global stop_capture_event
    capturing = False
    stop_capture_event.set()

    # Save captured packets to a new .pcap file
    filename = request.args.get('filename')
    if filename=='None':
        filename=1
    pcap_filename = str(filename)+'.pcap'
    wrpcap(os.path.join(op_folder, pcap_filename), network_data)

    return jsonify({'message': 'Capture stopped', 'data': str(network_data), 'pcap_filename': str(pcap_filename)})

