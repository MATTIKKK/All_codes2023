const count = document.querySelector(".count");
const add = document.querySelector(".add");
const reset = document.querySelector(".reset");
const subtract = document.querySelector(".subtract");


add.addEventListener("click", function() {
    count.innerText++;
    if(count.innerText == 10){
        count.style.color = "red";
        add.disabled = true;
        
    }
    reset.disabled = false;
});

reset.addEventListener("click", function() {
    count.innerText = 0;
    add.disabled = false;
    count.style.color = "white";
    reset.disabled = true;
});


// buttons.addEventListener("click", (e) => {
//     if(e.target.classList.contains("add")) {
//         count.innerHTML++;
//         setColor();
//     }

//     if(e.target.classList.contains("subtract")) {
//         count.innerHTML--;
//         setColor();
//     }

//     if(e.target.classList.contains("reset")) {
//         count.innerHTML = 0;
//         setColor();
//     }
// })


