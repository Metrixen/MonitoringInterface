import {makeChart, updateChart} from "./chart.js";
const [sentChart, sentOption] = makeChart("Sent Network Packets", "sent", []);

setInterval(() => {
    updateChart(sentChart, sentOption, "http://localhost:8080/sent", "sent packets");
}, 5000);