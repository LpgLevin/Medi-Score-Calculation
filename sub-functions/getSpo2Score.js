//check data type on the string
//and general understanding of this table as it refers to patients with and without oxygen

exports.getSpo2Score = (oxygenOrAir, spo2) => {

    
    if( oxygenOrAir === 'oxygen' || oxygenOrAir === 2 ) {
        
        if( spo2 >= 97 ) {
            return 3;
        }
        else if( spo2 >= 95 ) {
            return 2;
        }
        else if( spo2 >= 93 ) {
            return 1;
        }
        return 0;
    }
    else {
        if( spo2 >= 88 && spo2 <= 92 ) {
            return 0;
        }
        else
        if( spo2 === 86 || spo2 === 87 ) {
            return 1;
        }
        else if( spo2 === 85 || spo2 === 84 ) {
            return 2;
        }
        else if( spo2 <= 83 ) {
            return 3;
        } else {
            return 0;}
    }

};