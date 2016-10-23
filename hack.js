function move(id){
	var score = parseInt(document.getElementById('score').innerHTML);
	score++;
	document.getElementById('score').innerHTML = score;
	
	var bug= document.getElementById(id);
	var bugtype = 'bug1.gif';
	if (bugtype !='spider.gif' && score % 5 == 0){
		bugtype = 'spider.gif';
	}
	bug.src ='kill2.png';
	sleep(200).then(() =>{
		bug.src = bugtype;
		bug.style.backgroundImage ='none';
		var x = window.innerWidth-200;
		var y = window.innerHeight-200;
		document.getElementById(id).style.marginLeft = 
			Math.floor(Math.random() * x) + 1+"px";
		document.getElementById(id).style.marginTop = 
			Math.floor(Math.random() * y) + 1+"px";
	});
}
function sleep (time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}