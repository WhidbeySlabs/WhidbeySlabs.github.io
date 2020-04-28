/* 46087 Current Data Request */

const xhr_46087_c_s = new XMLHttpRequest();

xhr_46087_c_s.onreadystatechange = function(){
	if(xhr_46087_c_s.readyState == 4){
		if(xhr_46087_c_s.status == 200){
		
		var obs = xhr_46087_c_s.responseText;
		//console.log(obs);
		var obs_split = obs.split(/[\s\n]+/);
		
		$("#station_1 #obs_time").html(obs_split[obs_split.lastIndexOf("PDT") - 2] + " " +
			obs_split[obs_split.lastIndexOf("PDT") - 1] + " " +
			obs_split[obs_split.lastIndexOf("PDT")]);
		if(obs_split.length > 40){	
			$("#station_1 #swell_h").html(obs_split[obs_split.indexOf("Swell:") + 1] + " " +
				obs_split[obs_split.indexOf("Swell:") + 2]);
			$("#station_1 #swell_p").html(obs_split[obs_split.indexOf("Period:") + 1] + " " +
				obs_split[obs_split.indexOf("Period:") + 2]);
			$("#station_1 #swell_d").html(obs_split[obs_split.indexOf("Direction:") + 1]);
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
		
		$("#station_2 #obs_time").html(obs_split[obs_split.lastIndexOf("PDT") - 2] + " " +
			obs_split[obs_split.lastIndexOf("PDT") - 1] + " " +
			obs_split[obs_split.lastIndexOf("PDT")]);
		if(obs_split.length > 40){						
			$("#station_2 #swell_h").html(obs_split[obs_split.indexOf("Swell:") + 1] + " " +
				obs_split[obs_split.indexOf("Swell:") + 2]);
			$("#station_2 #swell_p").html(obs_split[obs_split.indexOf("Period:") + 1] + " " +
				obs_split[obs_split.indexOf("Period:") + 2]);
			$("#station_2 #swell_d").html(obs_split[obs_split.indexOf("Direction:") + 1]);
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
		
		$("#station_3 #obs_time").html(obs_split[obs_split.lastIndexOf("PDT") - 2] + " " +
			obs_split[obs_split.lastIndexOf("PDT") - 1] + " " +
			obs_split[obs_split.lastIndexOf("PDT")]);
		if(obs_split.length > 40){						
			$("#station_3 #swell_h").html(obs_split[obs_split.indexOf("Swell:") + 1] + " " +
				obs_split[obs_split.indexOf("Swell:") + 2]);
			$("#station_3 #swell_p").html(obs_split[obs_split.indexOf("Period:") + 1] + " " +
				obs_split[obs_split.indexOf("Period:") + 2]);
			$("#station_3 #swell_d").html(obs_split[obs_split.indexOf("Direction:") + 1]);
		}else{}
		
	}
	
	else if(xhr_46267.status == 404){
			console.log("File not Found");
	}
	
	else{}
}	
};

xhr_46267.open('get', "https://www.ndbc.noaa.gov/data/latest_obs/46267.txt", true);
xhr_46267.send();

/* 46087 Rate of swell change request Data Request */

const xhr_46087_rot_s = new XMLHttpRequest();

xhr_46087_rot_s.onreadystatechange = function(){
	if(xhr_46087_rot_s.readyState == 4){
		if(xhr_46087_rot_s.status == 200){
		
		var obs = xhr_46087_rot_s.responseText;
		console.log(obs);
		var obs_split = obs.split(/[\s\n]+/);
		console.log(obs_split);
		
		console.log(obs_split[obs_split.indexOf("SwH")+15*2]);
		console.log(obs_split[obs_split.indexOf("SwH")+15*3]);
		
		var latest_avg_swell = (parseFloat(obs_split[obs_split.indexOf("SwH")+15*2]) + parseFloat(obs_split[obs_split.indexOf("SwH")+15*3]) 
					+ parseFloat(obs_split[obs_split.indexOf("SwH")+15*4]));
					
		var past_avg_swell = (parseFloat(obs_split[obs_split.indexOf("SwH")+15*5]) + parseFloat(obs_split[obs_split.indexOf("SwH")+15*6]) 
					+ parseFloat(obs_split[obs_split.indexOf("SwH")+15*7]));
					
		console.log(latest_avg_swell/past_avg_swell);
		
		if((latest_avg_swell/past_avg_swell) > 1){
			$("#station_1 #swell_h").css("color", "green")
		}else{
			$("#station_1 #swell_h").css("color", "red")
		}
		/*
		$("#station_3 #obs_time").html(obs_split[obs_split.lastIndexOf("PDT") - 2] + " " +
			obs_split[obs_split.lastIndexOf("PDT") - 1] + " " +
			obs_split[obs_split.lastIndexOf("PDT")]);
		if(obs_split.length > 40){						
			$("#station_3 #swell_h").html(obs_split[obs_split.indexOf("Swell:") + 1] + " " +
				obs_split[obs_split.indexOf("Swell:") + 2]);
			$("#station_3 #swell_p").html(obs_split[obs_split.indexOf("Period:") + 1] + " " +
				obs_split[obs_split.indexOf("Period:") + 2]);
			$("#station_3 #swell_d").html(obs_split[obs_split.indexOf("Direction:") + 1]);
		}else{}
		*/
	}
	
	else if(xhr_46087_rot_s.status == 404){
			console.log("File not Found");
	}
	
	else{}
}	
};

xhr_46087_rot_s.open('get', "https://cors-anywhere.herokuapp.com/https://www.ndbc.noaa.gov/data/5day2/46087_5day.spec", true);
xhr_46087_rot_s.send();

/*Timing for Swell Data*/
/*	
var d = new Date();
var n = d.getUTCHours();
$("#rtf").html(d);
console.log(d);
console.log(n);3*/