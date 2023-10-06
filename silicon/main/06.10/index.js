const list = document.getElementById("list");


let items = [
    {
        "id": "ighfvanukdvcha",
        "title": "Todolist 1"

    },
    {
        "id": "dfffvfv",
        "title": "Todolist 2"

    },

    {
        "id": "sdgbdgvbd",
        "title": "Todolist 4"

    },
];


let item = {
    "ighfvanukdvcha": [
        {
            "id": 0,
            "title": "bread",
            "isDone": true,
        },
        {
            "id": 1,
            "title": "milk",
            "isDone": true,
        },

    ],
    "dfffvfv": [
        {
            "id": 0,
            "title": "math",
            "isDone": true,
        },
        {
            "id": 1,
            "title": "literature",
            "isDone": true,
        },

    ],
    "sdgbdgvbd": [
        {
            "id": 0,
            "title": "math",
            "isDone": true,
        },
        {
            "id": 1,
            "title": "literature",
            "isDone": true,
        },

    ],
};



function arc() {
    items.forEach(el => {

        let div = document.createElement("div");

        let x = document.createElement("button");
        x.innerHTML = "X";
        
        
        div.style.width = "300px";
        div.style.padding = "10px";
        div.style.marginTop = "20px";
        div.style.border = "2px solid purple";  
        x.style.float = "right";
        
        let h1 = document.createElement("h1");
        h1.innerText = el.title;

        div.appendChild(x);
        div.appendChild(h1);

        let ol = document.createElement("ol");
        const arr = item[el.id];

        arr.forEach(element => {
            

            let li = document.createElement("li");


            let span = document.createElement("span");
            span.innerText = element.title;
            
            let del = document.createElement("button");
            del.innerText = "X";

            del.addEventListener("click", function() {
                deleteItem(el.id, element.id);

            });

            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            
            if(element.isDone) {
                checkbox.setAttribute("checked", "true");
            }else {
                checkbox.setAttribute("checked", "false");
            }

            checkbox.addEventListener("click", () => {
                element.isDone = !element.isDone;
            });

            li.appendChild(span);
            li.appendChild(checkbox);
            li.appendChild(del);

            li.style.marginLeft = "30px";

            ol.appendChild(li);

        });

        div.appendChild(ol);

        list.appendChild(div);

        x.addEventListener("click", function() {
            let div = x.parentNode;
            list.removeChild(div);
        });
    });

    
};

function deleteItem(firstId, secondId) {

    item[firstId] = item[firstId].filter(i => i.id !== secondId);

    if(item[firstId].length === 0) {
        items = items.filter(i => i.id != firstId);
    }

    list.innerText ="";
    arc();
};

arc();