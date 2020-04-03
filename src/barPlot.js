var confirmed = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';
var recovered = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv';
var deaths = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv';
var config = {mapboxAccessToken: "pk.eyJ1IjoiZGVmdmUxOTg4IiwiYSI6ImNrNzNzZmN3dzBmMnMzZ3FvMzJ0MDRpa2QifQ.xLG4lim5AonGbkDtgP9-5A"};

var bar_layout ={
  barmode: 'stack',
  yaxis: {
      type: 'log',
    autorange: true,
    tickfont: {
    size: 12,
      color: 'rgb(107, 107, 107)',
  }},
  xaxis: {
    titlefont: {
        size: 12,
        color: 'rgb(107, 107, 107)'
    },
    tickfont: {
        size: 12,
        color: 'rgb(107, 107, 107)'
    }
  },
  margin: {r: 10, t: 10, b: 200, l: 80, pad: 10},
    legend: {
    x: 1,
    xanchor: 'right',
    y: 1,
    }
}

var mapbox_data={
  data:[],
  confirm: [],
  recover: [],
  death: [],
  bar_data: [],
  ini_bar: function(){
    var death = {
      x: [],
      y: [],
      name: "Death",
      type: "bar",
      // orientation: 'h',
        marker: {
          color: '#4d0000',
          opacity: 1,
        },
    }

    var recover = {
      x: [],
      y: [],
      name: "Recovered",
      // orientation: 'h',
      type: "bar",
        marker: {
          color: '#15F228',
          opacity: 0.7,
        },
    }

    var active = {
      x: [],
      y: [],
      name: "Active",
      // orientation: 'h',
      type: "bar",
        marker: {
          color: '#ff3300',
          opacity: 0.5,
        },
    }

    l = this['confirm'][0].pop.length
        for ( var i = 0 ; i < l; i++) {
          if (this['confirm'][0].pop[i]>0){
            if (! recover.x.includes(this['confirm'][0].country[i])){
              recover.x.push(this['confirm'][0].country[i])
              active.x.push(this['confirm'][0].country[i])
              death.x.push(this['confirm'][0].country[i])

              recover.y.push(parseInt(this['recover'][0].pop[i]))
              active.y.push(parseInt(this['confirm'][0].pop[i])-parseInt(this['recover'][0].pop[i])-parseInt(this['death'][0].pop[i]))
              death.y.push(parseInt(this['death'][0].pop[i]))
            }
            else{
              index = recover.x.indexOf(this['confirm'][0].country[i])
              recover.y[index] +=parseInt(this['recover'][0].pop[i])
              death.y[index] +=parseInt(this['death'][0].pop[i])
              active.y[index] +=parseInt(this['confirm'][0].pop[i])-parseInt(this['recover'][0].pop[i])-parseInt(this['death'][0].pop[i])
            }
          }
        }
    this.bar_data = [death, recover, active];
    // console.log(this.bar_data)
  },

  set_nums: function(val){
    var confirm=0,
      country=0,
      recover=0,
      active = 0,
      added = [],
      death=0;
    l = this['confirm'][0].pop.length
        for ( var i = 0 ; i < l; i++) {
          if (isNaN(parseInt(this['confirm'][0].pop[i]))) {console.log(this['confirm'][0].pop[i])}else{
          confirm += parseInt(this['confirm'][0].pop[i]);}
          
          if (isNaN(parseInt(this['recover'][0].pop[i]))) {console.log(this['recover'][0].pop[i])}else{
          recover += parseInt(this['recover'][0].pop[i]);}
          if (isNaN(parseInt(this['death'][0].pop[i]))) {console.log(this['death'][0].pop[i])}else{
          death += parseInt(this['death'][0].pop[i]);}
          
          if (this['confirm'][0].pop[i]>0 && !(added.includes(this['confirm'][0].country[i])))
            {
              country+=1;
              added.push(this['confirm'][0].country[i])
            };
        }
    document.getElementById("tot_confirm").innerHTML = confirm;
    document.getElementById("tot_country").innerHTML = country;
    document.getElementById("tot_recover").innerHTML = recover;
    document.getElementById("tot_death").innerHTML = death;
    document.getElementById("tot_active").innerHTML = confirm-recover-death;
    document.getElementById("date").innerHTML = val.toString().slice(4,7)+"-"+val.toString().slice(8,10)+"-"+val.toString().slice(11,15);
  },
  ini_data: function(rows,val,item){
    if (item=="confirm"){op=0.5}
    if (item=="recover"){op=0.7}
    if (item=="death"){op=1}
    values = get_data(rows, get_header(val),item);
    cityName = values[0]
        cityCountry = values[1]
        cityPop = values[2]
        cityLat = values[3]
        cityLon = values[4]
        citySize = values[5]
        hoverText = values[6]
    this[item] = [{
      lat: cityLat,
      lon: cityLon,
      hoverinfo: 'text',
      text: hoverText,
      pop: cityPop,
      country: cityCountry,

    }]

  },

  update_data: function(rows,val,item){
        values = get_data(rows,get_header(val),item);
        cityName = values[0]
        cityCountry = values[1]
        cityPop = values[2]
        cityLat = values[3]
        cityLon = values[4]
        citySize = values[5]
        hoverText = values[6]
        for ( var i = 0 ; i < cityName.length; i++) {
          this[item][0].text[i] = hoverText[i];
          this[item][0].pop[i] = cityPop[i];
        }
  },
}

