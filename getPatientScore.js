const getOxygenScore = require('./sub-functions/getOxygenScore.js');
const getConsciousnessScore = require('./sub-functions/getConsciousnessScore.js');
const getRespirationRateScore = require('./sub-functions/getRespirationRateScore.js');
const getSpo2Score = require('./sub-functions/getSpo2Score.js');
const getTemperatureScore = require('./sub-functions/getTemperatureScore.js');



exports.getPatientScore = function(patientObject) {

    //initialise a variable to store the final score
    let totalScore = 0;
    // go through each key in the patient object applying score conditions

    //-----------oxygen score------------------
    totalScore += getOxygenScore(patientObject.air_or_oxygen);

    //-----------consciousness score------------------
    totalScore += getConsciousnessScore(patientObject.consciousness);

    //-----------respiration rate score------------------
    totalScore += getRespirationRateScore(patientObject.respiration_range);

    //-----------spo2 score------------------
    totalScore += getSpo2Score(patientObject.air_or_oxygen, patientObject.spo2);

    //-----------temperature score------------------
    totalScore += getTemperatureScore(patientObject.temperature);

    // add each score to the final score
    //return the final score
    return totalScore;
};

