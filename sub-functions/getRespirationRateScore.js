exports.getRespirationRateScore = function (respiration_rate) {

    let respirationRateScore = 0;

    if( respiration_rate <= 8 || respiration_rate >= 25 ) {
        respirationRateScore += 3;
    }

    if( respiration_rate >= 21 ) {
        respirationRateScore += 2;
    }

    if( respiration_rate <= 11 ) {
        respirationRateScore += 1;
    }

    return respirationRateScore;

};