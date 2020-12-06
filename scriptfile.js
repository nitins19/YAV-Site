const submitButton = document.getElementById("submit");


document.addEventListener("DOMContentLoaded", () => {
    console.log("vscode");
    localStorage.getItem();
});

if (document.readyState !== "loading") {
    console.log("vscode");

    var keys = Object.keys(localStorage), 
        i = keys.length; 
    console.log("keys", keys);
    let stringifiedDetailsOfPeople, detailsOfPeople;

  
    while (i--) {
        
        if (keys[i].match(/userDetails/g)) {
            
            stringifiedDetailsOfPeople = localStorage.getItem(keys[i]);
            console.log("stringifiedDetailsOfPeople", );
            detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
            console.log("details", detailsOfPeople);


            addNewLineElement(detailsOfPeople);
        }
    }
}


submitButton.addEventListener("click", () => {
    const emailId = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    if (emailId.length > 0 && name.length > 0) {
        const object = {
            name: name,
            emailId: emailId 
        };
        localStorage.setItem("userDetails " + emailId, JSON.stringify(object));
        
        addNewLineElement(object);
    }
});

function addNewLineElement(object) {
    const ul = document.getElementById("listOfPeople");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(object.name + " " + object.emailId));
    ul.appendChild(li);
    console.log(object);
}
