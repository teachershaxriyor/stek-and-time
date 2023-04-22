//so'rovlar
fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(data => data.json())
.then(json => rend(json))

function rend (json) {
  console.log(json);
  json.map((item) => {
    let ar = document.createElement('article')
    ar.innerHTML = `<img src="photo_2023-04-12_13-58-58.jpg" alt="post">
    <div class ="content">
      <h2>${item.title}</h2>
       <p>${item.body}</p>
       </div>`
    //    document.querySelelctor(.grid).append(ar)
  })
}