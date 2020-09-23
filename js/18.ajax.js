function dataMaker(r){
	var i, html = '';
	for (i in r.students){
			html+= '<tr>';
			html+= '<td>'+(Number(i) + 1)+'</td>';
			html+= '<td>'+r.students[i].name+'</td>';
			html+= '<td>'+r.students[i].kor+'점</td>';
			html+= '<td>'+r.students[i].eng+'점</td>';
			html+= '<td>'+r.students[i].math+'점</td>';
			html+= '</tr>';
	}
	$("#scoreTbl tbody").empty();
	$("#scoreTbl tbody").append(html);
}


function onAjax() {
	$.ajax({
		type: 'get',
		dataType: 'json',
		url: '../json/score.json',
		success: dataMaker
	});
}


function onAjaxTeacher() {
	//$.get(url, sendData, callback);
	$.get('http://192.168.0.14:5500/json/score.json', dataMaker);
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
		$("#weatherTbl .temp-td").html(r.main.temp+'도(체감온도: '+r.main.feels_like+'도)');
		$("#weatherTbl .weather-td").html(r.weather[0].main+'('+r.main.descriptions+')');
	}
	$.get(url, data, success);
}


$("#btnMY").click(onAjax);
$("#btnTeacher").click(onAjaxTeacher);
$("#btnWeather").click(onWeather);