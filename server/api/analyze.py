import os
from flask import request, jsonify
from scapy.all import *
import matplotlib.pyplot as plt

def clean_data(packets):
    # Filter out non-IP packets
    ip_packets = [pkt for pkt in packets if IP in pkt]

    return ip_packets

def extract_metrics(packets):
    protocols = {}
    src_ips = set()
    dst_ips = set()

    for pkt in packets:
        # Count protocols
        protocol = pkt[IP].proto
        protocols[protocol] = protocols.get(protocol, 0) + 1
        
        # Collect unique source and destination IP addresses
        src_ips.add(pkt[IP].src)
        dst_ips.add(pkt[IP].dst)

    return protocols, src_ips, dst_ips

def visualize_metrics(protocols, src_ips, dst_ips):
    # Plot protocols
    plt.figure(figsize=(10, 6))
    plt.bar(protocols.keys(), protocols.values(), color='skyblue')
    plt.xlabel('Protocol')
    plt.ylabel('Count')
    plt.title('Protocol Distribution')
    plt.xticks(list(protocols.keys()), [protocol_names.get(p, 'Unknown') for p in protocols.keys()])
    plt.grid(True)
    plt.show()

    # Plot source and destination IPs
    plt.figure(figsize=(10, 6))
    plt.subplot(1, 2, 1)
    plt.pie([len(src_ips), len(dst_ips)], labels=['Source IPs', 'Destination IPs'], autopct='%1.1f%%', colors=['lightgreen', 'lightcoral'])
    plt.title('Source and Destination IP Distribution')
    plt.axis('equal')

    plt.subplot(1, 2, 2)
    plt.bar(['Source IPs', 'Destination IPs'], [len(src_ips), len(dst_ips)], color=['lightgreen', 'lightcoral'])
    plt.xlabel('Type')
    plt.ylabel('Count')
    plt.title('Source and Destination IP Distribution')
    plt.grid(True)

    plt.show()

# Protocol names dictionary
    protocol_names = {1: 'ICMP', 6: 'TCP', 17: 'UDP'}


def analyze():
    filename = request.args.get('filename')
    filename = filename+".pcap"
    file_path = os.path.join('./api/netcap_files', filename)
    packets = rdpcap(file_path)
    cleaned_packets = clean_data(packets)
    protocols, src_ips, dst_ips = extract_metrics(cleaned_packets)
    visualize_metrics(protocols, src_ips, dst_ips)
    return jsonify({"success":filename})