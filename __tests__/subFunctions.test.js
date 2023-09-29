const { describe } = require('yargs');
const { getConsciousnessScore } = require('../sub-functions/getConsciousnessScore.js');
const { getOxygenScore } = require('../sub-functions/getOxygenScore.js');
const { getRespirationRateScore } = require('../sub-functions/getRespirationRateScore.js');
const { getSpo2Score } = require('../sub-functions/getSpo2Score.js');
const { getTemperatureScore } = require('../sub-functions/getTemperatureScore.js');
const { default: test } = require('node:test');
const { zeroToThree } = require('../utils/zeroToThree.js');



decscribe("getConsciousnessScore", () => { 

    describe("rules & parameters", () => {

        test("should return a number", () => {
        
            expect(typeof getConsciousnessScore("alert")).toBe("number");
    
        });
    
        test("should return a number between 0 and 3 inclusive", () => {
    
            const score1 = getConsciousnessScore("alert");
            const score2 = getConsciousnessScore("CVPU");
            const score3 = getConsciousnessScore(2);
        
            expect(zeroToThree(score1)).toBe(true);
            expect(zeroToThree(score2)).toBe(true);
            expect(zeroToThree(score3)).toBe(true);
    
        });
    
    
        test("should take either a number or a string", () => {
            
            expect(typeof getConsciousnessScore("CVPU")).toBe("number");
            expect(typeof getConsciousnessScore(3)).toBe("number");
    
        });

    });

    describe("specific functionality", () => { 

        test("should return a score of 0 for 'alert' and 3 for CVPU", () => {
                
                expect(getConsciousnessScore("alert")).toBe(0);
                expect(getConsciousnessScore("CVPU")).toBe(3);
        
        });

        test("should return a score which matches the number passed in when a number is passed in", () => {
                
                    expect(getConsciousnessScore(0)).toBe(0);
                    expect(getConsciousnessScore(3)).toBe(3);
            
        });

    });
    
});

describe("getOxygenScore", () => { 

    describe("rules & parameters", () => {

        test("should return a number", () => {
        
            expect(typeof getOxygenScore("air")).toBe("number");
    
        });
    
        test("should return a number between 0 and 3 inclusive", () => {
    
            const score1 = getOxygenScore("air");
            const score2 = getOxygenScore("oxygen");
            const score3 = getOxygenScore(2);
    
            expect(zeroToThree(score1)).toBe(true);
            expect(zeroToThree(score2)).toBe(true);
            expect(zeroToThree(score3)).toBe(true);
    
        });
    
        test("should take either a number or a string", () => {
            
            expect(typeof getOxygenScore("air")).toBe("number");
            expect(typeof getOxygenScore(3)).toBe("number");
    
        });

    });

    describe("specific functionality", () => { 

        test("should return a score of 0 for 'air' and 2 for 'oxygen'", () => {
            
            expect(getOxygenScore("air")).toBe(0);
            expect(getOxygenScore("oxygen")).toBe(2);
    
        });

        test("should return a score which matches the number passed in when a number is passed in", () => {
                
                expect(getOxygenScore(0)).toBe(0);
                expect(getOxygenScore(2)).toBe(2);
        
        });
        
    });

});



describe("getRespirationRateScore", () => { 

    describe("rules & parameters", () => {

        test("should return a number", () => {
        
            expect(typeof getRespirationRateScore(15)).toBe("number");
    
        });
    
        test("should return a number between 0 and 3 inclusive", () => {
    
            const score1 = getRespirationRateScore(15);
            const score2 = getRespirationRateScore(17);
    
            expect(zeroToThree(score1)).toBe(true);
            expect(zeroToThree(score2)).toBe(true);
            
        });

    });

    describe("specific functionality", () => { 

        test("should return 3 when passed a number <= 8 or >= 25", () => {
            
            expect(getRespirationRateScore(8)).toBe(3);
            expect(getRespirationRateScore(18)).toBe(3);
            expect(getRespirationRateScore(25)).toBe(3);
    
        });

        test("should return 2 when passed a number between 21 and 24 inclusive", () => {
                
                expect(getRespirationRateScore(21)).toBe(2);
                expect(getRespirationRateScore(22)).toBe(2);
                expect(getRespirationRateScore(24)).toBe(2);
        
    
        });

        test("should return 1 when passed a number between 9 and 11 inclusive", () => {

                    expect(getRespirationRateScore(9)).toBe(1);
                    expect(getRespirationRateScore(10)).toBe(1);
                    expect(getRespirationRateScore(11)).toBe(1);
        });

        test("should return 0 when passed a number between 12 and 20 inclusive", () => {
                    
                    expect(getRespirationRateScore(12)).toBe(0);
                    expect(getRespirationRateScore(13)).toBe(0);
                    expect(getRespirationRateScore(20)).toBe(0);
            
        });
        
    });

}); 


describe("getSpo2Score", () => { 

    describe("rules & parameters", () => {

        test("should return a number", () => {
        
            expect(typeof getSpo2Score("air", 95)).toBe("number");
    
        });

        test("should return a number between 0 and 3 inclusive", () => {
    
            const score1 = getSpo2Score("air", 95);
            const score2 = getSpo2Score("oxygen", 95);
            const score3 = getSpo2Score("oxygen", 80);
    
            expect(zeroToThree(score1)).toBe(true);
            expect(zeroToThree(score2)).toBe(true);
            expect(zeroToThree(score3)).toBe(true);
    
        });

        test("should take either a number or a string for the first parameter", () => {

            const score1 = getSpo2Score("air", 95);
            const scoreA = getSpo2Score(0, 95);
            const score2 = getSpo2Score("oxygen", 95);
            const scoreB = getSpo2Score(2, 95);
            
            expect(score1).toEqual(scoreA);
            expect(score2).toEqual(scoreB);
    
        });

    });

    describe("specific functionality", () => { 
        
        test("")
    });

}); 



describe("getTemperatureScore", () => { 

    describe("rules", () => {

        test("should return a number", () => {
        
            expect(typeof getTemperatureScore(37.1)).toBe("number");
    
        });

    });

    describe("specific functionality", () => { 
        
    });

});
