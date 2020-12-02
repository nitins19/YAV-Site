const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {

    const name = document.getElementById("name").value;
    const emailId = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    if (name.length > 0 && emailId.length > 0) {
        userdetails = {
            name: name,
            email: emailId,
            phone: phone
        };

        localStorage.setItem("userDetail " + emailId, JSON.stringify(userdetails));
        console.log(userdetails);
    }
});
