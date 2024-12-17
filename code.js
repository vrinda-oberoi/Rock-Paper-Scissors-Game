let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".option");
const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const gencompchoice=() =>{
    let choices=["rock","paper","scissors"];
    const select=Math.floor(Math.random()*3);
    return choices[select];
};

const gameDraw=() =>{
    console.log("Game was Draw !! Try Again");
    msg.innerText="Game was Draw !! Try Again";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userwin,userchoice,compchoice) =>{
    if(userwin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        console.log("You Win!!");
        msg.style.backgroundColor="green";
    }else{
        computerscore++;
        compScorePara.innerText = computerscore;
        console.log("You Lose!");
        msg.innerText = `You Lose! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userchoice) =>{
    console.log("user choice is:",userchoice);
    const compchoice=gencompchoice();
    console.log("computer choice is:",compchoice);

    if(userchoice==compchoice){
        gameDraw();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice=="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice=="scissors"?false:true;
        }else{
            userwin=compchoice=="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((option) => {
    option.addEventListener("click",() =>{
        const userchoice = option.getAttribute("id");
        playGame(userchoice);
    });
});

