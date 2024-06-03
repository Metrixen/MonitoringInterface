# Monitoring Interface


![monitoringproject](https://github.com/Metrixen/MonitoringInterface/assets/70206722/f25b4065-91e0-4459-a070-fa19960a7042)

This is a system monitoring tool utilizing Python's FastAPI, Uvicorn and psutil. The server provides an API to which the clients fetch the current system resources.
The results are displayed in charts using Echarts. Please note that it is intended for local usage only. The uvicorn API allows CORS requests from all ports, which is unsafe for public networks.

## Technologies Used
- Ubuntu - 22.10
- Apache - 2.4.58
- Python - 3.12.3
- FastAPI - 0.101.0
- Uvicorn - 0.27.1
- psutil - 5.9.8
- ECharts - 5.5.0
- HTML
- CSS
- JavaScript


## Installation Steps
0. Ensure you have all the dependencies installed
1. Clone the repository
   ```
   $ git clone https://github.com/Metrixen/MonitoringInterface.git
   ```
2. Enter the backend folder with `cd backend` and type
   ```
   $ uvicorn main:app --reload --port 8080
   ```
3. Copy the contents of the frontend folder to `/var/www/html`
    ```
    $ mv ./frontend/* /var/www/html/
    ```
4. Start the apache2 webserver by running
   ```
    # systemctl start apache2
   ```
4. Connect to `http://127.0.0.1`
