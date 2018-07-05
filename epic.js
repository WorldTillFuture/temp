/*
 Highcharts JS v6.1.1 (2018-06-27)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
var interval = function () {
  $('#epicchart').highcharts({
    chart: {
        type: 'bar',
        spacingBottom: 30,
        spacingTop: 65,
        spacingLeft: 10,
        spacingRight: 10
    },
    title: {
      text: '',
      x: -20 //center
    },
    subtitle: {
      text: '',
      x: -20
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    xAxis: {
      categories: ['Вход', 'Регистрация', 'Рейтинги и отзывы', 'Подсказки при входе', 'Гигиена']
    },
    yAxis: {
      title: {
          text: 'Story Points',
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0,
      reversed: true
    },
    series: [{
      color: '#fc6267',
      name: 'Backend',
      borderWidth: 0,
      data: [5, 3, 1, 0.5, 2]
    }, {
      color: '#a06ef4',
      name: 'Frontend',
      borderWidth: 0,
      data: [0, 1, 4, 0, 2]
    }, {
      color: '#98cd38',
      name: 'Android',
      borderWidth: 0,
      data: [0, 0, 1, 3, 2]
    }, {
      color: '#95afc0',
      name: 'iOS',
      borderWidth: 0,
      data: [0, 1, 4, 3, 2]
    }, {
      color: '#1dacfc',
      name: 'QA',
      borderWidth: 0,
      data: [2, 2, 2, 2, 1]
    }]
  });
};
interval();
setInterval(interval, 5000)
