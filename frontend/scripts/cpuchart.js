import { makeChart, updateChart } from "./chart.js";
/*
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    animation: false,
    title: {
        text: 'CPU Usage %'
    },
    legend: {
        data: ['CPU Usage %']
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['', '', '', '', '', '', '', '', '', '']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'CPU Usage %',
            type: 'line',
            stack: 'Total',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    ]
};

option && myChart.setOption(option);

const fetchdata = async () => {

    fetch("https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new")
        .then((response) => response.json())
        .then((percent) => {

            option.xAxis.data.push(currentTime());
            option.xAxis.data.shift();

            option.series[0].data.push(percent);
            option.series[0].data.shift();
            option && myChart.setOption(option);
        });

}

setInterval(() => {
    fetchdata();
}, 5000);*/
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