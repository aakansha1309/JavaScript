const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network 

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){                                      // resolve
console.log("Promise consumed");
}) 

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("ASync 2 Resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username: "Chai , email: aakansha@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
   console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "aakansha", password: "223"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

 const username = promiseFour
 .then((user) => {
  console.log(user);
  return user.username
})
.then((username) => {
     console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))