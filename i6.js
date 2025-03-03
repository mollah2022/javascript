const isExam = new Promise((res,rej) => {
    let number = Math.floor(Math.random()*10);

    if( number < 5 ){
        return res();
    }
    else{
        return rej();
    }
});
isExam
.then( () => {
    console.log("Bad Exam");
})
.catch( () => {
    console.log("Good Exam");
});