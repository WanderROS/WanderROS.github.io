var myChart = echarts.init(document.getElementById('myMap'));

var data = [
    {name: '安庆', value: ['1994.11 ～ -', 'Where I was born!']},
    {name: '蚌埠', value: ['2013.9 ～ 2017.06', '13年就读安徽财经大学,有幸认识很多可爱的小伙伴！']},
    {name: '北京', value: ['2017.09 ～ 2020.01', '17年保送至北京科技大学，认识了很多朋友！']},
    {name: '无锡', value: ['2020.03 ～ now', '就职于美的集团洗衣机事业部（小天鹅）']},
    {name: '苏州', value: ['高中毕业后', '去苏州舅舅家表哥上班的地方玩了两个星期']},
    {name: '洛阳', value: ['研究生期间', '多次出差，待了一个多月，去过王城公园、龙门石窟、关林......']},
    {name: '沈阳', value: ['研究生期间', '一次出差，为了购买仪器设备！']},
    {name: '上海', value: ['大学期间', '一次小小的旅游，算是吧！']},
    {name: '嘉兴', value: ['高中毕业', '在姑姑家的表哥上班的地方玩了段时间！']},
    {name: '合肥', value: ['研究生期间', '去合肥工业大学交托项目机器人！参观了李鸿章故居']},
    {name: '芜湖', value: ['大学期间', '参加比赛，去了也不少次']},
    {name: '成都', value: ['大学期间', '大学期间去电子科技大学参加夏令营！']},

];
var geoCoordMap = {
    '安庆':[117.03,30.52],
    '蚌埠':[117.34,32.93],
    '苏州':[120.619585,31.299379],
    '北京':[116.405285,39.904989],
    '无锡':[120.301663,32.5],
    '上海':[121.48,31.22],
    '洛阳':[112.16,34.32],
    '嘉兴':[120.20,30.15],
    '合肥':[117.17,31.52],
    '芜湖':[118.38,31.33],
    '沈阳':[123.25,41.48],
    '成都':[104.07,30.67]

};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
            //console.log(res)
        }
    }
    return res;
};

option = {
    // backgroundColor: '#404a59',
    title: {
    },
    tooltip: {
        trigger: 'item',
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (params) {
            name = params.name
            time = params.value[2]
            describe = params.value[3]
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + name
                + '</div>'
                + time
                + '<br>'
                + describe;
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#e6e6e6',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#cccccc'
            }
        }
    },
    series : [
        {
            name: '足迹',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#4d4d4d',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

myChart.setOption(option);
