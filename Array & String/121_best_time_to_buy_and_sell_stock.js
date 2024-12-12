var maxProfit = function(prices) {
    let array_size = prices.length;
    let min_price = prices[0];
    let current_profit = 0;

    for(let i=1;i<array_size;i++){
        if(prices[i] < min_price){
            min_price = prices[i];
        } else if ((prices[i]-min_price) > current_profit){
            current_profit = prices[i] - min_price;
        }
    }    

    return current_profit;
};