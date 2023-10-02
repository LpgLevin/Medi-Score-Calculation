exports.getConsciousnessScore = function (consciousness) {

    let consciousnessScore = 0;

    if( consciousness === 'CVPU' ) {
        consciousnessScore += 3;
    }

    return consciousnessScore;

};