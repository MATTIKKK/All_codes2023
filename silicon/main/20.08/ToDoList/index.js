let button = document.getElementById("button")
let newInput = document.getElementById("new-input")
let listItems = document.getElementById("list")

button.addEventListener("click", function() {
    let li = document.createElement("li");

    let span = document.createElement("span");
    let button = document.createElement("button");
    let input = document.createElement("input");

    input.setAttribute("type", "checkbox");
    button.innerHTML = "delete";
    span.innerHTML = newInput.value;
    
    li.appendChild(span);
    li.appendChild(input);
    li.appendChild(button);

    listItems.appendChild(li);

    button.addEventListener("click", function() {
        let li = button.parentNode;
        listItems.removeChild(li);
    });

    newInput.value = "";


});
