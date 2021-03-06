/* 46087 Current Data Request */

const xhr_46087_c_s = new XMLHttpRequest();

xhr_46087_c_s.onreadystatechange = function(){
	if(xhr_46087_c_s.readyState == 4){
		if(xhr_46087_c_s.status == 200){
		
		var obs = xhr_46087_c_s.responseText;

		var obs_split = obs.split(/[\s\n]+/);
		
		$("#obs_time #station_1").html(obs_split[obs_split.lastIndexOf("PDT") - 2] + " " +
			obs_split[obs_split.lastIndexOf("PDT") - 1] + " " +
			obs_split[obs_split.lastIndexOf("PDT")]);
		if(obs_split.length > 40){	
			$("#swell_h #station_1").html(obs_split[obs_split.indexOf("Swell:") + 1] + " " +
				obs_split[obs_split.indexOf("Swell:") + 2]);
			$("#swell_p #station_1").html(obs_split[obs_split.indexOf("Period:") + 1] + " " +
				obs_split[obs_split.indexOf("Period:") + 2]);
			$("#swell_d #station_1").html(obs_split[obs_split.indexOf("Direction:") + 1]);
		}else{}
	}
	
	else if(xhr_46087_c_s.status == 404){
			console.log("File not Found");
	}
	
	else{}
}	
};

xhr_46087_c_s.open('get', "https://cors-anywhere.herokuapp.com/https://www.ndbc.noaa.gov/data/latest_obs/46087.txt", true);
xhr_46087_c_s.send();

/* 46088 Current Data Request */

const xhr_46088 = new XMLHttpRequest();

xhr_46088.onreadystatechange = function(){
	if(xhr_46088.readyState == 4){
		if(xhr_46088.status == 200){
		
		var obs = xhr_46088.responseText;
		var obs_split = obs.split(/[\s\n]+/);
		
		$("#obs_time #station_3").html(obs_split[obs_split.lastIndexOf("PDT") - 2] + " " +
			obs_split[obs_split.lastIndexOf("PDT") - 1] + " " +
			obs_split[obs_split.lastIndexOf("PDT")]);
		$("#wind_d #station_3").html(obs_split[obs_split.indexOf("Wind:") + 1]);
		$("#wind_s #station_3").html(obs_split[obs_split.indexOf("Wind:") + 3] + " " +
			obs_split[obs_split.indexOf("Wind:") + 4]);
		if(obs_split.length > 40){						
			$("#swell_h #station_3").html(obs_split[obs_split.indexOf("Swell:") + 1] + " " +
				obs_split[obs_split.indexOf("Swell:") + 2]);
			$("#swell_p #station_3").html(obs_split[obs_split.indexOf("Period:") + 1] + " " +
				obs_split[obs_split.indexOf("Period:") + 2]);
			$("#swell_d #station_3").html(obs_split[obs_split.indexOf("Direction:") + 1]);
		}else{}
		
	}
	
	else if(xhr_46088.status == 404){
			console.log("File not Found");
	}
	
	else{}
}	
};

xhr_46088.open('get', "https://cors-anywhere.herokuapp.com/https://www.ndbc.noaa.gov/data/latest_obs/46088.txt", true);
xhr_46088.send();
	
/* 46267 Current Data Request */

const xhr_46267 = new XMLHttpRequest();

xhr_46267.onreadystatechange = function(){
	if(xhr_46267.readyState == 4){
		if(xhr_46267.status == 200){
		
		var obs = xhr_46267.responseText;

		var obs_split = obs.split(/[\s\n]+/);
		
		$("#obs_time #station_2").html(obs_split[obs_split.lastIndexOf("PDT") - 2] + " " +
			obs_split[obs_split.lastIndexOf("PDT") - 1] + " " +
			obs_split[obs_split.lastIndexOf("PDT")]);
		if(obs_split.length > 40){						
			$("#swell_h #station_2").html(obs_split[obs_split.indexOf("Swell:") + 1] + " " +
				obs_split[obs_split.indexOf("Swell:") + 2]);
			$("#swell_p #station_2").html(obs_split[obs_split.indexOf("Period:") + 1] + " " +
				obs_split[obs_split.indexOf("Period:") + 2]);
			$("#swell_d #station_2").html(obs_split[obs_split.indexOf("Direction:") + 1]);
		}else{}
		
	}
	
	else if(xhr_46267.status == 404){
			console.log("File not Found");
	}
	
	else{}
}	
};

