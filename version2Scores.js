const { getOxygenScore } = require(  './sub-functions/getOxygenScore.js' );
const { getConsciousnessScore } = require( './sub-functions/getConsciousnessScore.js' );
const { getRespirationRateScore } = require( './sub-functions/getRespirationRateScore.js' );
const { getSpo2Score } = require( './sub-functions/getSpo2Score.js' );
const { getTemperatureScore } = require( './sub-functions/getTemperatureScore.js' );
const { getCbgScore } = require( './sub-functions/getCbgScore.js' );
const { compareScores } = require( './sub-functions/compareScores.js' );

exports.version2Scores = function( patientObject ) {

    const scoringFunctions = {
        air_or_oxygen: getOxygenScore,
        consciousness: getConsciousnessScore,
        respiration_range: getRespirationRateScore,
        spo2: getSpo2Score,
        temperature: getTemperatureScore,
        CGB: getCbgScore
    };

    let totalScore = 0;

    for( const [ key, scoringFunction ] of Object.entries( scoringFunctions ) ) {
        if( scoringFunction.length === 1 ) {
        totalScore += scoringFunction( patientObject[ key ] );
        } else if( scoringFunction.length === 2 ) {
            if( key === 'spo2' ) {
                totalScore += scoringFunction( patientObject.air_or_oxygen, patientObject.spo2 );
            } else if( key === 'CGB' ) {
                totalScore += scoringFunction( patientObject.fasted, patientObject.CBG );
            };
        };
    };

    if( compareScores( patientObject.latest_score, totalScore ) ) {
        const alertObject = {
            score: totalScore,
            message: "ALERT - this patient's score has increased by 2 or more points."
        };              
        return alertObject; 
    };

    return totalScore;

};