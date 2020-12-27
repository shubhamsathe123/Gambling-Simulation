const STAKE_AMOUNT = 100 ;
const BETTING_AMOUNT = 1 ;
let game_result;

class utility
{
    gamblingGame(){
        game_result = STAKE_AMOUNT;
        var game_check = Math.floor( Math.random() * 2 );
        if(game_check == BETTING_AMOUNT){
            game_result = game_result + BETTING_AMOUNT ;
        }
        else{
            game_result = game_result - BETTING_AMOUNT ;
        }
        console.log(`Game Result ${game_result}`);
    }
}

module.exports=new utility;