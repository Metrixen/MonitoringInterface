import psutil
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allows CORS reuqests from all origins.
# Not recommended for public networks.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],)


@app.get("/")
def read_root():
    return {}

@app.get("/cpu")
def cpu_usage():
    cpu_usage_percent = psutil.cpu_percent()
    return {"cpu": f"{cpu_usage_percent}"}

@app.get("/ram")
def ram_usage():
    ram_usage_percent = psutil.virtual_memory().percent
    return {"ram": f"{ram_usage_percent}"}

@app.get("/sent")
def sent_packets():
    network_packets = psutil.net_io_counters()
    return {"sent packets": network_packets.packets_sent}

@app.get("/received")
def received_packets():
    network_packets = psutil.net_io_counters()
    return {"received packets": network_packets.packets_recv}
