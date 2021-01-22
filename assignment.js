//kilometerToMeter
function kilometerToMeter(distanceKilometer){
    var meter = distanceKilometer/1000;
    return meter;
}
var meter = kilometerToMeter(7);






//budgetCalculator
function budgetCalculator(watchPrice, phonePrice, laptopPrice){
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}
var watch = 50;
var watchPrice = watch * 8;

var phone = 100;
var phonePrice = phone * 6;

var laptop = 500;
var laptopPrice = laptop * 3;

var totalPrice = watchPrice + phonePrice + laptopPrice;



//hotelCost
function hotelCost(day){

    var cost = 0;
    if(day<=10){
        cost = day * 100;
    }
    else if(day<=20){
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondpart;
    }
    else{
        var firstPart = 10*100;
        var secondPart = 10*80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost
}
var costOfHotel = hotelCost(25);






//megaFriend
function megaFriend(str){
var longest = "";
for (var i=0; i < longest. length; i++);


{if(word.length > longest.length) longest = word;
}
    
return longest;
}
var friendsName = ["zisan", "riad", "ifterkhar"];








