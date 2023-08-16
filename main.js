'use strict'
// document.querySelector('.message').textContent;
// document.querySelector('.message').textContent ='correct number🎉 ';
// document.querySelector('.guess').value=12;


let number = Math.trunc(Math.random()*20)+1;
let score =10;
let highscore=0;


document.querySelector('.check').
addEventListener('click',function(){

const guess= Number(document.querySelector('.guess')
.value);

if(!guess)
{
    document.querySelector('.message').
    textContent ='   Write a number PLZ 🙂 ';
}
else if(guess===number)
{

    document.querySelector('.message').
    textContent =' 🎉🎈 Correct Number! ';
    if(score>highscore)
    {
        highscore=score;
        document.querySelector('.highscore').textContent
        =highscore;
    }

    document.querySelector('.number').
    textContent=number;

    document.querySelector('body').
    style.backgroundColor='#06430b'; 
}
else if(guess> number)
{
    if(score>1){
    score--;
    document.querySelector('.score').textContent
    =score;
    document.querySelector('.message').textContent
    = ' 🔥 TOO high !'  ;
}
else{
    document.querySelector('.message').textContent
    = '💔  you lost the game !'  ;
    document.querySelector('body').
    style.backgroundColor=' rgb(66, 9, 9)'; 
    
}
}

else if(guess < number)
{
    if(score>1){

  
    score--;
    document.querySelector('.score').textContent
    =score;
    document.querySelector('.message').textContent
    = ' 🌊 TOO low !' ; 
}
else{
    document.querySelector('.message').textContent
    = '💔  you lost the game !'  ;
    document.querySelector('body').
    style.backgroundColor=' rgb(66, 9, 9)'; 
    
}
}
});
document.querySelector('.again').
addEventListener('click',function()
{
score=10;
number = Math.trunc(Math.random()*20)+1;
document.querySelector('.message').textContent
    = ' Start guessing...' ; 

    document.querySelector('.score').textContent
    =score;
    document.querySelector('.number').textContent
    ='?';
    document.querySelector('.guess').value=' '; 

    document.querySelector('body').
    style.backgroundColor='#1e1717';
});


