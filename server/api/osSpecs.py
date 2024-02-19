from flask import jsonify
from flask_cors import cross_origin
import platform
import psutil

def getOs():
    # os name
    os_name = platform.system()
    # os version
    os_version = platform.version()
    # os description
    os_desc = "Not Available"
    # os manufacturer
    os_manufacturer = platform.system()
    # os release
    os_release = platform.release()
    # os architecture
    os_architecture = platform.architecture()
    # machine type
    machine = platform.machine()
    # processor
    processor = platform.processor()
    # network
    network = platform.node()
    # platform
    platform_detail = platform.platform()

    # ram
    svmem = psutil.virtual_memory()
    # Convert bytes to gigabytes
    total_memory = svmem.total / (1024 ** 3)  
    # Convert bytes to gigabytes
    available_memory = svmem.available / (1024 ** 3)  
    # Convert bytes to gigabytes
    used_memory = svmem.used / (1024 ** 3)  
    # percent used
    used_percentage = svmem.percent

    # virtual memory
    virtual_memory = psutil.virtual_memory()
    total = virtual_memory.total/ (1024 ** 3)
    available = virtual_memory.available/ (1024 ** 3)
    used = virtual_memory.used/ (1024 ** 3)
    free = virtual_memory.free/ (1024 ** 3)
    percent = virtual_memory.percent
    # json return
    json = {
        'os':str(os_name),
        'version':str(os_version),
        'osDescription': str(os_desc),
        'manufacturer': str(os_manufacturer),
        'release':str(os_release),
        'architecture':str(os_architecture),
        'machineType':str(machine),
        'processor':str(processor),
        'network':str(network),
        'platform':str(platform_detail),
        'totalRam':str(round(total_memory, 2)),
        'availableRam':str(round(available_memory, 2)),
        'usedRam':str(round(used_memory, 2)),
        'percentRam':str(used_percentage),
        'totalVirtualMem': str(round(total, 2)),
        'availableVirtualMem': str(round(available, 2)),
        'usedVirtualMem': str(round(used, 2)),
        'freeVirtualMem': str(round(free, 2)),
        'percentVirtualMem': str(percent)
    }
    return jsonify(json)