import readlineSync from 'readline-sync';

const askName = () => {
	const userName = readlineSync.question('Как вас зовут');
	console.log('Здравствуйте' + userName + '!');
}

export default askName