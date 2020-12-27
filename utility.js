const STAKE_AMOUNT = 100 ;
const BETTING_AMOUNT = 1 ;
let game_result;
const MONTHLY_DAYS=20;
let monthly_stake = 0;
let monthly_investment = 0;

class utility
{
    gamblingGame(){
        for(var day=1;day<=MONTHLY_DAYS;day++){
        game_result = STAKE_AMOUNT;
        while((game_result > 50)&&(game_result<150)){
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
            break;
        default :
            console.log(`Result of day ${day} is Gambler Won $${game_result}`);
            break;
      }
    monthly_investment = monthly_investment + STAKE_AMOUNT;
    monthly_stake = monthly_stake + game_result;
  }
    if(monthly_stake > monthly_investment){
      var total = monthly_stake - monthly_investment ;
       console.log(`Gambler Won $${total} in this month`)
     }
    else{
       var total =  monthly_investment - monthly_stake ;
      console.log(`Gambler Loss $${ total } in this month`) 
     }
  } 
}




module.exports=new utility;