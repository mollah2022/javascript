const paymentSuccess = true;
const merkDemand = 80;

function enroll (callback){ 

    console.log("Course Enrollment is in Progress");

    setTimeout( function (){

        if( paymentSuccess ) {

            callback();

        }else{

            console.log("Payment Failed, Please try again");

        }

    },2000)

}

function progress(callback){

    console.log("Course Progress is in Progress");

    setTimeout ( function (){

        if( merkDemand > 50 ) {

            callback();

        }else{

            console.log("you can not get enough marks to pass the course");

        }

    },3000);

}

function getCertificate(){

    console.log("Preparing Certificate");

    setTimeout( function(){

        console.log("Certificate is ready to download");

    },1000)

}

enroll( function (){

    progress(getCertificate);

})