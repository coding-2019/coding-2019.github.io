var button = document.createElement('button');
button.innerText = "click";
button.onclick = () => {
    alert("clicked!");
}
document.body.appendChild(button);