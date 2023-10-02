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

I have interpreted that the observations for sp02 will never be below 93 if the patient is on oxygen and all readings below that will be from patients who are on air:

SpO2 (%)	

- ≤83	
- 84–85	
- 86–87	
- 88–92 (or ≥93 on air)	
- 93–94 on oxygen	
- 95–96 on oxygen	
- ≥97 on oxygen

Because all of the examples show the patient's temperature already rounded to one decimal place, I have interpreted that the function will not have tod do this, and that the data going in will already be rounded:

Temperature	Float - This should be rounded to a single decimal place.

#CBG

I have added 2 properties to my test data for the CBG tests: fasting - which will have a boolean value of true or false, and cbg - which will have a number value. The number value translates to a different score depending on wether the patient id fasting or fed. eg:

exports.patient9 = { 
    air_or_oxygen: 2, 
    consciousness: 3,
    respiration_range: 23,
    spo2: 88,
    temperature: 38.5,
    fasted: false,
    CBG: 9.0
};