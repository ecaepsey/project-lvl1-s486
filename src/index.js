import readlineSync from 'readline-sync';

const ask =  () => {
    const userName = readlineSync.question('Как вас зовут');

    console.log('Здравствуйте' + userName + '!');
}

export default ask