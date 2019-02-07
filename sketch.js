var button = document.createElement('button');
button.innerText = "click for a quiz!";
button.onclick = () => {
    var score = 0;
    var q1 = prompt("what is 2+2*2")
    if(q1 == 6) score++;
    var q2 = prompt("what is 3!");
    if(q2 == 6) score++;
    var q3 = prompt("how many meters are in a hectometer?");
    if(q3 == 100) score++;
    alert(`you got ${score} out of 3 correct!`);
}
document.body.appendChild(button);
