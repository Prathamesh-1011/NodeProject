import response from './response1.json' assert { type: "json" };

const mappedArray = response.map(item => {
    return {
        name: item.name,
        year: item.year
    };
});

console.log("Mapped Array:");
console.log(mappedArray);

const filteredArray = response.filter(item => item.year > 2020);

console.log("\nFiltered Array:");
console.log(filteredArray);
