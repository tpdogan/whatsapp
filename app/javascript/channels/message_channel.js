import consumer from "./consumer"

const messageChannel = consumer.subscriptions.create("MessageChannel", {
  connected() {
  },

  disconnected() {
    
  },

  received(data) {
    const messageDisplay = document.querySelector('#message-display')
    messageDisplay.insertAdjacentHTML('beforeend', this.template(data))
    
    const display = document.getElementById('messages-all')
    display.scrollTop = display.scrollHeight
  },

  template(data) {
    return `<article class="message">
              <div class="message-header">
                <p>${data.user_id}</p>
              </div>
              <div class="message-body">
                <p>${data.body}</p>
              </div>
            </article>`
  }
});
/*
document.addEventListener("turbolinks:load", () => {
  let form = document.querySelector('#message-form')
  if(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      let messageInput = document.querySelector('#message-input').value
      if(messageInput == '') return;
      const message = {
        body: messageInput
      }
      messageChannel.send({message: message})
    })
  }
})
*/
document.addEventListener("turbolinks:load", () => {
  const sender = document.getElementById('message-send')
  const input = document.getElementById('message-input')
  sender.addEventListener('click', () => {
    setTimeout(() => { input.value = '' }, 100)
  })
})