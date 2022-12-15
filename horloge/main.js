
const btnHorloge = document.querySelector(".btn_horloge");
const h2Horloge = document.querySelector(".h2_horloge");

class Horloge{
  sec;
  min;
  heur;
 
 
  constructor(){
    let dateAct = new Date();
    this.sec = dateAct.getSeconds();
    this.min = dateAct.getMinutes();
    this.heur = dateAct.getHours();
  }

  aficher(){
    
    h2Horloge.innerHTML = `${this.heur}h  ${this.min}m  ${this.sec}s`;
  }

}



 let horloge1 = new Horloge();

const setInerv = setInterval(()=>{

  horloge1.aficher();
  if(horloge1.sec === 59){
    horloge1.sec = 0;
    horloge1.min++;
  }
  if (horloge1.min === 60) {
    horloge1.min = 0;
    horloge1.heur++;
  }
  if (horloge1.heur === 24) {
    horloge1.heur = 0;
    
  }
 horloge1.sec++;

  
  
},1000)

console.log(btnHorloge);
btnHorloge.addEventListener("click", ()=>{
    
    foo(horloge1,21 , 28)
    
  })

  // function foo(objH,min,sec) {
  //   if(objH.sec >= sec){
  //     objH.sec -= sec;
  //   }else {
  //     objH.sec = objH.sec - sec + 60;
  //     objH.min--;
  //   }

  //   if(objH.min >= min){
  //     objH.min -= min
  //   }else {
  //     objH.min = objH.min - min + 60;
  //     objH.heur--;
  //   }

  // }


  function foo(objH,min,sec) {
   let secTotale = objH.heur*3600 + objH.min*60 + objH.sec;
   let secChange = min*60 + sec;
   
   secTotale +=secChange;

   objH.heur = (secTotale - (secTotale%3600))/3600;
   objH.min = ((secTotale%3600) - ((secTotale%3600)%60))/60;
   objH.sec = ((secTotale%3600)%60);

  }

 







