const { version2Scores } = require('../version2Scores.js');
const {
    patientA, 
    patientB, 
    patientC, 
    patient4, 
    patient5, 
    patient6, 
    patient7, 
    patient8, 
    patient9 
} = require('../data/patient-objects.js');




describe('version2Scores', () => {

    describe("rules & parameters", () => {

        test("should take a patient object and return a number or alert object containing a score property with a number as its value", () => {
            
            expect(typeof (version2Scores(patientC).score)).toBe("number");

        });

    });

    describe("specific functionality", () => {

        test("should return a score of 0 for patientA", () => {
            expect(version2Scores(patientA)).toBe(0);
        });

        test("should return a score of 4 for patientB", () => {
            expect(version2Scores(patientB)).toBe(4);
        });

        test("should return a score of 8 for patients C, 5 and 7", () => {
            expect(version2Scores(patientC).score).toEqual(8);
            expect(version2Scores(patient5)).toBe(8);
            expect(version2Scores(patient7)).toBe(8);
        });

        test("should return a score of 11 for patient4", () => {
                
                expect(version2Scores(patient4).score).toEqual(11);
        });

        test("should return a score of 13 for patients 6 & 9", () => {

            expect(version2Scores(patient6)).toBe(13);
            expect(version2Scores(patient9).score).toEqual(13);
        });

        test("should return a score of 5 for patient8", () => {

            expect(version2Scores(patient8).score).toEqual(5);
        });

        test("should return an alert object for patients c, 4, 8 & 9", () => {
            
            const alertObject1 = {
                score: 8,
                message: "ALERT - this patient's score has increased by 2 or more points."
            };

            const alertObject2 = {
                score: 11,
                message: "ALERT - this patient's score has increased by 2 or more points."
            };

            const alertObject3 = {
                score: 5,
                message: "ALERT - this patient's score has increased by 2 or more points."
            };

            const alertObject4 = {
                score: 13,
                message: "ALERT - this patient's score has increased by 2 or more points."
            };

            expect(version2Scores(patientC)).toEqual(alertObject1);            
            expect(version2Scores(patient4)).toEqual(alertObject2);
            expect(version2Scores(patient8)).toEqual(alertObject3);           
            expect(version2Scores(patient9)).toEqual(alertObject4);
    
        });

    });

});