xhr_46267.open('get', "https://cors-anywhere.herokuapp.com/https://www.ndbc.noaa.gov/data/latest_obs/46267.txt", true);
xhr_46267.send();

/* PTWW1 Current Data Request */

const xhr_ptww1 = new XMLHttpRequest();

xhr_ptww1.onreadystatechange = function(){
	if(xhr_ptww1.readyState == 4){
		if(xhr_ptww1.status == 200){
		
		var obs = xhr_ptww1.responseText;
		
		var obs_split = obs.split(/[\s\n]+/);
		
		$("#obs_time #station_2").html(obs_split[obs_split.lastIndexOf("PDT") - 2] + " " +
			obs_split[obs_split.lastIndexOf("PDT") - 1] + " " +
			obs_split[obs_split.lastIndexOf("PDT")]);
		$("#wind_d #station_2").html(obs_split[obs_split.indexOf("Wind:") + 1]);
		$("#wind_s #station_2").html(obs_split[obs_split.indexOf("Wind:") + 3] + " " +
			obs_split[obs_split.indexOf("Wind:") + 4]);
		
	}
	
	else if(xhr_ptww1.status == 404){
			console.log("File not Found");
	}
	
	else{}
}	
};

xhr_ptww1.open('get', "https://cors-anywhere.herokuapp.com/https://www.ndbc.noaa.gov/data/latest_obs/ptww1.txt", true);
xhr_ptww1.send();

/* 46087 Rate of swell change request Data Request */

const xhr_46087_rot_s = new XMLHttpRequest();

xhr_46087_rot_s.onreadystatechange = function(){
	if(xhr_46087_rot_s.readyState == 4){
		if(xhr_46087_rot_s.status == 200){
		
		var obs = xhr_46087_rot_s.responseText;

		var obs_split = obs.split(/[\s\n]+/);
		
		var latest_avg_swell = (parseFloat(obs_split[obs_split.indexOf("SwH")+15*2]) + parseFloat(obs_split[obs_split.indexOf("SwH")+15*3]) 
					+ parseFloat(obs_split[obs_split.indexOf("SwH")+15*4]));
					
		var past_avg_swell = (parseFloat(obs_split[obs_split.indexOf("SwH")+15*5]) + parseFloat(obs_split[obs_split.indexOf("SwH")+15*6]) 
					+ parseFloat(obs_split[obs_split.indexOf("SwH")+15*7]));
					
		
		$("#swell_t #station_1").html((latest_avg_swell/past_avg_swell).toFixed(2));
		
		if((latest_avg_swell/past_avg_swell).toFixed(2) >= 1){
			$("#swell_t #station_1").css("color", "rgb(10, 87, 12)");
		}else{
			$("#swell_t #station_1").css("color", "rgb(138, 12, 23)");
		}

	}
	
	else if(xhr_46087_rot_s.status == 404){
			console.log("File not Found");
	}
	
	else{}
}	
};

xhr_46087_rot_s.open('get', "https://cors-anywhere.herokuapp.com/https://www.ndbc.noaa.gov/data/5day2/46087_5day.spec", true);
xhr_46087_rot_s.send();

/* 46267 Current Data Request */

const xhr_sisw1 = new XMLHttpRequest();

