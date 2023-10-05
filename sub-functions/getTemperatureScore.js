//may have to alter this to accomodate decimals, see instructions

exports.getTemperatureScore = ( temperature ) => {

    if( temperature <= 35 ) {
        return 3;
    } else if( temperature >= 39.1 ) {
        return 2;
    } else if( temperature >= 38.1 && temperature <= 39 || temperature >= 35.1 && temperature <= 36.0 ) {
        return 1;
    } else {
        return 0;
    };

};