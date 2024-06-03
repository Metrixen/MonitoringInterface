export const makePieChart = (title, selector) => {
    var chartDom = document.getElementById(selector);
    var myChart = echarts.init(chartDom);
    var option = {
        title: {
            text: title,
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: title,
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 50, name: 'Used' },  
                    { value: 50, name: 'Free' }   
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    myChart.setOption(option);
    return [myChart, option];
}

export const updatePieChart = async (chart, options, api, key) => {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            const usedPercentage = parseFloat(data[key]); 
            const freePercentage = 100 - usedPercentage;  
            options.series[0].data = [
                { value: usedPercentage, name: 'Used' },
                { value: freePercentage, name: 'Free' }
            ];
            chart.setOption(options);
        })
        .catch(error => console.error('Error updating pie chart:', error));
}
