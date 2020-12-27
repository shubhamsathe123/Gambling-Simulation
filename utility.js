const STAKE_AMOUNT = 100 ;
const BETTING_AMOUNT = 1 ;
let game_result;
const MONTHLY_DAYS=20;
let monthly_stake = 0;
let monthly_investment = 0;
let luckiest_count = 0;
let unluckiest_count = 0;
var luckiest_days = [];
var unluckiest_days = [];
var user_decide = 1;

class utility
{
    gamblingGame(){
        for(var day=1;day<=MONTHLY_DAYS;day++)
        {
         game_result = STAKE_AMOUNT;
         while((game_result > 50)&&(game_result<150))
         {
         var game_check = Math.floor( Math.random() * 2 );
           if(game_check == BETTING_AMOUNT){
              game_result = game_result + BETTING_AMOUNT ;
            }
           else{
              game_result = game_result - BETTING_AMOUNT ;
           }
         }
        switch(game_result){
           case ( STAKE_AMOUNT / 2 ) :
             console.log(`Result of day ${day} is Gambler loss $${game_result}`);
             unluckiest_days[++unluckiest_count] = day;
             break;
           default :
             console.log(`Result of day ${day} is Gambler Won $${game_result}`);
             luckiest_days[++luckiest_count] = day;
             break;
       }
     monthly_investment = monthly_investment + STAKE_AMOUNT;
     monthly_stake = monthly_stake + game_result;
  }
     process.stdout.write("Luckiest Days : ")
       for(var count = 1 ; count < luckiest_days.length ; count++){
        process.stdout.write(", "+luckiest_days[count]);
         }
         process.stdout.write("\nUnluckiest Days : ")
       for(var count = 1 ; count < unluckiest_days.length ; count++){
         process.stdout.write(", "+unluckiest_days[count]);
      }
      if(monthly_stake > monthly_investment){
      var total = monthly_stake - monthly_investment ;
      process.stdout.write(`\n Gambler Won $${total} in this month`)
       }
     else{
       var total =  monthly_investment - monthly_stake ;
       process.stdout.write(`Gambler Loss $${ total } in this month`) 
     }
     var prompt = require('prompt-sync')();
     if(monthly_stake > monthly_investment){
        var user_decide = prompt('Press 1 to continue game : ')
        if(user_decide == 1){
             this.gamblingGame();
        }
     } 
  }
}




module.exports=new utility;