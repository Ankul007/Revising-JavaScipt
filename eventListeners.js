function onld(){
    window.alert("This is a Onload event");
}

function onclk(){
window.alert("You have clicked an event");
}

function onover(){

    var id = document.getElementById("chngcolor");
    id.style.color = 'red';

}
function onchng() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("para").innerHTML = "You selected: " + x;
}


function onout() {
    var id = document.getElementById("mo");
    id.style.backgroundColor = 'blue';
    id.innerHTML = 'Yo have mouse out ';
    // onover();
}

function onkdown(){
    window.alert("key down");
}