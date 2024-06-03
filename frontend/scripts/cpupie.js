import { makePieChart, updatePieChart } from "./pie.js";

const [cpuPieChart, cpuPieOption] = makePieChart("CPU Usage %", "cpupie");

setInterval(() => {
    updatePieChart(cpuPieChart, cpuPieOption, "http://localhost:8080/cpu", "cpu");
}, 5000);
