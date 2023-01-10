let c = 0;  //number of steps
let hailStoneResult = document.getElementById("hailStoneResult");
let FreeShippingResult = document.getElementById("fsres");
let sequence = [];

function hailstone(number) {
    hailStoneResult.innerHTML += number.toString() + " ";
    if (number == 1 && c == 0) {
        return c;
    }
    else if (number == 1 && c != 0) {
        c++;
        return c;
    }
    else if (number % 2 == 0) {
        c++;
        sequence.push(number);
        console.log(number);
        hailstone(number / 2);
    }
    else if (number % 2 != 0) {
        c++;
        sequence.push(number);
        console.log(number);
        hailstone(3 * number + 1);
    }
}

hailstone(7);

let isFreeShip = false;
function FreeShipping(order) {
    let sum = 0;
    let count = 0;
    const { price, ...rest } = order;
    for (let properties in rest) {
        count = count + 1;
    }
    let array = Object.values(rest);
    for (let i = 0; i < count; i++) {
        sum += array[i];
    }
    if (sum > 50.00) isFreeShip = true;
    console.log(isFreeShip);
    FreeShippingResult.innerHTML = isFreeShip.toString();
    return isFreeShip;
}

FreeShipping({ "1": 2.3, "2": 35.4, "3": 42.2 })
