import consumer from "./consumer"

const messageChannel = consumer.subscriptions.create("MessageChannel", {
  connected() {
  },

  disconnected() {
    
  },

  received(data) {
    console.log(data)
    const messageDisplay = document.querySelector('#message-display')
    messageDisplay.insertAdjacentHTML('beforeend', this.template(data))
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