var navigation = document.getElementById('menu');
var buttonClass = document.getElementsByClassName('button');
for (var i = 0; i < buttonClass.length; i++) {
	var newP = document.createElement('p');
		newP.innerHTML = buttonClass;
		navigation.appendChild(newP);

}