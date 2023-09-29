const { getPatientScore } = require('../getPatientScore.js');
import test from "node:test";
import "./data/patientObjects.js"


describe('getPatientScore', () => {

    test("should take a patient object and return a number", () => {

        // Arrange
        // Act
        // Assert
        expect(typeof getPatientScore(patient1)).toBe("number");
    });

    test("should return a score of 0 for patient1 and patientA", () => {

        // Arrange
        // Act
        // Assert
        expect(getPatientScore(patient1)).toBe(0);
        expect(getPatientScore(patientA)).toBe(0);
    });

    test("should return a score of 4 for patient2 and patientB", () => {

        // Arrange
        // Act
        // Assert
        expect(getPatientScore(patient2)).toBe(4);
        expect(getPatientScore(patientB)).toBe(4);
    });

    test("should return a score of 8 for patient3 and patientC", () => {

        // Arrange
        // Act
        // Assert
        expect(getPatientScore(patient3)).toBe(8);
        expect(getPatientScore(patientC)).toBe(8);
    });

});