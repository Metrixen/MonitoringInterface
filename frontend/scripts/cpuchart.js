import { makeChart, updateChart } from "./chart.js";
const [cpuChart, cpuOption] = makeChart("CPU Usage %", "cpu",
    {
        show: false,
        dimension: 1,
        pieces: [
            {
                lte: 30,
                color: '#00FF00' // Green
            },
            {
                gt: 30,
                lte: 60,
                color: '#FFFF00' // Yellow
            },
            {
                gt: 60,
                color: '#FF0000' // Red
            }
        ]
    }
);

setInterval(() => {
    updateChart(cpuChart, cpuOption, "http://localhost:8080/cpu", "cpu");
}, 5000);
