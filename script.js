
// ? ====================================== Class ===============================================

class User {
    constructor(name, year) {
        this.name = name
        this.year = year
    }

    age(){
        return 2024 - this.year
    }
}

// ? ============================ Extend ===================================

class Students extends User {
    currentYear = 2024
    constructor(name, year, school, group) {
        super(name, year)
        this.school = school
        this.group = group
    }
    info(){
        return this.name + ' ' + this.year + "yilda tug'ilgan"
    }
    set Mark(mark){
        this.mark = mark
    }
    get Mark(){
        return this.mark
    }
    get age(){
        // this.test()
        // this.#salom()
        return this.currentYear - this.year
    }

    // ? ========== Private ============
    #salom(){
        console.log('dfjhfehjugfqe');
    }
}

// ? ======================= Getter va Setter ==============================

let u = new Students('Sardor', 1999, 'IT park', '23-guruh')
console.log(u);
u.Mark = 5
console.log(u.Mark);
u.age = 258
console.log(u.age);
// u.#salom()

$('h1').on('click', ()=>{
    $('h1').setColor('red')
    $('h1').lsp('20px')
    $('h1').yozuvRazmeri('55px')
})