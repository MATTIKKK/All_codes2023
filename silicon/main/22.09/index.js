let main_button = document.getElementById("main_button")
let main_input = document.getElementById("main_input")
let categories = document.getElementById("categories")

main_input.addEventListener("keypress", function(ev) {
    if(ev.key == "Enter"){
        arc();
    }
});

main_button.addEventListener("click", arc);


function arc() {
    let input = document.createElement("input");
    input.setAttribute("type", "text");

    let h2 = document.createElement("h2");
    h2.innerHTML = main_input.value;
    
 
    let button = document.createElement("button");
    button.innerHTML = "Submit";
    
    let ul = document.createElement("ul");
    
    let div = document.createElement("div");
    let x = document.createElement("button");
    x.innerHTML = "X";

    div.style.width = "300px";
    div.style.padding = "10px";
    div.style.marginTop = "20px";
    div.style.border = "2px solid purple";
    x.style.marginLeft = "280px";
    

    div.appendChild(x);
    div.appendChild(h2);
    div.appendChild(input);
    div.appendChild(button);
    div.appendChild(ul);
    
    
    categories.appendChild(div);

    x.addEventListener("click", function() {
        let div = x.parentNode;
        categories.removeChild(div);
    });

    

    button.addEventListener("click", function() {
        let checkbox = document.createElement("input");   
        checkbox.setAttribute("type", "checkbox");
        let li = document.createElement("li");
        let span = document.createElement("span");
        let deleteButton = document.createElement("button");

        
        deleteButton.innerHTML = "delete";
        span.innerHTML = input.value;
        
        li.appendChild(span);
        li.appendChild(checkbox);
        li.appendChild(deleteButton);

        ul.appendChild(li);

        deleteButton.addEventListener("click", function() {
            let li = deleteButton.parentNode;
            ul.removeChild(li);
        });

        input.value = "";
        

    });
    
    main_input.value = "";

};



