//var c = 300 // global scope

let a = 300

if (true ) {   // block scope
    let a = 10
    const b = 20
    //console.log("INNER: ",a);
}

// console.log(a)
//console.log(b)
//console.log(c);

// nested scope

function one() {   // one can access two but not vice versa  -- child can access parent function
    const username = "Aakansha"

    function two() {
        const website = "Youtube"
        console.log(username)
    }
    //console.log(website);

        two()
}

        //one()

        if(true) {
            const username = "Aakansha"
        if(username === "Aakansha") {
            const website = " Youtube" 
           // console.log(username + website);
        }
        //console.log(website)
        }
        //console.log(username)

///// ++++++++++++++++interesting+++++++++++++++++++++++++++
console.log(addone(5))

function addone(num) {
    return num + 1
}


addTwo(5)   /// hoisting ths cannnot be done before execution
const addTwo = function(num) {
    return num + 2
}

