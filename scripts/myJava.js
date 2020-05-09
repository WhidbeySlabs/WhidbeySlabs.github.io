/* 46087 Current Data Request */

const xhr_46087_c_s = new XMLHttpRequest();

xhr_46087_c_s.onreadystatechange = function(){
	if(xhr_46087_c_s.readyState == 4){
		if(xhr_46087_c_s.status == 200){
		
		var obs = xhr_46087_c_s.responseText;
		//console.log(obs);
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
		//console.log(obs);
		var obs_split = obs.split(/[\s\n]+/);
		//console.log(obs_split);
		
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
		//console.log(obs);
		var obs_split = obs.split(/[\s\n]+/);
		//console.log(obs_split);
		
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
		//console.log(obs);
		var obs_split = obs.split(/[\s\n]+/);
		//console.log(obs_split);
		
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
		//console.log(obs);
		var obs_split = obs.split(/[\s\n]+/);
		//console.log(obs_split);
		
		//console.log(obs_split[obs_split.indexOf("SwH")+15*2]);
		//console.log(obs_split[obs_split.indexOf("SwH")+15*3]);
		
		var latest_avg_swell = (parseFloat(obs_split[obs_split.indexOf("SwH")+15*2]) + parseFloat(obs_split[obs_split.indexOf("SwH")+15*3]) 
					+ parseFloat(obs_split[obs_split.indexOf("SwH")+15*4]));
					
		var past_avg_swell = (parseFloat(obs_split[obs_split.indexOf("SwH")+15*5]) + parseFloat(obs_split[obs_split.indexOf("SwH")+15*6]) 
					+ parseFloat(obs_split[obs_split.indexOf("SwH")+15*7]));
					
		//console.log(latest_avg_swell/past_avg_swell);
		
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

/*Timing for Tide Data*/
	
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

//console.log(parseInt(date.getHours() + date_min));

console.log(date_year + date_month + date_day + " " + date_year + date_month + date_day_tomorrow);

/* Fort Ebey Tide Data Request */

const xhr_ebeyTide = new XMLHttpRequest();

xhr_ebeyTide.onreadystatechange = function(){
	if(xhr_ebeyTide.readyState == 4){
		if(xhr_ebeyTide.status == 200){
		
		var obs = xhr_ebeyTide.responseText;
		obs = (JSON.parse(obs));
		console.log(obs);
		//console.log(obs.predictions[0]);
		
		var tide_times_string = new Array(8);
		var tide_times_ints = new Array(2);
		var tide_times_int = new Array(8);
		
		
		for(i=0; i < obs.predictions.length; i++){ 
			tide_times_string[i] = (obs.predictions[i].t.split(/[\s\n]+/))[1];
			tide_times_int[i] = (tide_times_string[i].split(/[:]+/));
			tide_times_int[i] = parseInt(tide_times_int[i][0]+tide_times_int[i][1]);
			if(i > 3){
				tide_times_string[i] = tide_times_string[i] + " + 1";
			}else{}	
		}
		
		console.log(tide_times_int);
		
		var i;
		
		if(tide_times_int[0] < parseInt(date.getHours() + date_min) && 
		   tide_times_int[1] < parseInt(date.getHours() + date_min) &&
		   tide_times_int[2] < parseInt(date.getHours() + date_min) &&
		   tide_times_int[3] < parseInt(date.getHours() + date_min)){
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
		
		console.log(i);
		
		$("#obs_time #t_1").html(tide_times_string[i]);
		$("#obs_time #t_2").html(tide_times_string[i + 1]);
		$("#obs_time #t_3").html(tide_times_string[i + 2]);
		/*$("#obs_time #t_4").html(tide_times_string[i + 3]);
		$("#obs_time #t_5").html(obs.predictions[4].t);
		$("#obs_time #t_6").html(obs.predictions[5].t);
		$("#obs_time #t_7").html(obs.predictions[6].t);
		$("#obs_time #t_8").html(obs.predictions[7].t);*/
		
		$("#h_l #t_1").html(obs.predictions[i].type);
		$("#h_l #t_2").html(obs.predictions[i + 1].type);
		$("#h_l #t_3").html(obs.predictions[i + 2].type);
		/*$("#h_l #t_4").html(obs.predictions[i + 3].type);
		$("#h_l #t_5").html(obs.predictions[4].type);
		$("#h_l #t_6").html(obs.predictions[5].type);
		$("#h_l #t_7").html(obs.predictions[6].type);
		$("#h_l #t_8").html(obs.predictions[7].type);*/
		
		$("#value #t_1").html(obs.predictions[i].v + " ft");
		$("#value #t_2").html(obs.predictions[i + 1].v + " ft");
		$("#value #t_3").html(obs.predictions[i + 2].v + " ft");
		/*$("#value #t_4").html(obs.predictions[i + 3].v);
		$("#value #t_5").html(obs.predictions[4].v);
		$("#value #t_6").html(obs.predictions[5].v);
		$("#value #t_7").html(obs.predictions[6].v);
		$("#value #t_8").html(obs.predictions[7].v);*/

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

//console.log(url);

xhr_ebeyTide.open('get', url, true);
xhr_ebeyTide.send();

