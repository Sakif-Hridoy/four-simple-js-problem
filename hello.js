//Kilometer to Meter
function kilometerToMeter(inputKilometer){

    var convertToMeter = inputKilometer * 1000; // 1000 meter = 1km
    var result = convertToMeter;
    return result;

}
var getKm = kilometerToMeter(55);
console.log(getKm);


/* ========================================================================================== */


//Budget Calculator
//here watch,phone,laptop values are presenting quantity
function budgetCalculator(watch,phone,laptop){
   if(watch>=0,phone>=0,laptop>=0){
    var watchPrice = 50; //given value
    var buyWatch = watch * watchPrice;
    //console.log(buyWatch);
    var phonePrice = 100; //given value
    var buyPhone = phone * phonePrice;
    //console.log(buyPhone);
    var laptopPrice = 500; //given value
    var buyLaptop = laptop * laptopPrice;
    //console.log(buyLaptop);
    var totalCost = (buyWatch + buyPhone + buyLaptop);
    //console.log(totalCost);
    return totalCost;
   }
    }
var totalBudget = budgetCalculator(10,20,30);
console.log(totalBudget);


/* ========================================================================================== */


//Hotelcost
function hotelCost(rentDays){
    var cost = 0;

    if(rentDays<=10){
    cost = rentDays * 100; //First Ten Day Cost
    }
    else if(rentDays<=20){
        var firstTenDayCost = 10 * 100;
        var remainingDay = rentDays-10;
        var secondTenDayCost = remainingDay *80;
        cost = firstTenDayCost + secondTenDayCost; //First Twenty Day Cost including discount
    }
    else{
        var firstTenDayCost = 10 * 100;
        var secondTenDayCost = 10 * 80;
        var remainingDay = rentDays-20;
        var moreThanTwenty = remainingDay * 50;
        cost = firstTenDayCost + secondTenDayCost + + moreThanTwenty; //Total Rental Costs when excludes twenty days with discount
    }
    return cost;

    }

    var totalCost = hotelCost(21);
    console.log(totalCost);



/* ========================================================================================== */


//Find Megafriend


var friendsName = ["Alif","Mitu","Fahim","Arafat","Riaz","Sakif Hridoy","Masum Khan"]; //Sample Array

function megaFriend(friendsName){
var wordLength = 0; //initial value
for(var i=0; i<friendsName.length; i++){
if(friendsName[i].length>wordLength){
    var wordLength = friendsName[i].length; //Comparing String Length
    var largest = friendsName[i];
}
}

return largest;
}
var myMegaFriend = megaFriend(friendsName);
console.log(myMegaFriend);



/* ========================================================================================== */





