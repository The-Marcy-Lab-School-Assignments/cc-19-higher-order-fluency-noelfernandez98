// const bananaBread = array => {
//     return array.map(alum => {
//         return {...alumni, bananaBread : `${alum.name} got banana bread at ${alum.job}`}
//     })
// }//write your code here
// console.log(bananaBread(alumni))




// const averageAge = (array) => {
//     const sum = array.reduce((a,b) => a + b.age, 0)
//     return Math.round(sum / array.length)
// }
// console.log(averageAge(alumni))


// const ninetiesBabies = ()

// 4. Write a function named `addSchool` that takes an array of objects and returns a new array where a property of 'school', and value of 'The Marcy Lab School' is added to each object.
    
//     ```jsx
//     addSchool(alumni) // returns [
//       { name: 'Jarrit', job: 'TPT', language: 'JavaScript', age: 22, school: 'The Marcy Lab School'},
//       { name: 'Stephanie', job:'JPMorgan', language:'JavaScript', age:21, school: 'The Marcy Lab School'}, 
//       { name: 'Devonte', job:'WW', language:'JavaScript', age:23, school: 'The Marcy Lab School'}, 
//       ...
//     ]
//     ```

const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:22}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:21}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:21},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:21}]


const addSchool = array => {
    return array.map(alum => {
        return{...alum, school: 'The Marcy Lab School'};
    })
};
console.log(addSchool(alumni));


//  5. Write a function named `allUseJavaScript` that takes an array of objects and returns a boolean if for every object, the language property is 'JavaScript'.
    
//     ```jsx
//     allUseJavaScript(alumni) // returns true
//     ```

// **Test all your solutions for questions 6-10 with the following variable:** 

// ` const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'] `

const allUseJavaScript = array => {
    return array.every(alum => alum.language === 'JavaScript')
}
console.log(allUseJavaScript(alumni))