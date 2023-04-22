// Massivlar ustida amallar
// let a = [1, 2, 3, 'Salom', false, 8, '165', 15]

// itemlar ustida amallar
// a.push('test') oxiridan qo'shadi
// a.unshift('test') boshidan qo'shadi
// a.pop(); oxiridan o'chiradi
// a.shift(); boshidan o'chiradi
// let f = a.splice(2,4)
// let f = a.slice(2,4)

//ITERATORLAR
// a.forEach((item)=>{
//     document.querySelector('.list').innerHTML += '<li>${item}</li>'
// })

// let f = a.map((item)=>{
//     document.querySelector('.list').innerHTML += '<li>${item}</li>'
//     return item + 5
// })

// let f = a.find(item=>item > 3)
// let f = a.filter(item=>item > 2)

// let f = a.join(' ,')
// let h = f.split(' ,')

// a.sort((a,b)=>a - b)
// // a.reverse()
// let r = [150000, 500000, 286000]
// // let h = a.concat(r)
// // let h = [...a, ...r]
// let h = r.reduce((summ, item)=>{
//     return summ * item
// }, 1)
// console.log(r);
// // console.log(f);
// console.log(h);


//OBYEKTLAR USTIDA AMALLAR
let user = {
    firstname: 'Shaxriyor',
    lastname: 'Baxronov',
    age: 15,
    "ish joyi": "it park",
    12:"O'n ikki",
    getYear: function () {
        return 2023 - this.age
    }
}
//user.lastname = 'Toxirov'

// let newuser = {
//     firstname: user.firstname,
//     lastname: 'Toxirov',
//     age:user.age,
//     "ish joyi": user['ish joyi'],
//     12: user[12]
// };

let newuser = Object.assign({}, user, {login: 'admin'})
newuser.age = 20

// for (let key in newuser) {
//     console.log(key + 'kalitining qiymati' + newuser[key] + 'ga teng');
// };


// for (let key in newuser)  {
//     console.log(key + 'kalitining qiymati' + newuser[key] + 'ga teng');
// }

let users = []
function createUser(fish, age) {
    return {
        fish,
        age
    }
}

let f = document.forms[0]

f.addEventListener('submit', (e)=>{
    e.preventDefault()
    let u = createUser(f.fish.value, f.age.value)

    console.log(u);
})


