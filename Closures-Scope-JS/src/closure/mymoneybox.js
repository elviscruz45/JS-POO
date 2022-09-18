// function moneyBox(coins){
//     let saveCoins=0;
//     saveCoins +=coins;
//     console.log(`Money box ${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);


function moneyBox(){
    let saveCoins=0;
    function countCoint(coins){
        saveCoins+=coins;
        console.log(`MoneyBOx: ${saveCoins}`)
    }
    return countCoint;
}

const myMoneyBox=moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);


const moneyBoxAna=moneyBox();
moneyBoxAna(10)
moneyBoxAna(20)
moneyBoxAna(50)