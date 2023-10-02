//may have to alter this to accomodate decimals, see instructions

exports.getTemperatureScore = (number) => {

    if( number >= 39.1 ) {
        return 3;
    } 
    else if( number >= 38.1 || number <= 35.0) {
        return 2;
    }
    else if( number >= 35.1 && number <= 36.0 ) {
        return 1;
    } else {
        return 0;
    };

};