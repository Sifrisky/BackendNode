const config = require('../../config');
const socket = require('../../socket').socket;
const store = require('./store');


function addMessage(chat, user, message, file) {
//console.log(user);
//console.log(message);
return new Promise((resolve, reject) =>{
    if(!user || !message) {
        console.error('[messageController] No hay usuario o mensaje');
        reject('Los datos son incorrectos');
        return false;
    }
    let fileUrl = '';
        if(file) {
        fileUrl = config.host + ':' + config.port + config.publicRoute + '/files/' + file.filename;
    
    const fullMessage = {
        chat: chat,
        user: user,
        message: message,
        date: new Date(),
        file: fileUrl,
        };
  
    store.add(fullMessage);

    socket.io.emit('message', fullMessage);
    
    resolve(fullMessage);
    });
}
function getMessages(filterChat){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterChat));
    })
}
function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('Invalid data');
            return false;
        }
        const result = await store.updateText(id, message);

        resolve(result);
    })
}
function deleteMessage(id) {
    return new Promise((resolve, reject) => {
    if(!id) {
        reject('Id invalido');
        return false;
    }
    
    store.remove(id)
    .then(() => {
        resolve();
    })
        .catch(e =>{
            reject(e);
        })
    });
}
module.exports = { 
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
};