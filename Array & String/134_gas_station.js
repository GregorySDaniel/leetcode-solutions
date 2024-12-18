var canCompleteCircuit = function(gas, cost) {
    let checkpoint = 0;
    let total_gas = 0;
    let current_gas = 0;

    for(let i=0; i<gas.length;i++){
        total_gas += gas[i]-cost[i];
        current_gas += gas[i]-cost[i];

        if(current_gas<0){
            current_gas = 0;
            checkpoint = i + 1;
        }
    }

    if(total_gas<0){
        return -1
    }
    
    return checkpoint;
};