const courseFree = true;
const outOfMark = 80;

function enroll (){

    console.log("Course Enrollment is in Progress");

    const promise = new Promise( function ( resolve, reject) {

           setTimeout( function (){

            if(courseFree) {

                resolve();

            }else{

                reject("Enrollment Failed, Please try again");

            }

        },2000)

    })

    return promise
}

function progress(){

    console.log("course process is in progress");

    const promise = new Promise( function ( resolve, reject) {

        setTimeout( function (){

            if(outOfMark > 70) {

                resolve();

            }else{

                reject("You can not get enough marks to pass the course");

            }
        }, 3000);

    })

     return promise;
}

function getCertificate(){

    console.log("Preparing Certificate");

    const promise = new Promise( function (resolve){

        setTimeout( function (){

            resolve("Certificate is ready to download");

        }, 1000);

    })
    
     return promise;
}

async function result(){

    try{

        await enroll();

        await progress();

        const certificate = await getCertificate();

        console.log(certificate);

    }catch(error) {

        console.log(error);

    }
    
}

result();