xhr_sisw1.onreadystatechange = function(){
	if(xhr_sisw1.readyState == 4){
		if(xhr_sisw1.status == 200){
		
		var obs = xhr_sisw1.responseText;
		//console.log(obs);
		var obs_split = obs.split(/[\s\n]+/);
		//console.log(obs_split);
		
		$("#obs_time #station_4").html(obs_split[obs_split.indexOf("PDT") - 2] + " " +
			obs_split[obs_split.lastIndexOf("PDT") - 1] + " " +
			obs_split[obs_split.lastIndexOf("PDT")]);				
		$("#wind_d #station_4").html(obs_split[obs_split.indexOf("Wind:") + 1]);
		$("#wind_s #station_4").html(obs_split[obs_split.indexOf("Wind:") + 3] + " " +
			obs_split[obs_split.indexOf("Wind:") + 4]);
		}
		
	}
	
	else if(xhr_sisw1.status == 404){
			console.log("File not Found");
	}
	
	else{}
};

xhr_sisw1.open('get', "https://cors-anywhere.herokuapp.com/https://www.ndbc.noaa.gov/data/latest_obs/sisw1.txt", true);
xhr_sisw1.send();

/*Date Work*/
	
var date = new Date();
var date_year = date.getFullYear().toString();

var date_month = (date.getUTCMonth() + 1).toString();
if(date_month < 10){
	date_month = "0" + date_month.toString();
}else{date_month = date_month.toString();}


var date_day = date.getDate();
var date_day_tomorrow = date_day + 1;
if(date_day === 9){
	date_day_tomorrow = date_day_tomorrow.toString();
	date_day = "0" + date_day.toString();
}else if(date_day < 9){
	date_day_tomorrow = "0" + date_day_tomorrow.toString();
	date_day = "0" + date_day.toString();
}else{date_day_tomorrow = date_day_tomorrow.toString();
	date_day = date_day.toString();}


var date_min = date.getMinutes();
if(date_min < 10){
	date_min = "0" + date_min.toString();
}else{date_min = date_min.toString();}

/* Weekday Identifier */
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tues";
weekday[3] = "Wed";
weekday[4] = "Thurs";
weekday[5] = "Fri";
weekday[6] = "Sat";

var n = weekday[date.getDay()];

/* Fort Ebey Tide Data Request */

const xhr_ebeyTide = new XMLHttpRequest();

xhr_ebeyTide.onreadystatechange = function(){
	if(xhr_ebeyTide.readyState == 4){
		if(xhr_ebeyTide.status == 200){
		
		var obs = xhr_ebeyTide.responseText;
		obs = (JSON.parse(obs));

		var tide_times_string = new Array(8);
		var tide_times_ints = new Array(2);
		var tide_times_int = new Array(8);
		
		
		for(i=0; i < obs.predictions.length; i++){ 
			tide_times_string[i] = (obs.predictions[i].t.split(/[\s\n]+/))[1];
			tide_times_int[i] = (tide_times_string[i].split(/[:]+/));
			tide_times_int[i] = parseInt(tide_times_int[i][0]+tide_times_int[i][1]);
			if(i > 3){
				tide_times_string[i] = tide_times_string[i] + " + 1";
			}else if(tide_times_int[3] < 100){
				tide_times_string[3] = tide_times_string[3] + " + 1";
			}else{}	
		}
		
		var i;
		
		if(tide_times_int[0] < parseInt(date.getHours() + date_min) && 
		   tide_times_int[1] < parseInt(date.getHours() + date_min) &&
		   tide_times_int[2] < parseInt(date.getHours() + date_min) &&
		   tide_times_int[3] < parseInt(date.getHours() + date_min) &&
		   tide_times_int[3] > 100){
		   i = 3;	 
		}else if (
		   tide_times_int[0] < parseInt(date.getHours() + date_min) && 
		   tide_times_int[1] < parseInt(date.getHours() + date_min) &&
		   tide_times_int[2] < parseInt(date.getHours() + date_min)){
		   i = 2;
		}else if (
		   tide_times_int[0] < parseInt(date.getHours() + date_min) && 
		   tide_times_int[1] < parseInt(date.getHours() + date_min)){
		   i = 1;
		}else{i=0;}
		
		
		$("#obs_time #t_1").html(tide_times_string[i]);
		$("#obs_time #t_2").html(tide_times_string[i + 1]);
		$("#obs_time #t_3").html(tide_times_string[i + 2]);
		
		$("#h_l #t_1").html(obs.predictions[i].type);
		$("#h_l #t_2").html(obs.predictions[i + 1].type);
		$("#h_l #t_3").html(obs.predictions[i + 2].type);
		
		$("#value #t_1").html(obs.predictions[i].v + " ft");
		$("#value #t_2").html(obs.predictions[i + 1].v + " ft");
		$("#value #t_3").html(obs.predictions[i + 2].v + " ft");

		}
		
	}
	
	else if(xhr_ebeyTide.status == 404){
			console.log("File not Found");
	}
	
	else{}
};

