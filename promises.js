
  const a = false;  
  const promise1 = new Promise((resolve, reject) => {
    if (a) {
      resolve("yes") 
    } else 
      reject("no") 
  })
  .then(response => console.log(response))
  .catch(err => console.log(err))