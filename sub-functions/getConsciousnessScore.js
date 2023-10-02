exports.getConsciousnessScore = function (consciousness) {

    console.log("subFunction, consciousness:", consciousness);

    if( consciousness === 'CVPU' || consciousness === 3 ) {
        return 3;
    } else {
        return 0;
    };

};