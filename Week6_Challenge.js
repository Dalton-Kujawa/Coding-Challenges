
function charCount(myChar, str) {
	let arrayOfString = str.split('');
	let numOfChar = 0;
	for(let i = 0; i < arrayOfString.length; i++){
		if(myChar == arrayOfString[i]){
			numOfChar++;
		}
	}
	return numOfChar;
	
}
