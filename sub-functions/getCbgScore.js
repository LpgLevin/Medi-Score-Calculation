exports.getCbgScore = (fasting, cbg) => {

    console.log("sub-fuction, getCbgScore, fasting & cbg: ", fasting, cbg);

    if(fasting === true){
        if(cbg >= 6 || cbg <= 3.4){
            return 3;
        }
        else if(cbg >= 5.5 || cbg <= 3.9){
            return 2;
        }
        else{
            return 0;
        }
    }
    else {
        if(cbg >= 9 || cbg <= 4.5){
            return 3;
        } 
        else if(cbg >= 7.9 || cbg <= 5.8){
            return 2;
        }
        else{
            return 0;
        }
    }

};