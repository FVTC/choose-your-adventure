
// changing the link text of the free/regret choice on freeze1.html

const freeRegretLink = document.getElementById("freeRegretLink");
const throatAgainBtn = document.getElementById("throatAgainBtn");

// const restartBtn = document.getElementById("startOverBtn");

let reset = false;
let throatCounter = Number(sessionStorage.getItem("throatCounter") || 0);
console.log(throatCounter);

if(freeRegretLink){
    freeRegretLink.addEventListener("mouseover", () => {
        setTimeout(() =>{freeRegretLink.textContent = "[REGRET]";}, 50);
    });

    freeRegretLink.addEventListener("mouseleave", () => {
        setTimeout(() =>{freeRegretLink.textContent = "[Free it.]"}, 50);
    });

}

if(throatAgainBtn){

    if(throatCounter === 4){
        throatAgainBtn.textContent = "NO."
        throatAgainBtn.style.color = "gray";
        throatAgainBtn.href = "#";
    }

    if(throatCounter > 4){
        throatAgainBtn.style.display = "none";
    }

    throatAgainBtn.addEventListener("click", function throatCheck(){
        if(throatCounter === 1){
            throatAgainBtn.href = "slay5A.html";
        }
        else if(throatCounter === 2){
            throatAgainBtn.href = "slay6A.html";
        }
        else if(throatCounter === 3){
            throatAgainBtn.href = "slay7A.html";
        }
        else if(throatCounter >= 4){
            throatAgainBtn.href = "#";
        }

        throatCounter++;
        sessionStorage.setItem("throatCounter", throatCounter);
        console.log(throatCounter);

        if(throatCounter > 4){
            throatAgainBtn.style.display = "none";
        }
    });


}


//come back to this code later -MF

// if(document.body.classList.contains("deadEnd")){
//     restartBtn.addEventListener("click", () =>{
//     reset = true;

//     if(reset){
//         console.log("reset is true!");
//         reset = false;
//     }
//     else{
//         return(0);
//     }
// });
// }
