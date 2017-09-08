






function qwe(){

//随机数
function GetRandomNum(Min,Max)
{   
var Range = Max - Min;   
var Rand = Math.random();   
return(Min + Math.round(Rand * Range));   
}   


var number = GetRandomNum(1,200);

/*饼状图数据*/
var myChart = echarts.init(document.getElementById('shendu_bing'));
var option = {
    title : {
        text: '申报进度',
        // subtext: '纯属虚构',
        x:'center',
        textStyle: {color: '#fff'},  
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    /*根据值设置颜色可以注释掉*/
      color:['#00B0F0', '#51E5FA']  ,
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['本月已申报','本月未申报'],
         textStyle: { color: '#fff' },  
    },
    series : [
        {
            name: '申报量',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],

            data:[

                {value:number, name:'本月已申报'},
                {value:'310', name:'本月未申报'}
              
            ],
            itemStyle: {
                emphasis: {

                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

       
       myChart.setOption(option);

/*柱状图数据*/
  var wangge_zhu = echarts.init(document.getElementById('wangge_zhu'));
option1 ={
    color: ['#FAED52'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['坪山', '碧岭', '马峦', '石井', '龙田', '坑梓'],
            axisTick: {
            alignWithLabel: true
            },
            axisLabel: {  show: true,
            textStyle: {color: '#fff' }
            },
            axisLine:{  
            lineStyle:{color:'#fff', width:2}  
            }, 
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: { show: true,
                textStyle: {color: '#fff'}
            },
            axisLine:{  
            lineStyle:{color:'#fff', width:2 }  
            },  

        }
    ],
    series : [
        {
            name:'网格数据',
            type:'bar',
            barWidth: '40%',
            data:[2719, 1337, 1290, 771, 1741, 2424]
        }
    ]
};     
        wangge_zhu.setOption(option1);


$('strong').each(function () {
    $(this).prop('Counter',10).animate({
        Counter: $(this).text()
    }, {
        duration: 500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
 }







