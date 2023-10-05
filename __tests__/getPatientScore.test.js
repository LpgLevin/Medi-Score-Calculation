const { getPatientScore } = require( "../getPatientScore.js" );
const { 
    patient1, 
    patient2, 
    patient3, 
    patientA, 
    patientB, 
    patientC, 
    patient4, 
    patient5, 
    patient6, 
    patient7, 
    patient8, 
    patient9 
} = require( "../data/patient-objects.js" );




describe( "getPatientScore", () => {

    describe( "rules & parameters", () => {

        test( "should take a patient object and return a number or alert object containing a score property with a number as its value", () => {

            expect( typeof getPatientScore( patient1 ) ).toBe( "number" );
            expect( typeof ( getPatientScore( patientC ).score ) ).toBe( "number" );

        });

    });

    describe( "specific functionality", () => {

        test( "should return a score of 0 for patient1 and patientA", () => {

            expect( getPatientScore( patient1 ) ).toBe( 0 );
            expect( getPatientScore( patientA ) ).toBe( 0 );

        });

        test( "should return a score of 4 for patient2 and patientB", () => {

            expect( getPatientScore( patient2 ) ).toBe( 4 );
            expect( getPatientScore( patientB ) ).toBe( 4 );

        });

        test( "should return a score of 8 for patients 3, C, 5 and 7", () => {

            expect( getPatientScore( patient3 ).score ).toEqual( 8 );
            expect( getPatientScore( patientC ).score ).toEqual( 8 );
            expect( getPatientScore( patient5 ) ).toBe( 8 );
            expect( getPatientScore( patient7 ) ).toBe( 8 );

        });

        test( "should return a score of 11 for patient4", () => {
                
                expect( getPatientScore( patient4 ).score ).toEqual( 11 );

        });

        test( "should return a score of 13 for patients 6 & 9", () => {

            expect( getPatientScore( patient6 ) ).toBe( 13 );
            expect( getPatientScore( patient9 ).score ).toEqual( 13 );

        });

        test( "should return a score of 5 for patient8", () => {

            expect( getPatientScore( patient8 ).score ).toEqual( 5 );

        });

        test( "should return an alert object for patients 3, c, 4, 8 & 9", () => {
            
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

            expect( getPatientScore( patient3 ) ).toEqual( alertObject1 );
            expect( getPatientScore( patientC ) ).toEqual( alertObject1 );            
            expect( getPatientScore( patient4 ) ).toEqual( alertObject2 );
            expect( getPatientScore( patient8 ) ).toEqual( alertObject3 );           
            expect( getPatientScore( patient9 ) ).toEqual( alertObject4 );
    
        });

    });

});