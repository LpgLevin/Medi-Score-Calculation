exports.getRespirationRateScore = function (respiration_rate) {

    console.log("subFunction, respiration_rate:", respiration_rate);

    if( respiration_rate <= 8 || respiration_rate >= 25 ) {
        return 3;
    }

    else if( respiration_rate >= 21 ) {
        return 2;
    }

    else if( respiration_rate <= 11 ) {
        return 1;
    }
    else {
        return 0;
    }

};