//Q-03. Eligible Voter

//You are given an integer A,denoting the age of a person, and your task is to determine whether he/she is eligible to vote or not.

const isEligible = (a) => {
    if((a>=18) && (a<=120))
    {
      return ("Eligible for Voting");
    }
    else{
      return ("Not Eligible for Voting");
    }
};

console.log(isEligible(13));