let user=0;
let computer=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user-score");
const computerscore=document.querySelector("#computer-score");


const showinner=(userwin,userchoice,computer_choice)=>{
    if(userwin){
        console.log("you win");
        user++;
        userscore.innerText=user;
        msg.innerText=`You Win! Your ${userchoice} beats ${computer_choice}`
        msg.style.backgroundColor="green";
    }
    else{
        computer++;
        computerscore.innerText=computer;
        console.log("you lose");
        msg.innerText=`You Lose! ${computer_choice} beats your ${userchoice}`
        msg.style.backgroundColor="red";
    }
}


const drawgame=()=>{
    console.log("Draw");
    msg.innerText="Game Draw"
    msg.style.backgroundColor="#081b31";

}


const computerchoice=()=>{
    const options=["rock","paper","scissors"];
    const ran_idx=Math.floor(Math.random()*3);
    return options[ran_idx];
}


const playgame=(userchoice)=>{
    console.log("user_choice: ",userchoice);
    //computer choice
    const computer_choice=computerchoice();
    console.log("computer-choice : ",computer_choice);

    if(userchoice===computer_choice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            if(computer_choice==="paper"){
                userwin=false;
            }
            else{
                userwin=true;
            }
        }
        else if(userchoice==="paper"){
            if(computer_choice==="rock"){
                userwin=true;
            }
            else{
                userwin=false;
            }
        }
        else{
            if(computer_choice==="rock"){
                userwin=false;
            }
            else{
                userwin==true;
            }

        }
        showinner(userwin,userchoice,computer_choice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});