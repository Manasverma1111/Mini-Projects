let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async() =>{
    let country = document.querySelector("input").value;
    // console.log(country);
    let colleges = await getColleges(country);
    // console.log(colleges);
    show(colleges);
});

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText ="";
    for(collg of colleges){
        // console.log(collg.name);
        let li = document.createElement("li");
        li.innerText = collg.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try{
        let res = await axios.get(url + country);
        return res.data;
    } catch (err){
        console.log(err);
    }
}