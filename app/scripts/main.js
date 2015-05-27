$(document).ready(function() {
  $(".chartItem").hide();
  var ranges = [
    [2008, 67, 240],
    [2009, 58, 211],
    [2010, 82, 246],
    [2011, 74, 232],
    [2012, 92, 222],
    [2013, 79, 263],
    [2014, 70, 231],
    [2015, 88, 235],
    ];
  $("#winPercent").on('click', function(){
    $("#teamStats1").toggle();
    $('#teamStats1').highcharts({
      title: {
        text: 'Teams Win Percentage by Year',
        x: -20 //center
      },
      subtitle: {
        text: 'Source: IPLT20.com',
        x: -20
      },
      xAxis: {
        categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']
      },
      yAxis: {
        title: {
          text: 'Win Percentage(%)'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      colors: ['#FEE000','#0000CC','#0066FF','#FF3300','#FF3399','#333399','#FF9900','#6600CC'],
      tooltip: {
        valueSuffix: '%'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },
      series: [{
        name: 'CSK',
        data: [900/16,800/15,900/16,1100/16,1100/20,1200/18,1000/16,1000/17]
      }, {
        name: 'MI',
        data: [700/14, 500/14, 1100/16, 1000/16, 1000/17, 1300/19, 700/14, 1000/16]
      }, {
        name: 'RR',
        data: [1300/16,600/14,600/14,600/14,700/16,1000/16,700/14,700/15]
      }, {
        name: 'RCB',
        data: [400/14,900/16,800/16,1000/17,800/16,900/16,500/14,800/16]
      }, {
        name: 'KXIP',
        data: [1000/15,700/14,400/14,700/14,800/16,800/16,1200/17,300/13]
      }, {
        name: 'DD',
        data: [700/15,1000/15,700/14,400/14,1100/18,300/16,200/14,500/14]
      }, {
        name: 'DC/SRH',
        data: [200/14,900/16,800/16,600/14,400/15,1000/17,600/14,700/14]
      }, {
        name: 'KKR',
        data: [600/14,300/14,700/14,800/15,1200/18,600/16,1100/16,700/14]
      }]
    });
  });
  $('#highLowTotal').on('click', function(){
    $("#teamStats2").toggle();
    $('#teamStats2').highcharts({
      title: {
        text: 'Highest and Lowest Totals Year on Year'
      },
      xAxis: {
        type: "Year"
      },
      yAxis: {
        title: {
          text: "Runs"
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true,
        valueSuffix: 'runs'
      },
      legend: {
      },
      series: [{
        name: 'Range',
        data: ranges,
        type: 'arearange',
        lineWidth: 0,
        linkedTo: ':previous',
        color: Highcharts.getOptions().colors[0],
        fillOpacity: 0.3,
        zIndex: 0
      }]
    });
  });
  $("#indBat").on('click', function(){
    $("#batsmanStats1").toggle();
    $('#batsmanStats1').highcharts({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Indian Batsman Runs Comparison Year on Year'
      },
      subtitle: {
        text: 'Source: IPLT20.com'
      },
      xAxis: {
        categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']
      },
      yAxis: {
        title: {
          text: 'Runs'
        }
      },
      plotOptions: {
          line: {
              dataLabels: {
                  enabled: true
              },
              enableMouseTracking: false
          }
      },
      series: [{
          name: 'MS Dhoni',
          data: [414, 332, 287, 392, 358, 461, 371, 372]
      }, {
          name: 'Suresh Raina',
          data: [421, 434, 520, 438, 441, 548, 523, 374]
      }, {
          name: 'Virat Kohli',
          data: [165, 246, 307, 557, 364, 634, 359, 505]
      }, {
          name: 'Rohit Sharma',
          data: [404, 362, 404, 372, 433, 538, 390, 482]
      }, {
          name: 'Gautam Gambhir',
          data: [534, 286, 277, 378, 590, 406, 335, 327]
      }, {
          name: 'Robin Uthappa',
          data: [320, 175, 374, 264, 405, 434, 660, 364]
      }, {
          name: 'Virender Sehwag',
          data: [406, 198, 356, 424, 495, 295, 455, 99]
      }, {
          name: 'Shikhar Dhawan',
          data: [340, 40, 191, 400, 569, 311, 377, 353]
      }]
    });
  });
  $("#orangeCap").on('click',function(){
    $("#batsmanStats2").toggle();
    $('#batsmanStats2').highcharts({
      chart: {
        zoomType: 'xy'
      },
      title: {
        text: 'Orange Cap - Runs, Average and Strike Rate Comparison Year On Year'
      },
      subtitle: {
        text: 'Source: IPLT20.com'
      },
      xAxis: [{
        categories: ['2008 - Shaun Marsh', '2009 - Matthew Hayden', '2010 - Sachin Tendulkar', '2011 - Chris Gayle', '2012 - Chris Gayle', '2013 - Michael Hussey', '2014 - Robin Uthappa', '2015 - David Warner'],
        crosshair: true
      }],
      yAxis: [{ // Primary yAxis
        labels: {
          format: '{value}',
          style: {
            color: Highcharts.getOptions().colors[2]
          }
        },
        title: {
          text: 'Str Rate',
          style: {
            color: Highcharts.getOptions().colors[2]
          }
        },
        opposite: true
      }, { // Secondary yAxis
          gridLineWidth: 0,
          title: {
            text: 'Runs',
            style: {
              color: Highcharts.getOptions().colors[0]
            }
          },
          labels: {
            format: '{value}',
            style: {
              color: Highcharts.getOptions().colors[0]
            }
          }

      }, { // Tertiary yAxis
          gridLineWidth: 0,
          title: {
            text: 'Average',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          },
          labels: {
            format: '{value}',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          },
          opposite: true
      }],
      tooltip: {
        shared: true
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 55,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
      },
      series: [{
        name: 'Runs',
        type: 'column',
        yAxis: 1,
        data: [616, 572, 618, 608, 733, 733, 660, 562],
        tooltip: {
          valueSuffix: ' runs'
        }

      }, {
          name: 'Average',
          type: 'spline',
          yAxis: 2,
          data: [68.44, 52.00, 47.53, 67.55, 61.08, 52.35, 44.00, 43.23],
          marker: {
              enabled: false
          },
          dashStyle: 'shortdot',
          tooltip: {
              valueSuffix: ' runs/innings'
          }

      }, {
          name: 'Str Rate',
          type: 'spline',
          data: [139.68, 144.81, 132.61, 183.13, 160.74, 129.50, 137.78, 156.54],
          tooltip: {
              valueSuffix: ' runs/100 balls'
          }
      }]
    });
  });
  $("#top3Wicket").on('click', function(){
    $("#bowlerStats1").toggle();
    $('#bowlerStats1').highcharts({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top Three Wicket Takers Year on Year'
      },
      subtitle: {
          text: 'Source: IPLT20.com'
      },
      xAxis: {
          categories: [
              '2008',
              '2009',
              '2010',
              '2011',
              '2012',
              '2013',
              '2014',
              '2015'
          ],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
            text: 'Wickets'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y} wickets</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: [{
          name: 'PurpleCap',
          data: [22, 23, 21, 28, 25, 32, 23, 26]

      }, {
          name: '2nd',
          data: [19, 21, 17, 22, 24, 28, 21, 24]

      }, {
          name: '3rd',
          data: [19, 19, 17, 21, 22, 24, 20, 23]

      }]
    });
  });
});