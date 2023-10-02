exports.compareScores = function (latest_score, totalScore) {

    if( totalScore - latest_score >= 2 ) {
        return true;
    }
    return false;

};