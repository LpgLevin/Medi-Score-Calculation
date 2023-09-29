//may have to alter this to accomodate decimals, see instructions

exports.getTemperatureScore = (number) => {

    let tempScore = 0;

    if( number >= 39.1 ) {
        tempScore = 3;
    } 
    if( number >= 38.1 ) {
        tempScore = 2;
    }
    if( number >= 35.1 || number <= 36.0 ) {
        tempScore = 1;
    }
    if( number <= 35.0 ) {
        tempScore = 2;
    }

    return tempScore;

};