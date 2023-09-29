const patient1 = { 
                    air_or_oxygen: 'air', 
                    consciousness: 'alert',
                    respiration_range: 15,
                    spo2: 95,
                    temperature: 37.1
                };

const patient2 = { 
                    air_or_oxygen: 'oxygen', 
                    consciousness: 'alert',
                    respiration_range: 17,
                    spo2: 95,
                    temperature: 37.1
                };

const patient3 = { 
                    air_or_oxygen: 'oxygen', 
                    consciousness: 'CVPU',
                    respiration_range: 15,
                    spo2: 95,
                    temperature: 37.1
                };

                
                
//--------- For the scenario where the first two properties are numbers rather than strings: ------------------


const patientA = { 
                    air_or_oxygen: 0, 
                    consciousness: 0,
                    respiration_range: 15,
                    spo2: 95,
                    temperature: 37.1
                };

const patientB = { 
                    air_or_oxygen: 2, 
                    consciousness: 0,
                    respiration_range: 17,
                    spo2: 95,
                    temperature: 37.1
                };

const patientC = { 
                    air_or_oxygen: 2, 
                    consciousness: 3,
                    respiration_range: 15,
                    spo2: 95,
                    temperature: 37.1
                };