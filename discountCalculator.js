function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    debugger
    for (let i = 0; i < quantity; i++) {
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}


console.log(calculateDiscountedPrice(1, 200))
console.log(calculateDiscountedPrice(10, 200))
console.log(calculateDiscountedPrice(150, 200))

module.exports = calculateDiscountedPrice;