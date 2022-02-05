function picnicBudget(persons){
    let first100PersonsCost =5000;
    let second100PersonsCost =4000;
    let third100personsCost =3000;
    if(persons <=100){
        let cost = persons * first100PersonsCost;
        return cost;
    }
    else if(persons >100 && persons <=200){
        let first100Persons  = 100 * first100PersonsCost;
        let restPersons = persons - 100;
        let second100Persons = restPersons * second100PersonsCost;
        let totalPersonsCost = first100Persons + second100Persons;
        return totalPersonsCost;
    }
    else{
        let first100Persons  = 100 * first100PersonsCost;
        let second100Persons = 100 * second100PersonsCost;
        let restPersons =persons - 200;
        let third100persons = restPersons * third100personsCost;
        let totalPersonsCost = first100Persons + second100Persons + third100persons ;
        return totalPersonsCost;
    }

}
let person = picnicBudget(220)
console.log(person);