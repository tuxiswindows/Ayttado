var type = "web";
controlType(type);

function resetTypeFontWeight() {
    document.getElementById("TypeText").style.fontWeight = "normal";
    document.getElementById("TypeImage").style.fontWeight = "normal";
    document.getElementById("TypeVideo").style.fontWeight = "normal";
    document.getElementById("TypeNews").style.fontWeight = "normal";
    document.getElementById("TypeInfo").style.fontWeight = "normal";
    document.getElementById("TypeMovie").style.fontWeight = "normal";
    document.getElementById("TypeIt").style.fontWeight = "normal";
    document.getElementById("TypeAcademic").style.fontWeight = "normal";
};

function controlType(t) {
	resetTypeFontWeight();
		if (t == "web") {
            document.getElementById("TypeText").style.fontWeight = "bold"; 
        }
        else if (t == "image") {
			document.getElementById("TypeImage").style.fontWeight = "bold"; 				
        }
        else if (t == "video") {
			document.getElementById("TypeVideo").style.fontWeight = "bold"; 
        }
        else if (t == "news") {
    		document.getElementById("TypeNews").style.fontWeight = "bold"; 
        }
        else if (t == "info") {
			document.getElementById("TypeInfo").style.fontWeight = "bold"; 			
        }
        else if (t == "movie") {
			document.getElementById("TypeMovie").style.fontWeight = "bold"; 
		}
        else if (t == "it") {
			document.getElementById("TypeIt").style.fontWeight = "bold";             	
		}
        else if (t == "academic") {
			document.getElementById("TypeAcademic").style.fontWeight = "bold"; 
			};
}

const form = document.forms["SearchQuery"];

document.getElementById("TypeText").onclick = function() {	
		type = "web";
		controlType(type);
};

document.getElementById("TypeImage").onclick = function() {		
    type = "image";
	controlType(type);
};

document.getElementById("TypeVideo").onclick = function() {                       
	type = "video";
	controlType(type);
};

document.getElementById("TypeNews").onclick = function() {                        
	type = "news";
	controlType(type);
};

document.getElementById("TypeInfo").onclick = function() {                        
    type = "info";
	controlType(type);
};

document.getElementById("TypeMovie").onclick = function() {                       
	type = "movie";
	controlType(type);
};

document.getElementById("TypeIt").onclick = function() {
    type = "it";
	controlType(type);
};

document.getElementById("TypeAcademic").onclick = function() {
    type = "academic";
	controlType(type);
};


document.getElementById("Confirm").onclick = function() {
    console.log("Searched: " + form.Search.value);
    if (form.Search.value.startsWith("!")) {
        window.open("https://lite.duckduckgo.com/lite?q=" + form.Search.value);
    } else {
        window.open("https://www.artadosearch.com/search?i=" + form.Search.value + "&type=" + type);
    }
};