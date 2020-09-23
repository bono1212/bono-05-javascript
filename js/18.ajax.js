function onAjax() {
	$.ajax({
		type: 'get',
		dataType: 'json',
		url: '../json/score.json',
		success: function (r){
			console.log(r);
		}
	});
}

function onAjaxTeacher() {
	//$.get(url, sendData, callback);
	$.get('http://192.168.0.14:5500/json/score.json', function (r){
		console.log(r);
	});
}


function onWeather() {
	var url = 'http://api.openweathermap.org/data/2.5/weather';
	var data = {
		appid: 'b059e459e8e4a4f9eee7a5505a60b714',
		id: '1835848',
		units: 'metric'
	};
	var success= function(r) {
		console.log(r);
	}
	$.get(url, data, success);
}


$("#btnMY").click(onAjax);
$("#btnTeacher").click(onAjaxTeacher);
$("#btnWeather").click(onWeather);