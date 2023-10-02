const {getOxygenScore} = require('./sub-functions/getOxygenScore.js');
const {getConsciousnessScore} = require('./sub-functions/getConsciousnessScore.js');
const {getRespirationRateScore} = require('./sub-functions/getRespirationRateScore.js');
const {getSpo2Score} = require('./sub-functions/getSpo2Score.js');
const {getTemperatureScore} = require('./sub-functions/getTemperatureScore.js');


exports.getPatientScore = function(patientObject) {

    console.log("in the function, patientObject", patientObject);
    //initialise a variable to store the final score
    let totalScore = 0;
    // go through each key in the patient object applying score conditions

    //-----------oxygen score------------------

    const oxygenScore = getOxygenScore(patientObject.air_or_oxygen);

    totalScore += oxygenScore;

    console.log("in the function, oxygenScore:", oxygenScore);

    //-----------consciousness score------------------
    const consciousnessScore = getConsciousnessScore(patientObject.consciousness);

    totalScore += consciousnessScore;

    console.log("in the function, consciousnessScore:", consciousnessScore);

    //-----------respiration rate score------------------

    const respirationRateScore = getRespirationRateScore(patientObject.respiration_range);

    totalScore += respirationRateScore;

    console.log("in the function, respirationRateScore:", respirationRateScore);

    //-----------spo2 score------------------

    const spo2Score = getSpo2Score(patientObject.air_or_oxygen, patientObject.spo2);

    totalScore += spo2Score;

    console.log("in the function, spo2Score:", spo2Score);

    //-----------temperature score------------------

    const temperatureScore = getTemperatureScore(patientObject.temperature);

    totalScore += temperatureScore;

    console.log("in the function, temperatureScore:", temperatureScore);

    // add each score to the final score
    //return the final score
    return totalScore;
};

