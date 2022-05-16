let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];


const getFirstElement= (e)=> e.prices[0]
const getSecondElement= (e)=> e.prices[1]

const filterByParams = (params,courses)=>{
    const lower = params[0]
    const higher = params[1]

    if(lower === null && higher === null){
        return courses
    }

    const result = []

    if(lower === null){
        courses.forEach( e => {
            if(getSecondElement(e) <= higher && getSecondElement(e) !== null){
                return result.push(e)
            }
        })
    }

    if(lower !== null){
        courses.forEach( e =>{
            if(getFirstElement(e) >= lower && getSecondElement(e) <= higher  && getSecondElement(e) !== null && getFirstElement(e) !== null){
                return result.push(e)
            }
        })
    }

    if(higher === null){
        courses.forEach( e =>{
            if(getFirstElement(e) >= lower && getFirstElement(e) !== null){
                return result.push(e)
            }
        })
    }

    return result
}
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

console.log(filterByParams(requiredRange1, courses));