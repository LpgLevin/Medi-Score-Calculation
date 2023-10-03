const {getOxygenScore} = require('./sub-functions/getOxygenScore.js');
const {getConsciousnessScore} = require('./sub-functions/getConsciousnessScore.js');
const {getRespirationRateScore} = require('./sub-functions/getRespirationRateScore.js');
const {getSpo2Score} = require('./sub-functions/getSpo2Score.js');
const {getTemperatureScore} = require('./sub-functions/getTemperatureScore.js');
const {getCbgScore} = require('./sub-functions/getCbgScore.js');
const {compareScores} = require('./sub-functions/compareScores.js');


exports.getPatientScore = function(patientObject) {

    let totalScore = 0;

    totalScore += getOxygenScore(patientObject.air_or_oxygen);

    totalScore += getConsciousnessScore(patientObject.consciousness);

    totalScore += getRespirationRateScore(patientObject.respiration_range);

    totalScore += getSpo2Score(patientObject.air_or_oxygen, patientObject.spo2);

    totalScore +=  getTemperatureScore(patientObject.temperature);

    totalScore += getCbgScore(patientObject.fasted, patientObject.CBG);

    if( compareScores(patientObject.latest_score, totalScore) ) {

        const alertObject = {
            score: totalScore,
            message: "ALERT - this patient's score has increased by 2 or more points."
        };

        return alertObject;

    };
    
    return totalScore;

};

