const socket = io()

let name;
let textarea =document.querySelector('#textarea')
let messageArea= document.querySelector('.message_area')
do{
   name =  prompt('please enter your name:')
}while(!name)

textarea.addEventListener('keyup',(e)=>{
    if(e.key==='Enter'){
        sendMessage (e.target.value)
    }
})

function sendMessage(message){
    let msg={
        user:name,
        message:message
    }
    //Append
    appendMesssage(msg,'outgoing')
}
function appendMesssage(msg,type){
   let mainDiv = document.createElement('div')
   let className = type
   mainDiv.classList.add(className,'message')

   let marup = 
   `<h4>${msg.user}</h4>
   <p>${msg.message}</p>`

   mainDiv. innerHTML=marup

   messageArea.appendChild(mainDiv)
}