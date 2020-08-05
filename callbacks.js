const posts = [
  {title: "Post One", body: "This is post one"}, 
  {title: "Post two", body: "This is post two"}
]; 

function getList() {
setTimeout(() => {
  let output = ""
  posts.forEach((post, index) => {
    output += `<li>${post.title}</li>`
    document.body.innerHTML = output; 
  })
}, 1000)  
}

function addList(post, callback) {
  setTimeout(() => {
  posts.push(post);
  callback();
  }, 2000) 
}

addList({title: "post 3", body: "this is post 3"}, getList)