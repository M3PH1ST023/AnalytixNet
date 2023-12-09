import netifaces as ni
import subprocess
import socket
from getmac import get_mac_address as gma
def get_network_details():
    hostname = socket.gethostname()
    # mac address
    mac_address = gma()

    # json
    json = {
        'hostname':str(hostname),
        'macAddress':str(mac_address)
    }
    interfaces = ni.interfaces()
    print("Available network interfaces:", interfaces)

    try:
        # Run the iwconfig command to get details about the connected WiFi network
        cmd_output = subprocess.check_output(['iwgetid']).decode().strip()
        
        # Print the output of the iwconfig command
        print(f"Connected WiFi details:")
        print(cmd_output)
    except subprocess.CalledProcessError as e:
        print("Error:", e)

# Call the function to get network details
get_network_details()
