let contacts = document.querySelector("#users");
let form = document.querySelector("#addUser");

form.addEventListener("submit" , submit);

console.log(Object.keys(localStorage));
// if (document.readyState !== "loading") {
    let keys = Object.keys(localStorage);
    let i =keys.length;
    let stringifiedDetailsOfPeople, detailsOfPeople;
    keys.forEach((key) => {
        if (key.match(/info/g)) {                    //////we ony want keys that start with info
            stringifiedDetailsOfPeople = localStorage.getItem(key);
            detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
            addNewLineElement(detailsOfPeople);
        }
    });
// }

function submit(e){
    e.preventDefault();

    let userInfo = {
        name:e.target.fname.value ,
        message: e.target.message.value
    }

    localStorage.setItem(`info${userInfo.name}` , JSON.stringify(userInfo));

    addNewLineElement(userInfo);
    
}

function addNewLineElement(obj){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${obj.name} :-  ${obj.message}`));
    contacts.appendChild(li);


}