const url_p1 = 'https://cors-anywhere.herokuapp.com/https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=';

const url_p2 = '&end_date=';

const url_p3 = '&datum=MLLW&station=9447934&time_zone=lst_ldt&units=english&interval=hilo&format=json'; 

var url = url_p1 + date_year + date_month + date_day + url_p2 + date_year + date_month + date_day_tomorrow + url_p3;


xhr_ebeyTide.open('get', url, true);
xhr_ebeyTide.send();

/* Coast Swell Data Request */

const xhr_swell = new XMLHttpRequest();

xhr_swell.onreadystatechange = function(){
	if(xhr_swell.readyState == 4){
		if(xhr_swell.status == 200){
		
			var obs = xhr_swell.responseXML;
			
			var day_of_week = date.getDay();
			var day_of_week_plus_one;
			var day_of_week_plus_two;
			
			if(day_of_week === 5){
				day_of_week_plus_one = 6;
				day_of_week_plus_two = 0;
			}else if(day_of_week === 6){
				day_of_week_plus_one = 0;
				day_of_week_plus_two = 1;
			}else{
				day_of_week_plus_one = day_of_week + 1;
				day_of_week_plus_two = day_of_week + 2;}		
			
			$("#swell_forecast_data #date_day #t_1").html(weekday[day_of_week] + "\r\n" + date.getDate());
			$("#swell_forecast_data #date_day #t_2").html(weekday[day_of_week_plus_one] + "\r\n" + (date.getDate() + 1).toString());
			$("#swell_forecast_data #date_day #t_3").html(weekday[day_of_week_plus_two] + "\r\n" + (date.getDate() + 2).toString());
			
			$("#swell_forecast_data #date_day #t_1").attr("colspan", ((12 - Math.round(date.getHours())/2).toString()));
			$("#swell_forecast_data #date_day #t_2").attr("colspan", "12");
			
			var numCol = 24;
			
			for(i = 0; i < numCol; i++){
				var DOM_str = "#swell_forecast_data #date_time #t_" + (i+1).toString();
				
				if(i === 0){
					var date_hours = date.getHours();
					var date_hours_future;
				}else{}
				
				date_hours_future = date_hours + (i*2) + 1;
					
				if(date_hours_future === 24 || date_hours_future === 0 || date_hours_future === 48){
					date_hours_future = "12am";
				}else if(date_hours_future === 36 || date_hours_future === 12 || date_hours_future === 60){
					date_hours_future = "12pm";
				}else if(date_hours_future > 60){
					date_hours_future = (date_hours_future - 60).toString() + "pm";
				}else if(date_hours_future > 48){
					date_hours_future = (date_hours_future - 48).toString() + "am";
				}else if(date_hours_future > 36){
					date_hours_future = (date_hours_future - 36).toString() + "pm";
				}else if(date_hours_future > 24){
					date_hours_future = (date_hours_future - 24).toString() + "am";
				}else if(date_hours_future > 12){
					date_hours_future = (date_hours_future - 12).toString() + "pm";
				}else{date_hours_future = date_hours_future.toString() + "am";}
					
				$(DOM_str).html(date_hours_future);
			}
			
			for(i = 0; i < numCol; i++){
				var DOM_str = "#swell_forecast_data #swell_size #t_" + (i+1).toString();
				$(DOM_str).html(obs.getElementsByTagName('swell')[(i*2)].childNodes[0].innerHTML + "ft");		
			}
			
			for(i = 0; i < numCol; i++){
				var DOM_str = "#swell_forecast_data #swell_period #t_" + (i+1).toString();
				$(DOM_str).html(obs.getElementsByTagName('swell')[(i*2)].getAttribute("period") + "s");		
			}
			
			for(i = 0; i < numCol; i++){
				var DOM_str = "#swell_forecast_data #swell_dir #t_" + (i+1).toString();
				$(DOM_str).html(Direction(Number(obs.getElementsByTagName('swell')[(i*2)].childNodes[1].innerHTML)));		
			}

			
		}
		
	}
		
	else if(xhr_swell.status == 404){
			console.log("File not Found");
	}
	
	else{}
};

