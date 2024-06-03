import {makeChart, updateChart} from "./chart.js";
const [receivedChart, receivedOption] = makeChart("Received Network Packets", "received", []);

setInterval(() => {
    updateChart(receivedChart, receivedOption, "http://localhost:8080/received", "received packets");
}, 5000);