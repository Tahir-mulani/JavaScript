function checkVoterEligibility(age){
    this.age = age;

    if(age >= 18){
        console.log("Eligible for vote");
    } else{
        console.log("Not Eligible for Vote");
    }
}
checkVoterEligibility(20);
checkVoterEligibility(17)