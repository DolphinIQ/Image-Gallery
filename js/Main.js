
var imgDiv;
var display = false;

document.addEventListener('click', function(){
	if(display){
		document.body.removeChild(imgDiv);
		clearInterval(alpha);
		display = false;
	}
});

function imgClick(imgLink){
	imgDiv = document.createElement('div');
	var img = document.createElement('img');
	img.src = imgLink;
	imgDiv.className="img-centered flex";
	imgDiv.appendChild(img);
	
	appear(imgDiv);
	document.body.appendChild(imgDiv);
	setTimeout(function(){display = true;}, 100);
}

function appear(dom){
	var timer = 0;
	alpha = setInterval(function(){
		if(timer>=1.1){
			clearInterval(alpha);
		}else{
			dom.style.opacity = timer;
			timer += 0.1;
		}
	},1000/20);
}