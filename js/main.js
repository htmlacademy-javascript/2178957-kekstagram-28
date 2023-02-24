function polinFunction () {

	let word = 'ропорокорс';

	console.log (word.slice(0,1)); // Т
	console.log (word.slice(1,2)); // о
	console.log (word.slice(2,3)); // п
	console.log (word.slice(3,4)); // о
	console.log (word.slice(4,5)); // р


	console.log(word.slice(4,5)); // р
	console.log(word.slice(3,4)); // о
	console.log(word.slice(2,3)); // п
	console.log(word.slice(1,2)); // о
	console.log(word.slice(0,1)); // Т

	if(word[0] !== word[4]){
		return 'Это не палиндром'
	}
	else if (word[1] !== word[3]){
		return 'Это не палиндром'
	}
	else{
		return 'Это полиндром';
	}

}


let isPolindrom = polinFunction();
console.log(isPolindrom)

