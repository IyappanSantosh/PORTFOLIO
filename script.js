
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbzrZhMH3NSEILYI-v9ieGJ5GnUhdWi4ETs78FKWFOalo1ZEahtCdQeIi7DH96o9VMmN/exec'
      const form = document.forms['submit-to-google-sheet']
      const msg= document.getElementById('msg')
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            msg.innerHTML = "Message Sent Successfully!"
            setTimeout(function(){
              msg.innerHTML = ""
            }, 3000)
            form.reset()
            console.log('Success!', response)
          })
          .catch(error => console.error('Error!', error.message))
      });
