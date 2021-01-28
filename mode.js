function cookies() {
	let cookies = document.cookie.split(';');
	if (cookies.length > 0)
	{
		for (i = 0; cookies[i]; i++)
		{
			let $elem = cookies[i].split('=');
			if ($elem[0] == "dark")
			{
				if ($elem[1] == "true")
					changemode(true);
				else
					changemode(false);
				return ($elem[1]);
			}
		}
		if (!cookies[i])
			document.cookie = "dark" + "=" + "true";
	}
	else
		document.cookie = "dark" + "=" + "true";
};

function mode() {
	if (typeof mode.dark == 'undefined')
	{
		if (cookies() == "false")
		{
			document.cookie = "dark" + "=" + "true";
			mode.dark = true;
		}
		else
		{
			document.cookie = "dark" + "=" + "false";
			mode.dark = false;
		}
	}
	else if (mode.dark === true)
	{
		mode.dark = false;
		document.cookie = "dark" + "=" + "false";
	}
	else
	{
		mode.dark = true;
		document.cookie = "dark" + "=" + "true";
	}
	changemode(mode.dark);
}

function changemode($dark) {
	if ($dark === false)
	{
		document.body.style.backgroundColor = "whitesmoke";
		document.getElementById("topmenu").style.backgroundColor = "rgba(" + 255 + "," + 255 + "," + 255 + "," + 0.8 + ")";
		document.getElementById("contactmenu").style.backgroundColor = "rgba(" + 255 + "," + 255 + "," + 255 + "," + 0.8 + ")";
		document.getElementById("mode").style.backgroundColor = "rgb(" + 30 + "," + 30 + "," + 30 + ")";
		document.getElementById("elemlink").style.color = "black";
		document.getElementById("linkedin").setAttribute('src', "content/linkedin-26.png");
		document.getElementById("github").setAttribute('src', "content/GitHub-Mark-32px.png");
		var elem = document.getElementsByClassName("link");
		for(var i = 0; elem != null && elem[i];i++)
			elem[i].style.color = "black";
		var fontcolor = document.getElementsByClassName("project");
		for(var i = 0; fontcolor != null && fontcolor[i];i++)
		{
			fontcolor[i].style.backgroundColor = "white";
			fontcolor[i].style.boxShadow = "3px 3px 5px " + "rgb(" + 131 + "," + 131 + "," + 131 + ")";
			fontcolor[i].style.color = "black";
		}
		var fontcolor = document.getElementsByTagName("p")
		for(var i = 0; fontcolor[i];i++)
			fontcolor[i].style.color = "black";
		var elementExists = document.getElementById("student");
		if (elementExists != null)
			elementExists.style.color = "black";
		var elementExists = document.getElementById("story");
		if (elementExists != null)
		{
			document.getElementById("aboutme").style.backgroundColor = "rgba(" + 255 + "," + 255 + "," + 255 + "," + 0.7 + ")";
			elementExists.style.backgroundColor = "rgba(" + 204 + "," + 204 + "," + 204 + "," + 0.7 + ")";
		}	
		var elementExists = document.getElementById("welcome");
		if (elementExists != null)
			elementExists.style.backgroundColor = "rgba(" + 235 + "," + 235 + "," + 235 + "," + 0.7 + ")";
	}
	else
	{
		document.body.style.backgroundColor = "rgb(" + 14 + "," + 14 + "," + 14 + ")";
		document.getElementById("topmenu").style.backgroundColor = "rgba(" + 30 + "," + 30 + "," + 30 + "," + 0.8 + ")";
		document.getElementById("contactmenu").style.backgroundColor = "rgba(" + 30 + "," + 30 + "," + 30 + "," + 0.8 + ")";
		document.getElementById("mode").style.backgroundColor = "whitesmoke";
		document.getElementById("elemlink").style.color = "white";
		document.getElementById("linkedin").setAttribute('src', "content/linkedin-24.png");
		document.getElementById("github").setAttribute('src', "content/github-11-32.png");
		var elem = document.getElementsByClassName("link");
		for(var i = 0; elem != null && elem[i];i++)
			elem[i].style.color = "white";
		var fontcolor = document.getElementsByClassName("project");
		for(var i = 0; fontcolor != null && fontcolor[i];i++)
		{

			fontcolor[i].style.boxShadow = "3px 3px 5px " + "rgb(" + 70 + "," + 70 + "," + 70 + ")";
			fontcolor[i].style.backgroundColor = "rgb(" + 30 + "," + 30 + "," + 30 + ")";
			fontcolor[i].style.color = "white";
		}
		var fontcolor = document.getElementsByTagName("p")
		for(var i = 0; fontcolor[i];i++)
			fontcolor[i].style.color = "white";
		var elementExists = document.getElementById("student");
		if (elementExists != null)
			elementExists.style.color = "white";
		var elementExists = document.getElementById("story");
		if (elementExists != null)
		{
			document.getElementById("aboutme").style.backgroundColor = "rgba(" + 20 + "," + 20 + "," + 20 + "," + 0.7 + ")";
			elementExists.style.backgroundColor = "rgba(" + 100 + "," + 100 + "," + 100 + "," + 0.7 + ")";
		}
		var elementExists = document.getElementById("welcome");
		if (elementExists != null)
			elementExists.style.backgroundColor = "rgba(" + 90 + "," + 90 + "," + 90 + "," + 0.7 + ")";
	}
}
window.addEventListener('resize', function(){
	var box = document.getElementById("story");
	if (box != null && window.innerWidth <= 480)
		box.style.width = 80 + "%";
	else if(box != null && window.innerWidth > 480)
		box.style.width = 50 + "%";
});