//check data type on the string
//and general understanding of this table as it refers to patients with and without oxygen

exports.getSpo2Score = (oxygenOrAir, spo2) => {

    let spo2Score = 0;

    if( oxygenOrAir === 'Oxygen' ) {
        
        if( spo2 >= 97 ) {
            spo2Score += 3;
        }
        if( spo2 >= 95 ) {
            spo2Score += 2;
        }
        if( spo2 <= 93 ) {
            spo2Score += 1;
        }
    }
    else {
        if( spo2 === 86 || spo2 === 87 ) {
            spo2Score += 1;
        }
        if( spo2 === 85 || spo2 === 84 ) {
            spo2Score += 2;
        }
        if( spo2 <= 83 ) {
            spo2Score += 3;
        }
    }

    return spo2Score;

};