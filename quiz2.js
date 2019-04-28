let matrix = [
    [1,2,3], // <-- this is an array
    [5,6,7], // <-- this is an array
    [9,8,4]  // <-- this is an array
];
for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        let changeArray = matrix.splice(i, 3, 0, 0, 0);
        console.log(matrix[i][j]);

    }
}
// for (var i = 0; i < matrix.length; i++){
//     for (var j = 0; j < matrix[i].length; j++){
//         console.log(matrix[i][j]);
//     }
// }


// .splice(startingIndex, numberToRemove[, itemsToInsert])
// Changes the contents of an array by removing existing elements and/or adding new elements.
// var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

// // remove 1 element from index 2
// var removed = myFish.splice(2, 1);
// // myFish is ['angel', 'clown', 'sturgeon']
// // removed is ['mandarin']

// // remove 0 elements from index 2, and insert 'drum'
// var removed2 = myFish.splice(2, 0, 'drum');
// // myFish is ['angel', 'clown', 'drum', 'sturgeon']
// // removed is [], no elements removed


// // remove 1 element from index 2, and insert 'trumpet'
// var removed3 = myFish.splice(2, 1, 'trumpet');
// // myFish is ['angel', 'clown', 'trumpet', 'sturgeon']
// // removed is ['drum']

// // removes 2 elements starting from index 0, and inserts 'parrot', 'anemone' and 'blue'
// var removed4 = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// // myFish is ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
// // removed is ['angel', 'clown']
