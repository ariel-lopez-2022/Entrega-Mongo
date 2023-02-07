const socket = io()

const listChatsElement = document.getElementById('list-chats')

socket.on('init-chats', ({ chats }) => {
    chats.forEach((chat) => {
		listChatsElement.innerHTML += `
		<liid="${chat._id} >${chat.userEmail} - ${chat.message}</li>
		`
	})
})

socket.on('add-message', (newMessage) => {
	listChatsElement.innerHTML += `<li id="${newMessage._id}">${newMessage.userEmail} - ${newMessage.message}</li>`
})
socket.on('delete-message'), (messaje)=>{
    console.log (id)
    const message = document.getElementById(`${messaje._id}`)
    console.log (message)
    message.remove(); 
 
 }