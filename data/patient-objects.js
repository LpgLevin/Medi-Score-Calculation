exports.patient1 = { 
                    air_or_oxygen: 'air', 
                    consciousness: 'alert',
                    respiration_range: 15,
                    spo2: 95,
                    temperature: 37.1
                };

exports.patient2 = { 
                    air_or_oxygen: 'oxygen', 
                    consciousness: 'alert',
                    respiration_range: 17,
                    spo2: 95,
                    temperature: 37.1
                };

exports.patient3 = { 
                    air_or_oxygen: 'oxygen', 
                    consciousness: 'CVPU',
                    respiration_range: 23,
                    spo2: 88,
                    temperature: 38.5
                };

                
                
//--------- For the scenario where the first two properties are numbers rather than strings: ------------------


exports.patientA = { 
                    air_or_oxygen: 0, 
                    consciousness: 0,
                    respiration_range: 15,
                    spo2: 95,
                    temperature: 37.1
                };

exports.patientB = { 
                    air_or_oxygen: 2, 
                    consciousness: 0,
                    respiration_range: 17,
                    spo2: 95,
                    temperature: 37.1
                };

exports.patientC = { 
                    air_or_oxygen: 2, 
                    consciousness: 3,
                    respiration_range: 23,
                    spo2: 88,
                    temperature: 38.5
                };