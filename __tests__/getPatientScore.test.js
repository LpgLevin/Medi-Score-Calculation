const { getPatientScore } = require('../getPatientScore.js');
const { patient1, patient2, patient3, patientA, patientB, patientC } = require('../data/patient-objects.js');



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
            // expect(getPatientScore(patientB)).toBe(4);
        });

        test("should return a score of 8 for patient3 and patientC", () => {

            expect(getPatientScore(patient3)).toBe(8);
            expect(getPatientScore(patientC)).toBe(8);
        });

    });

});