// Код лучше привести к такому внешнему виду - так читабельней
//  Полезная статья по офрмлению кода 
// https://learn.javascript.ru/coding-style

function pow(num, power) {
	var result = num;

	if (power > 0)	{
		while (power > 1){
			result = result * num;
			power--;
		} 
		return result;

	} else if (power < 0) {
		power *= -1;
		
		while (power > 1) {
			result = result * num
			power--;
		} 
		return 1/result

	}	else {
		return 1
	}
}

var promptNumber = prompt('Input number: ');
// userumber - здесь опечатка, должно быть userNumber
// parsInt - здесь опечатка, должно быть parseInt
var userumber = parsInt(promptNumber);

if (isNaN(userNumber)) {
	console.log('Number invalid!');
} else {
	promptPower = prompt('Input power: ');
	var user_power = parseInt(promptPower);
	
	if (isNaN(user_power)) {
		console.log('Power is not a number!');
	} else {
		console.log(pow(userNumber, user_power));
	}   
}

// Очень хорошо!
// Код работает правильно: определяет степень числа и отлавливает все неккоректные вводы данныь
// Чуть-чуть внимания и будет вообще круто!

