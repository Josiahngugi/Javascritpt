const people = [
    { name: 'Alice', age: 25, gender: 'female' },
    { name: 'Bob', age: 30, gender: 'male' },
    { name: 'Charlie', age: 35, gender: 'male' },
    { name: 'Diana', age: 40, gender: 'female' },
    { name: 'Eva', age: 25, gender: 'female' }
  ];

function groupBy(itemArray, keyProperty ){
    return itemArray.reduce((result, currentvalue) => {
        const group =currentvalue[keyProperty]
        if(!result[group]){
            result[group] = []
        }
        result[group].push(currentvalue)
        return result
    }, {} )
}

console.log(groupBy(people, "gender"))