xhr_swell.open('get', "https://cors-anywhere.herokuapp.com/https://marine.weather.gov/MapClick.php?lat=48.3753&lon=-124.464&FcstType=digitalDWML", true);
xhr_swell.send();

/* Fort Ebey Weather Data Request */

const xhr_ebeyWeather = new XMLHttpRequest();

xhr_ebeyWeather.onreadystatechange = function(){
	if(xhr_ebeyWeather.readyState == 4){
		if(xhr_ebeyWeather.status == 200){
		
		var obs = xhr_ebeyWeather.responseText;
		obs = (JSON.parse(obs));
		
		var numCol = 25;
		
		for(i = 1; i < numCol; i++){
				var DOM_str = "#swell_forecast_data #wind_speed #t_" + (i).toString();
				$(DOM_str).html(obs.properties.periods[i].windSpeed);		
		}
		for(i = 1; i < numCol; i++){
				var DOM_str = "#swell_forecast_data #wind_dir #t_" + (i).toString();
				$(DOM_str).html(obs.properties.periods[i].windDirection);		
		}

		}else{}
		
	}else if(xhr_ebeyWeather.status == 404){
			console.log("File not Found");
	}else{}
};

xhr_ebeyWeather.open('get', "https://cors-anywhere.herokuapp.com/https://api.weather.gov/gridpoints/SEW/115,100/forecast/hourly", true);
xhr_ebeyWeather.send();

/* Direction Function */
function Direction(d_1){
	var d_2;
		if(d_1 < 12){
			d_2 = "N";
		}else if(d_1 < 34){
			d_2 = "NNE";
		}else if(d_1 < 56){
			d_2 = "NE";
		}else if(d_1 < 80){
			d_2 = "ENE";
		}else if(d_1 < 102){
			d_2 = "E";
		}else if(d_1 < 124){
			d_2 = "ESE";
		}else if(d_1 < 147){
			d_2 = "SE";
		}else if(d_1 < 169){
			d_2 = "SSE";
		}else if(d_1 < 192){
			d_2 = "S";
		}else if(d_1 < 214){
			d_2 = "SSW";
		}else if(d_1 < 237){
			d_2 = "SW";
		}else if(d_1 < 259){
			d_2 = "WSW";
		}else if(d_1 < 282){
			d_2 = "W";
		}else if(d_1 < 304){
			d_2 = "WNW";
		}else if(d_1 < 327){
			d_2 = "NW";
		}else if(d_1 < 349){
			d_2 = "NNW";
		}else{d_2 = "N";}
		
		return d_2;
}