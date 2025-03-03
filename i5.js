const isUniversity = new Promise(( res , rej ) => {
    if( false ){
        return res();
    }
    else{
        return rej();
    }
});

isUniversity
.then( () => {
    console.log("Resolve");
})
.catch( () => {
    console.log("Rejected");
});