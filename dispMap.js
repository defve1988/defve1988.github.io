var map_layout = {
  title: "Global Cases",
  titlefont: {color:"red", size:24},
  paper_bgcolor:'black',
    showlegend: false,
    mapbox: { style: "dark", zoom: 2, center: { lon: 114, lat: 30 } },
    margin: {r: 0, t: 0, b: 0, l: 0, pad: 0},
};

function get_header(val){

  var year = val.getFullYear()%100,
    month = val.getMonth()+1,
    date = val.getDate();

  return month+'/'+date+'/'+year
}

function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
}

function get_data(rows,header){
    var cityName = unpack(rows, 'Province/State'),
    cityCountry = unpack(rows, 'Country/Region'),
    cityPop = unpack(rows, header),
    cityLat = unpack(rows, 'Lat'),
    cityLon = unpack(rows, 'Long'),
    citySize = [],
    levels = [],
    hoverText = [];

    for ( var i = 0 ; i < cityPop.length; i++) {
        var currentSize = 0
        if (cityPop[i]<=5 && cityPop[i]>0){currentSize = 5; level = 1}
        else if (cityPop[i]<=10 && cityPop[i]>5){currentSize = 10; level = 2}
        else if (cityPop[i]<=25 && cityPop[i]>10){currentSize = 15; level = 3}
        else if (cityPop[i]<=100 && cityPop[i]>25){currentSize = 20; level = 4}
        else if (cityPop[i]<=200 && cityPop[i]>100){currentSize = 25; level = 5}
        else if (cityPop[i]<=500 && cityPop[i]>200){currentSize = 30; level = 6}
        else if (cityPop[i]<=1000 && cityPop[i]>500){currentSize = 35; level = 7}
        else if (cityPop[i]<=2000 && cityPop[i]>1000){currentSize = 40; level = 8}
        else if (cityPop[i]<=5000 && cityPop[i]>2000){currentSize = 50; level = 9}
        else if (cityPop[i]>5000){currentSize = 55;level = 10}
        if (cityName[i]=="Hubei"){currentSize = 125; level = 11}
        if (cityName[i]==''){var currentText = cityCountry[i] + ": " + cityPop[i];}
        else{var currentText = cityName[i] + ": " + cityPop[i];}
        citySize.push(currentSize);
        hoverText.push(currentText);
        levels.push(level);
    }

    return [cityName,cityCountry,cityPop,cityLat,cityLon,citySize,levels,hoverText]
}
