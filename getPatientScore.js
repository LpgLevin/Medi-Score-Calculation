
function getPatientScore(patientObject) {

    //initialise a variable to store the final score
    let totalScore = 0;
    // go through each key in the patient object applying score conditions

    //-----------oxygen score------------------
    if( patientObject.air_or_oxygen === 'Oxygen' ) {
        totalScore += 2;
    }

    //-----------consciousness score------------------
    if( patientObject.consciousness === 'CVPU' ) {
        totalScore += 3;
    }

    //-----------respiration rate score------------------
    if( patientObject.respiration_rate <= 8 || patientObject.respiration_rate >= 25 ) {
        totalScore += 3;
    }

    if( patientObject.respiration_rate >= 21 ) {
        totalScore += 2;
    }

    if( patientObject.respiration_rate <= 11 ) {
        totalScore += 1;
    }

    //-----------spo2 score------------------
    if( patientObject.air_or_oxygen === 'Oxygen' ) {
        
        if( patientObject.spo2 >= 97 ) {
            totalScore += 3;
        }
        if( patientObject.spo2 >= 95 ) {
            totalScore += 2;
        }
        if( patientObject.spo2 <= 93 ) {
            totalScore += 1;
        }
    }
    else {
        if( patientObject.spo2 === 86 || patientObject.spo2 === 87 ) {
            totalScore += 1;
        }
        if( patientObject.spo2 === 85 || patientObject.spo2 === 84 ) {
            totalScore += 2;
        }
        if( patientObject.spo2 <= 83 ) {
            totalScore += 3;
        }
    }

    //-----------temperature score------------------
    if( patientObject.temperature >= 39.1 ) {
        totalScore += 3;
    }
    if( patientObject.temperature >= 38.1 ) {
        totalScore += 2;
    }
    if( patientObject.temperature >= 35.1 || patientObject.temperature <= 36.0 ) {
        totalScore += 1;
    }
    if( patientObject.temperature <= 35.0 ) {
        totalScore += 2;
    }

    // add each score to the final score
    //return the final score
    return totalScore;
};

