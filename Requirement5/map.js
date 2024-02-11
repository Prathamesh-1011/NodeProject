import response from './response.json' assert { type: "json" };

// Using map function to create a list of objects with only name and year properties
const mappedArray = response.map(item => {
    return {
        name: item.name,
        year: item.year
    };
});

console.log("Mapped Array:");
console.log(mappedArray);

// Using filter operation to only keep objects with a year higher than 2020
const filteredArray = response.filter(item => item.year > 2020);

console.log("\nFiltered Array:");
console.log(filteredArray);
