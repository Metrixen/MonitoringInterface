import { makeChart, updateChart } from "./chart.js";
const [ramChart, ramOption] = makeChart("RAM Usage %", "ram",
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
    updateChart(ramChart, ramOption, "http://localhost:8080/ram", "ram");
}, 5000);