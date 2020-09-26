import validatorCard from './validator';
import paymentSystem from './paymentSystem';

const validButton = document.querySelector('.valid-card');
const cardArray = document.querySelectorAll('.card');
const valueCont = document.querySelector('.num-card');
const errorText = document.querySelector('.error');

validButton.addEventListener('click', (event) => {
	event.preventDefault();

	cardArray.forEach((item) => {
			item.classList.remove('active');
	})

	const valid = validatorCard(valueCont.value);
	
	if (!valid) {
		errorText.classList.remove('invisible');
		valueCont.classList.remove('valid');

    valueCont.classList.add('invalid');
	} else {
		valueCont.classList.remove('invalid');
		valueCont.classList.add('valid');
		
		errorText.classList.add('invisible');

		let payment = paymentSystem(valueCont.value);
	
		if ( payment === null ) {
			errorText.classList.remove('invisible');
		} else {	
			cardArray.forEach((item) => {
				errorText.classList.add('invisible');
				if ( item.classList.contains(payment) ) {
					item.classList.add('active');
				}
			})
		}
	}
});