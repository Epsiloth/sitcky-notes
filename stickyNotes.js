class StickyNote{
	constructor(text="", color="yellow"){
		/*
		let today = new Date();
		var DD = ("0" + today.getDate()).slice(-2);
		var MM = ("0" + (today.getMonth() + 1)).slice(-2);
		var YYYY = today.getFullYear();
		var hh = ("0" + today.getHours()).slice(-2);
		var mm = ("0" + today.getMinutes()).slice(-2);
		let date = "Note created on "+YYYY+"-"+MM+"-"+DD+" "+hh+":"+mm;
		*/

		this.text = text;
		this.color = color;
	}

	drawNote(contenedor){
		this.element = document.createElement("textarea");
		this.element.innerHTML = this.text;
		this.element.setAttribute("style", "user-select:none;position:absolute;border:2px solid "+this.color+";background:"+this.color+";min-height:200px;min-width:200px;max-width:500px;cursor:pointer;");
		this.element.setAttribute("draggable", false);
		this.contenedor = contenedor;
		contenedor.appendChild(this.element);
	}
}

var isDragged = false;
var elmnt = "";
var rect = "";
var x, y, offsetX, offsetY;

function clicking(e){
	isDragged=!isDragged;
	elmnt = event.target;
	elmntX = 0;
	elmntY = 0;
	if(elmnt.style.left != ""){
		elmntX = parseInt(elmnt.style.left, 10);
	}
	if(elmnt.style.top != ""){
		elmntY = parseInt(elmnt.style.top, 10);
	}
	offsetX = x - elmntX;
	offsetY = y - elmntY;
}

function dragElement(e){
	x = e.clientX;
	y = e.clientY;
	if(isDragged){
		elmnt.style.left = x-offsetX;
		elmnt.style.top = y-offsetY;
	}
}

function createNewNote(contenedor){
	let note = new StickyNote();
	note.drawNote(contenedor);
	note.element.onclick = clicking;
	return note;
}