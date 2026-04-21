
document.addEventListener("DOMContentLoaded", () => {
    
    // form submission logic (AJAX)
    const form = document.getElementById("contact");
    const statusMsg = document.getElementById("my-form-status");
    const submitBtn = document.getElementById("submit-button");

    
    async function handleSubmit(event) {
        event.preventDefault();

           // set time
      document.getElementById("time").value = new Date().toLocaleString();
    

        const data = new FormData(event.target);
        
        // updates
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending...";
        statusMsg.innerText = "";

        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                statusMsg.style.color="rgb(33, 247, 18) ";
                statusMsg.innerText = "Success! Your message has been sent.";
                statusMsg.classList.add("show");

                statusMsg.classList.add("show");

                setTimeout(() => {
                    statusMsg.classList.remove("show");
                }, 3000);

                form.reset();
                submitBtn.innerText = "Send Message";
                submitBtn.disabled = false;
            } else {
                response.json().then(data => {
                   statusMsg.style.color = "red";
                    if (Object.hasOwn(data, 'errors')) {
                        statusMsg.innerText = data["errors"].map(error => error["message"]).join(", ");
                        
                        statusMsg.classList.add("show");

                        setTimeout(() => {
                            statusMsg.classList.remove("show");
                        }, 3000);

                    } else {
                        statusMsg.innerText = "Oops! Problem submitting form.";

                        statusMsg.classList.add("show");

                          setTimeout(() => {
                              statusMsg.classList.remove("show");
                          }, 3000);
                    }
                })
                submitBtn.innerText = "Send Message";
                submitBtn.disabled = false;
            }
        }).catch(error => {
            statusMsg.style.color = "red";
            statusMsg.innerText = "Network error. Please try again.";

            statusMsg.classList.add("show");

            setTimeout(() => {
                statusMsg.classList.remove("show");
            }, 3000);

            submitBtn.innerText = "Send Message";
            submitBtn.disabled = false;
        });
    }

    form.addEventListener("submit", handleSubmit);

})