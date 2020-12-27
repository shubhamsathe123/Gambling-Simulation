const STAKE_AMOUNT = 100 ;
const BETTING_AMOUNT = 1 ;
let game_result;
const MONTHLY_DAYS=20;

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
      console.log(`Game Result of ${day} day is : ${game_result}`);
    } 
  }
}

module.exports=new utility;