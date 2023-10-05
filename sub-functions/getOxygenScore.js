exports.getOxygenScore = function ( oxygenOrAir ) {

    if( oxygenOrAir === 'oxygen' || oxygenOrAir === 2 ) {
        return 2;
    } else {
        return 0;
    };
    
};