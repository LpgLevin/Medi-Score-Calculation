exports.patient1 = { 
                    air_or_oxygen: 'air', 
                    consciousness: 'alert',
                    respiration_range: 15,
                    spo2: 95,
                    temperature: 37.1,
                    fasted: true,
                    CBG: 4,
                    latest_score: 1
                };
                                // score --> 0

exports.patient2 = { 
                    air_or_oxygen: 'oxygen', 
                    consciousness: 'alert',
                    respiration_range: 17,
                    spo2: 95,
                    temperature: 37.1,
                    fasted: true,
                    CBG: 4,
                    latest_score: 3
                };
                                // score --> 4


exports.patient3 = { 
                    air_or_oxygen: 'oxygen', 
                    consciousness: 'CVPU',
                    respiration_range: 23,
                    spo2: 88,
                    temperature: 38.5,
                    fasted: true,
                    CBG: 4,
                    latest_score: 6
                };
                                // score --> 8
                                //*ALERT
                
//--------- For the scenario where the first two properties are numbers rather than strings: ------------------


exports.patientA = { 
                    air_or_oxygen: 0, 
                    consciousness: 0,
                    respiration_range: 15,
                    spo2: 95,
                    temperature: 37.1,
                    fasted: false,
                    CBG: 6,
                    latest_score: 1              
                };
                                    // score --> 0

exports.patientB = { 
                    air_or_oxygen: 2, 
                    consciousness: 0,
                    respiration_range: 17,
                    spo2: 95,
                    temperature: 37.1,
                    fasted: false,
                    CBG: 6,
                    latest_score: 3
                };
                                    // score --> 4

exports.patientC = { 
                    air_or_oxygen: 2, 
                    consciousness: 3,
                    respiration_range: 23,
                    spo2: 88,
                    temperature: 38.5,
                    fasted: false,
                    CBG: 6,
                    latest_score: 6
                };
                                    // score --> 8
                                    //*ALERT

//--------- For testing CBG-----------------


exports.patient4 = { 
                    air_or_oxygen: 2, 
                    consciousness: 0,
                    respiration_range: 8,
                    spo2: 94,
                    temperature: 39.1,
                    fasted: true,
                    CBG: 3.3,
                    latest_score: 7
                };
                                    // score --> 11
                                    //*ALERT
exports.patient5 = { 
                    air_or_oxygen: 2, 
                    consciousness: 0,
                    respiration_range: 10,
                    spo2: 96,
                    temperature: 39,
                    fasted: true,
                    CBG: 3.6,
                    latest_score: 8
                };
                                    // score --> 8

exports.patient6 = { 
                    air_or_oxygen: 2, 
                    consciousness: 3,
                    respiration_range: 26,
                    spo2: 97,
                    temperature: 36.5,
                    fasted: true,
                    CBG: 5.7,
                    latest_score: 12
                };
                                    // score --> 13 

exports.patient7 = { 
                    air_or_oxygen: 0, 
                    consciousness: 0,
                    respiration_range: 11,
                    spo2: 83,
                    temperature: 35.5,
                    fasted: true,
                    CBG: 6.1,
                    latest_score: 10
                };
                                    // score --> 8

exports.patient8 = { 
                    air_or_oxygen: 0, 
                    consciousness: 0,
                    respiration_range: 13,
                    spo2: 84,
                    temperature: 35,
                    fasted: true,
                    CBG: 4.4,
                    latest_score: 0
                };
                                    // score --> 5
                                    //*ALERT
exports.patient9 = { 
                    air_or_oxygen: 0, 
                    consciousness: 3,
                    respiration_range: 6,
                    spo2: 86,
                    temperature: 34.5,
                    fasted: false,
                    CBG: 9.0,
                    latest_score: 5
                };
                                    // score --> 13
                                    //*ALERT