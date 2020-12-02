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
        addNewLineElement(userdetails);
    }
});

function addNewLineElement(userdetails) {
    const ul = document.getElementById("listOfPeople");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(userdetails.name + " " + userdetails.email));
    ul.appendChild(li);
    console.log(userdetails);
}
