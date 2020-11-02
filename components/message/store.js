//const list = [];

const model = require('./model');

 function addMessage(message){
    //list.push(message);
    const myMessage = new model(message);
    //instanciar una nueva clase del modelo.
    myMessage.save(); 
}
async function getMessage(filterUSer){
    let filter = { };
    if(filterUSer !== null) {
        filter={ user: filterUser};
    }
   const messages= await Model.find(filter);
   return messages;
}
async function updateText(id, message) {  
    const foundMessage = await Model.findOne({ //ir a base de datos de mongodb y nos va a traer id
        _id: id //guarda un mensaje
    });
    foundMessage.message= message;    //de esta forma cambiamos el mje y esperamos que se salve.
   
    const newMessage = await foundMessage.save(); //para devolverlo hacemos await
        return newMessage;
}
function removeMessage(id){
    Model.deleteOne({
        _id: id
    });
}

module.exports = {
        add: addMessage,
        list: getMessages,
        updateText: updateText,
        remove: removeMessage,
        
        //get
        //update
        //delete
}
