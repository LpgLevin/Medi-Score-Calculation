import {getOxygenScore} from './Utils/getOxygenScore.js';
import {getConsciousnessScore} from './Utils/getConsciousnessScore.js';
import {getRespirationRateScore} from './Utils/getRespirationRateScore.js';
import {getSpo2Score} from './Utils/getSpo2Score.js';
import {getTemperatureScore} from './Utils/getTemperatureScore.js';


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

