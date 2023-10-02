# Medi-Score-Calculation
This is an function which calculates a patient's medi score. 
The score is based on biological observation readings for different categories. 
Those readings translate into scores, which can be added up to their overall score.

# My Approach

From the specifications, I have interpreted that the function I have built will take a patient object as an argument.

The patient object I imagine looks like this:

const patient1 = { 
                    air_or_oxygen: 'air', 
                    consciousness: 'alert',
                    respiration_range: 15,
                    spo2: 95,
                    temperature: 37.1
                };

But given that the first two properties, air_or_oxygen and consciousness, also seem to be recorded as numbers in the spec, I have included alternative patient objects which reflect that:

const patientA = { 
                    air_or_oxygen: 0, 
                    consciousness: 0,
                    respiration_range: 15,
                    spo2: 95,
                    temperature: 37.1
                };

I have made it so that the sub-functions which translate the first two properties into scores will do so correctly wether they are passed a string or a number.



