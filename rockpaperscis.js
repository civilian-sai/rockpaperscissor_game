let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let x=document.querySelector("#user-score");
let y=document.querySelector("#comp-score");

let comp=()=> {
    let arr=["rock", "paper", "scissors"];
    let ran=Math.floor(Math.random()*3);
    return arr[ran];

}

let finalRes=(res,icon,ran)=>{
    if(res){
        console.log("you have won");
        userscore++;
        x.innerText=userscore;
        msg.innerText=`You win bc you chose ${icon} and user chose ${ran}`;
        msg.style.backgroundColor= "green";

    }
    else{
        console.log("you have lost");
        msg.innerText=`You lost bc you chose ${icon} and user chose ${ran}`;
        msg.style.backgroundColor= "red";
        compscore++;
        y.innerText=compscore;
    }
}

let playGame=(icon)=>{
 let ran=comp();
 console.log("ur choice is: ",icon," and comp choice is: ",ran);
 if(ran===icon){
    console.log("it was draw because both have choosed", ran)
    msg.innerText=`it was draw because both choose ${icon}`;
    msg.style.backgroundColor= "yellow";
 }
 else{
    if(icon==="rock"){
        let res= ran==="paper"? false:true;
        finalRes(res,icon,ran);
    }
    else if(icon==="paper"){
        let res= ran==="scissors"? false:true;
        finalRes(res,icon,ran); 
    }
    else{
        let res= ran==="rock"? false:true;
        finalRes(res,icon,ran);
    }
 }
};
   


choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>
    {
        const icon=choice.getAttribute("id");
        console.log(" button is pressed ",icon);
        playGame(icon);
    })
});