Plotly.d3.csv(confirmed, function(err, rows_confirm){
  Plotly.d3.csv(recovered, function(err, row_recover){
    Plotly.d3.csv(deaths, function(err, row_death){

      var DAYS = Object.keys(rows_confirm[0]).length-4
      var dataNewYorkTimes = d3.range(1, 41).map(d => ({
          year: d,
          value: 10000 * Math.exp(-(d - 1) / 40),
        }));

      var dataTime = d3.range(0, DAYS).map(function(d){return new Date(2020, 0, 22+d);});
      display_date = d3.max(dataTime)

          mapbox_data.ini_data(rows_confirm,display_date,'confirm')
          mapbox_data.ini_data(row_recover,display_date,'recover')
          mapbox_data.ini_data(row_death,display_date,'death')

      mapbox_data.ini_bar()
      Plotly.newPlot(barchart, mapbox_data.bar_data, bar_layout);

      mapbox_data.set_nums(display_date)
      // console.log(mapbox_data)

      var slider = d3
        .sliderBottom()
        .min(d3.min(dataTime))
        .max(d3.max(dataTime))
        .step(1000 * 60 * 60 * 24)
        .width(1200)
        .ticks(15)
        .fill(["red"])
        .displayValue(true)
        .on('onchange', val => {
          mapbox_data.update_data(rows_confirm,val,'confirm')
          mapbox_data.update_data(row_recover,val,'recover')
          mapbox_data.update_data(row_death,val,'death')

          mapbox_data.set_nums(val)

          mapbox_data.ini_bar()
          Plotly.newPlot(barchart, mapbox_data.bar_data, bar_layout);
        });

      d3.select('#slider')
        .append('svg')
        .attr('width', 1500)
        .attr('height', 100)
        .append('g')
        .attr('transform', 'translate(30,30)')
        .call(slider);

      slider.value([display_date])

      })
    })
  })

function get_data(rows,header,item){
    var cityName = unpack(rows, 'Province/State'),
      cityCountry = unpack(rows, 'Country/Region'),
      cityPop = unpack(rows, header),
      cityLat = unpack(rows, 'Lat'),
      cityLon = unpack(rows, 'Long'),
      citySize = [],
      // levels = [],
      hoverText = [];

    for ( var i = 0 ; i < cityPop.length; i++) {
        var currentSize = 0
        if (cityPop[i] > 0){
          currentSize=Math.log(cityPop[i])*5+5 
      }
        if (cityName[i]==''){var currentText = cityCountry[i] + ": " + cityPop[i];}
        else{
          if (item=="confirm"){label = "Confirmed"}
          if (item=="recover"){label = "Recovered"}
          if (item=="death"){label = "Death"}
          var currentText = cityName[i] + " "+label + ": " + cityPop[i];}
        citySize.push(currentSize);
        hoverText.push(currentText);
        // levels.push(level);
    }
    return [cityName, cityCountry, cityPop, cityLat, cityLon, citySize, hoverText]
}

function get_header(val){
  var year = val.getFullYear()%100;
      month = val.getMonth()+1;
      date = val.getDate();
  return month+'/'+date+'/'+year
}

function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
}
