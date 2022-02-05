function oddFriend(friends){
     
    for(let i=0; i<friends.length; i++){
        let element = friends[i];
        if(element.length %2 !=0){    // odd length elements exists 
            return element;
            
        }
    }
    
    if(typeof (friends) !== 'string'){   // type string value
        return 'please enter valid string';
    }
   
}

let friend =['opu','neel']
let myFriend= oddFriend(friend);
console.log(myFriend);