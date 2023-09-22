const diceBtn = document.querySelector('#diceBtn');
const advice = document.querySelector('#advice');
const adviceId = document.querySelector('#AdviceId');

getAdvice()

diceBtn.addEventListener('click', async ()=>{
    getAdvice()
})


function getAdvice() {
    //genero id random
    const ide = Math.floor(Math.random()*100) + 1;
    //metodo then
    fetch(`https://api.adviceslip.com/advice/${ide}`)
    .then(res => res.json())
    .then(data => { 
        //console.log(data.slip.advice)
        const adviceMsg = data.slip.advice;
        advice.innerText = adviceMsg;
        adviceId.innerText = data.slip.id;
    })
    //.catch(err => getAdvice())
}
