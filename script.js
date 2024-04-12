function firstChar(text) {
	let a=text.trim();
	if(a==""){
		return a;
	}else{
		return a[0];
	}
}
const text = prompt("Enter text:");
alert(firstChar(text));