const moment = require('moment'); //librería para requerir fechas

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[addMessage] no se ingresaron usuario y mensaje');
            reject ('se requiere usuario y mensaje');
            return false;
        }
        console.log(user);
        console.log(message);
        const fullMessage = {
            user: user,
            message: message,
            date: moment().format('DD/MM/YYY HH:mm')
        }
        console.log(fullMessage);
        resolve(fullMessage);
    });
};

module.exports = {
    addMessage,
};