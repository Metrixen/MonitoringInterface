import currentTime from "./utils.js";

export const makeChart = (title, selector, vmap) => {
    var chartDom = document.getElementById(selector);
    var myChart = echarts.init(chartDom);

    var option = {
        animation: false,
        title: {
            text: title
        },
        legend: {
            data: [title]
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
                name: title,
                type: 'line',
                stack: 'Total',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                lineStyle: {
                    width: 4
                }
            }
        ],
        visualMap: vmap
        /*visualMap: {
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
        }*/
    };

    option && myChart.setOption(option);

    return [myChart, option];
}

export const updateChart = async (chart, options, api, key) => {
    fetch(api)
        .then((response) => response.json())
        .then((responsejson) => {

            options.xAxis.data.push(currentTime());
            options.xAxis.data.shift();

            const newValue = responsejson[key];
            options.series[0].data.push(newValue);
            options.series[0].data.shift();

            options && chart.setOption(options);
        });
}
