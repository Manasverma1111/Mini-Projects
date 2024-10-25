let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document. createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    // delBtn.classList.add("delete");
    delBtn.classList.add("del")
    delBtn.classList.add("btn")
    delBtn.classList.add("btn-warning")
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value= "";
});

ul.addEventListener("click", function(evt) {
    // console.log("button clicked");
    // console.log(evt.target);
    if(evt.target.nodeName == "BUTTON"){
        let delLi = evt.target.parentElement;
        delLi.remove();
        console.log("item deleted");
    }
    
});

// let delBtns = document.querySelectorAll(".del");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function() {
//         // console.log("Element deleted");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }