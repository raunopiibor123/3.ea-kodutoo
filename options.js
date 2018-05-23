

this.URL = document.getElementById(EnterUrl);
var URLs = [];



		

document.getElementById('Save').addEventListener('click', function(){
	let url = document.getElementById('EnterUrl').value;
	//chrome.storage.sync.set({key: url});	
	URLs.push(url);
	var myJSON = JSON.stringify(URLs);
	chrome.storage.local.set({"lehed":myJSON}, function(){
	let array = JSON.parse(myJSON);
	console.log(array);
	

	});
	
});



