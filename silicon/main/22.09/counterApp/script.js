const count = document.querySelector(".count");
const add = document.querySelector(".add");
const reset = document.querySelector(".reset");
const subtract = document.querySelector(".subtract");
const buttons = document.querySelector(".buttons");


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


add.addEventListener("click", () => {
    if(count.innerHTML < 10)
    count.innerHTML++;
    setColor();
})


reset.addEventListener("click", () => {
    count.innerHTML = 0;
    setColor();
})

function setColor() {
    if (count.innerHTML == 10) {
        count.style.color = "red";
    }else{
        count.style.color = "white";
    }
}