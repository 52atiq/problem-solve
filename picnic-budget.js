function picnicBudget(persons){

    //  set variables 
    let first100PersonsCost =5000;
    let second100PersonsCost =4000;
    let restOfPersonsCost =3000;

     if(typeof (persons) == 'undefined'){         
         return 'please set a value'
     }
    if(typeof( persons) !== 'number'){
        return 'please enter valid number';
    }
    if(persons <=100){     // condition 1: person less than 100 or equal
        let cost = persons * first100PersonsCost;
        return cost;
    }
    else if(persons >100 && persons <=200){    // condition 2: person greater than 100 and less than 200 or equal
        let first100Persons  = 100 * first100PersonsCost;
        let restPersons = persons - 100;
        let second100Persons = restPersons * second100PersonsCost;
        let totalPersonsCost = first100Persons + second100Persons;
        return totalPersonsCost;
    }
    else{                                             // condition 3: person greater than 200
        let first100Persons  = 100 * first100PersonsCost;
        let second100Persons = 100 * second100PersonsCost;
        let restPersons =persons - 200;
        let restOfPersons = restPersons * restOfPersonsCost;
        let totalPersonsCost = first100Persons + second100Persons + restOfPersons ;
        return totalPersonsCost;
    }

}
let person = picnicBudget(9008)
console.log(person);