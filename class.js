

class User {
constructor(firstname, lastname, phone, age) {
this.firstname = firstname;
this.lastname = lastname;
this.phone = phone;
this.age = age;
}
getYear() {
return 2023 - this.age
}
}

let u = new User(`atamjon`, `rakhimov`, 939990909, 17);

class newUser extends User {
constructor(firstname, lastname, phone, age, addres) {
super(firstname, lastname, phone, age,);
this.addres = addres
}
fullName(){
return `${this.firstname} ${this.lastname}`
}
}

console.log(u);

let h = new newUser(`axror`, `shoiyev`, 908997979, 29, `samarqand`)

console.dir(h.fullName());

class El {
constructor(el) {
this.el = document.querySelector(el)
}
show() {
this.el.style.height = `auto`
}
hide(s) {
this.el.style.transition = s + `ms`
this.el.style.overflow = `hidden`
this.el.style.height = `0px`
}
on(ev, fn) {
this.el.addEventListener(ev, fn)
}
}

function $(el) {
return new El(el)
}

console.log($(`h2`));

$(`h2`).on(`click`, () => {
$(`h2`).hide(500)
})

$(`button`).on(`click`, ()=>{
$(`h2`).show()
})

