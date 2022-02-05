
function picnicBudget(persons){
    
    if(persons <= 100){
        let cost = 5000 * persons;
        return cost;
    }
    else if(persons >100 && persons <=200){
        if(persons ==100){
            let cost = 5000 * persons;
            return cost;
        }
        else (persons>100) 
        {
            let cost = 4000 * persons;
            return cost;
        }
    }
    else if(persons >200){
        if(persons ==100){
            let cost = 5000 * persons;
            return cost;
        }
        else if(persons > 100){
            let cost =4000 * persons;
            return cost;
        }
        else (persons>200) 
        {
            let cost = 3000 * persons;
            return cost ;
        }
    }
}

let man = 200;
let total = picnicBudget(man)
console.log(total);

