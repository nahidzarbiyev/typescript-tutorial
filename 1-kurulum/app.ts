let firstNames:string[] = ['Nahid', 'Vahid', 'Zahid']

// let firstNames:Array<string>= ["Nahid", "Vahid", "Zahid"];

console.log(firstNames);

//tipini yazmadan da array yazmaq mumkundur 

let arr = [1,2,'Nahid', true , null, undefined]

console.log(arr);


let names:Array<string>;

names = ['Nahid','Zahid', 'Vahid']

console.log(names);

let ids: Array<number>;
ids = [2,34,45,55]
console.log(ids);


// let values: (string| number)[] = ['apple', 12, 'Purple', 34]
let values:Array <string| number>= ['apple', 12, 'Purple', 34]

console.log(values);

console.log(names[1]);

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element);
    
}
