function getEvenNumbers() {
    // var arr = [1, 2, 3, 4, 5, 6];
    var arr =['atiq', 'atu','mofz','kog'];

    for (var i = 0; i < arr.length; i++) {
        // if (arr[i] % 2 != 0) {
        //     // document.writeln(arr[i] + "<br />");
        //     console.log(arr[i]);
        // }
        if(arr[i].length %2 !=0){
            console.log(arr[i]);
            break;
        }
    }
}

getEvenNumbers();