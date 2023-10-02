const { getPatientScore } = require('../getPatientScore.js');
const { patient1, patient2, patient3, patientA, patientB, patientC, patient4, patient5, patient6, patient7, patient8, patient9 } = require('../data/patient-objects.js');



describe('getPatientScore', () => {

    describe("rules & parameters", () => {

        test("should take a patient object and return a number", () => {
            expect(typeof getPatientScore(patient1)).toBe("number");
        });

    });

    describe("specific functionality", () => {

        test("should return a score of 0 for patient1 and patientA", () => {

            expect(getPatientScore(patient1)).toBe(0);
            expect(getPatientScore(patientA)).toBe(0);
        });

        test("should return a score of 4 for patient2 and patientB", () => {

            expect(getPatientScore(patient2)).toBe(4);
            expect(getPatientScore(patientB)).toBe(4);
        });

        test("should return a score of 8 for patients 3, C, 5 and 7", () => {

            expect(getPatientScore(patient3)).toBe(8);
            expect(getPatientScore(patientC)).toBe(8);
            expect(getPatientScore(patient5)).toBe(8);
            expect(getPatientScore(patient7)).toBe(8);
        });

        test("should return a score of 11 for patient4", () => {
                
                expect(getPatientScore(patient4)).toBe(11);
        });

        test("should return a score of 13 for patients 6 & 9", () => {

            expect(getPatientScore(patient6)).toBe(13);
            expect(getPatientScore(patient9)).toBe(13);
        });

        test("should return a score of 5 for patient8", () => {

            expect(getPatientScore(patient8)).toBe(5);
        });

    });

});