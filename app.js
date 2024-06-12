let userScore=0;
let compScore=0;
let result= document.getElementById("result");
compMessage=document.getElementById("comp");


const genCompChoice = () => {
    const options=["rock", "paper", "scissors"];
    const RandIdX=Math.floor(Math.random()*3);
    return options[RandIdX];
}

const playGame=(userChoice)=>{

 const compChoice= genCompChoice();

compMessage.style.display="block";
compMessage.innerHTML=`Computer chose ${compChoice}.`;

 if(userChoice === compChoice){
   
drawGame();
 }
 else{
    let userWin=true;
    if(userChoice==="rock"){
userWin = compChoice==="paper"? false: true;

    }else if(userChoice==="paper"){
        userWin = compChoice==="scissors" ? false: true;
    }
    else{
        userWin = compChoice==="rock" ? false: true;
    }
    scoreCalculator(userWin);
 }

 

};

const drawGame=()=>{
    userScore=userScore;
    compScore=compScore;
    result.innerHTML="Game was draw."
    
}

const scoreCalculator =(userWin,compChoice,userChoice)=>{
    if(userWin== true){
        userScore+=1;
        result.innerHTML="You won the game."
        document.getElementById('user-score').innerHTML=userScore;
        document.getElementById('comp-score').innerHTML=compScore;

    }
    else {
        compScore+=1;
        result.innerHTML="Computer won the game."
        document.getElementById('user-score').innerHTML=userScore;
        document.getElementById('comp-score').innerHTML=compScore;
        console.log("Computer score=",compScore)
        console.log("user score=",userScore)
    }
}

const choices= document.querySelectorAll('.choice');

choices.forEach((choice)=>{
choice.addEventListener("click",()=>{

    const userChoice=choice.getAttribute('Id')
    playGame(userChoice);
   
});

});