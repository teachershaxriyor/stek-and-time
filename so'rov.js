let gr = document.querySelector('.grid')
let frm1 = document.forms[0]
let frm2 = document.forms[1]

function getData() {
    fetch('http://cyberss.uz/api/dars')
    .then(data => data.json())
    .then(json => rend(json))
}

function rend(json) {
    gr.innerHTML = ``
    json.map((item) => {
        let ar = document.createElement('article')
        ar.innerHTML = `<div class="content">
                        <h2>Ism sharifi: ${item.firstname} ${item.lastname}</h2>
                        <p>Telefon: ${item.tel}</p>
                        <p>Yoshi: ${item.age}</p>
                        <button data-index="${item.id} |${item.firstname}|${item.lastname}|${item.tel}|${item.age}" 
                        <button data-index="${item.id}" class="btn btn-danger del">Delete</button>
                        </div>`
        gr.append(ar)                 
    })
    itemDel()
    editItem()
}

frm1.addEventListener('submit', (e) => {
    e.preventDefault()
    let d = {
        firstname:frm1.firstname.value,
        lastname: frm1.lastname.value,
        tel: frm1.tel.value,
        age: frm1.age.value,
    }
    fetch('http://cyberss.uz/api/dars'), {
        method: 'POST',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(d)
    }.then(data => data.json()).then(json =>{
        getData()
    })
})

function itemDel() {
    let delBtns = document.querySelectorAll('.del')
    delBtns.forEach(item => {
        item.addEventListener('click', (e)=> {
            fetch('http://cyberss.uz/api/dars-del/' +e.target.dataset.index)
            .then(data => data.json())
            .then(json => {
                getData()
            })
        })
    })
}


function editItem() {
    let edBtns = document.querySelectorAll('.edit')
    edBtns.forEach(item => {
        item.addEventListener('click', (e) =>{
            let nd = e.target.dataset.index.split('|')
            frm2.firstname.value = nd[1]
            frm2.lastname.value = nd[2]
            frm2.tel.value = nd[3]
            frm2.age.value = nd[4]

            frm2.addEventListener('submit', (e) =>{
                e.preventDefault();
                let d = {
                    firstname: frm2.firstname.value,
                    lastname: frm2.lastname.value,
                    tel: frm2.tel.value,
                    age:frm2>age.value,
                }
                let url = 'http://cyberss.uz/api/dars-upd/' +nd[0]
                fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-type": 'application/json'
                    },
                    body: JSON.stringify(d)
                }).then(data => {
                    getData()
                    return data
                })
            })
        })
    })
}
getData()