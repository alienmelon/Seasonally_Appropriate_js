/*
Welcome to the
╔═╗╔═╗╔═╗╔═╗╔═╗╔╗╔╔═╗╦  ╦ ╦ ╦  
╚═╗║╣ ╠═╣╚═╗║ ║║║║╠═╣║  ║ ╚╦╝  
╚═╝╚═╝╩ ╩╚═╝╚═╝╝╚╝╩ ╩╩═╝╩═╝╩   
╔═╗╔═╗╔═╗╦═╗╔═╗╔═╗╦═╗╦╔═╗╔╦╗╔═╗
╠═╣╠═╝╠═╝╠╦╝║ ║╠═╝╠╦╝║╠═╣ ║ ║╣ 
╩ ╩╩  ╩  ╩╚═╚═╝╩  ╩╚═╩╩ ╩ ╩ ╚═╝
javascript file!
this is a simple snow effect for your website.
you can determine snow amount, and wind speeds!
written by @alienmelon (there are many javascript snow scripts. this one is mine.)
*/

//folder name
var str_snow_imagePath = "seasonal_js_img/";
//image names
var arr_snow_images = ["IMG_SNOWFLAKE_01.gif", "IMG_SNOWFLAKE_02.gif", "IMG_SNOWFLAKE_03.gif", "IMG_SNOWFLAKE_04.gif"];
//all the snow divs
var arr_snow_div = [];
var arr_snow_ids = [];

function snow_returnDocWidth(){
	var num_width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	return num_width;
}

function snow_returnDocHeight(){
	var num_height = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	return num_height;
}

//place snow randomly
function snow_place_randomly(div){
	div.style.top = String(Math.random()*snow_returnDocHeight()) + "px";
	div.style.left = String(Math.random()*snow_returnDocWidth()) + "px";
};

//send snow back to top at random
function reset_snow(div){
	div.style.top = "0px";
	div.style.left = String((Math.random()*snow_returnDocWidth()) - 50) + "px";	
}

function init_snow(div, intervalID, num_windSpeed, num_fallSpeed){
	//setup
	var num_snow_radius = 0;
	var num_snow_i = num_fallSpeed;
	var num_snow_k = -Math.PI + Math.random()*Math.PI;
	//
	var num_snow_x = parseInt(div.style.left);
	var num_snow_y = parseInt(div.style.top);
	//move
	function _interval(){
		//
		num_snow_x = parseInt(div.style.left);
		num_snow_y = parseInt(div.style.top);
		// horizontal movement
		num_snow_radius += (num_snow_k/180)*Math.PI;
		div.style.left = String(num_snow_x -= num_windSpeed*(Math.cos(num_snow_radius))) + "px";
		// vertical movement
		div.style.top = String(num_snow_y += num_snow_i) + "px";
		//bounds
		if (num_snow_y > snow_returnDocHeight() - 50) {
			reset_snow(div);
		}
		if (num_snow_x > snow_returnDocWidth() - 50){
			reset_snow(div);
		};
		//
	};
	//interval id's & start...
	window["id_snow_flake_" + String(intervalID)] = setInterval(_interval, 30);
	arr_snow_ids.push(window["id_snow_flake_" + String(intervalID)]);
};

//call this to clear the weather
function stop_snowing(){
	for (var i = 0; i<arr_snow_ids.length; ++i){
		clearInterval(arr_snow_ids[i]);
	};
	//
	for (var n = 0; n< arr_snow_div.length; ++n){
		arr_snow_div[n].remove();
	};
}

//call this to start snowing
//recommended amounts for...
//num_windSpeed = 10
//num_fallSpeed = 5
function start_snowing(num_snowAmount, num_windSpeed, num_fallSpeed){
	//clear first (just incase)
	arr_snow_div = [];
	arr_snow_ids = [];
	//
	for (var i = 0; i<num_snowAmount; ++i){
		//
		var snow_flake = document.createElement("div");
		snow_flake.id = "_snow_flake_" + String(i);
		snow_flake.className = "snow";
		//snow.appendChild(snow_flake);
		//images
		snow_flake.innerHTML = '<img src=' + str_snow_imagePath + arr_snow_images[Math.ceil(Math.random()*arr_snow_images.length)-1] + '>';
		snow_flake.style.position = 'absolute';
		snow_place_randomly(snow_flake);
		snow_flake.style.pointerEvents = "none";
		//
		document.getElementsByTagName("body")[0].appendChild(snow_flake);
		arr_snow_div.push(snow_flake);
		init_snow(snow_flake, i, num_windSpeed, num_fallSpeed);
	};
	//
};