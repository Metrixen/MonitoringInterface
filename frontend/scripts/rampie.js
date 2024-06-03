import { makePieChart, updatePieChart } from "./pie.js";

const [ramPieChart, ramPieOption] = makePieChart("RAM Usage %", "rampie");

setInterval(() => {
    updatePieChart(ramPieChart, ramPieOption, "http://localhost:8080/ram", "ram");
}, 5000);
