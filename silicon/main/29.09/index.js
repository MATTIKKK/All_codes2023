let items = [];
const list = document.getElementById("list");
const button = document.getElementById("button");
const input = document.getElementById("input");
let a = 0;

button.addEventListener("click", function() {
    let item = {
        "id": ++a,
        "text": input.value,
        "isDone": false
    };

    items.push(item);
    insertElement();
    input.value = "";
});

function insertElement() {
    list.innerHTML = "";
    items.forEach(element => {
        const li = document.createElement("li");
        
        let checkbox = document.createElement("input");   
        checkbox.setAttribute("type", "checkbox");
 
        let span = document.createElement("span");
        let deleteButton = document.createElement("button");

        
        deleteButton.innerHTML = "delete";
        span.innerHTML = element.text;
        
        li.appendChild(span);
        li.appendChild(checkbox);
        li.appendChild(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener("click", function() {
            deleteItem(element.id);
            insertElement();

        });
    });
};

function deleteItem(id) {
    items = items.filter((i) => {
        if(i.id == id){
            return false;
        }
        return true;
    })

};