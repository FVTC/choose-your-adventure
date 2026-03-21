let rolledNumber = 0;

function rollD20(){
    rolledNumber = Math.floor(Math.random() * 20) + 1;
    document.getElementById('D20-result').innerHTML = rolledNumber;
}

function rollD8(){
    rolledNumber = Math.floor(Math.random() * 8) + 1; 
    document.getElementById('D8-result').innerHTML = rolledNumber;
}