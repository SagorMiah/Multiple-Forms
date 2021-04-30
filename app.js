const slide = document.querySelector('.slide')
const nextOne = document.querySelector('.next')
const nextTwo = document.querySelector('.next1')
const submit = document.querySelector('.submit')
const prevOne = document.querySelector('.prev1')
const prevTwo = document.querySelector('.prev2')

const main = document.querySelector('.main')
const input = document.querySelectorAll('input')

//input selector
const first = document.querySelector('#first')
const second = document.querySelector('#second')
const number = document.querySelector('#number')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const conpassword = document.querySelector('#conpassword')

//bulet
const fbulet = document.querySelector('.first')
const sbulet = document.querySelector('.second')
const tbulet = document.querySelector('.third')


const inputBoxOne = () => {
    if(((first.value) && (second.value)) === ""){
        first.classList.add('active')
        second.classList.add('active')
        slide.style.marginLeft = "0%"
    }else if(((first.value.length) && (second.value.length)) <= 4){
        alert('plese first naem or last name al least less than 5 character')
        slide.style.marginLeft = "0%"
    }else{
        slide.style.marginLeft = "-25%"
        first.classList.remove('active')
        second.classList.remove('active')
        fbulet.classList.add('active')
    }
}

const inputBoxTwo = () => {
    if((number.value.length === 0)){
        number.classList.add('active')
        email.classList.add('active')
        slide.style.marginLeft = "-25%"
    }else if(number.value.length <= 9){
        alert('plese fill the number al least less than 10 character')
        slide.style.marginLeft = "-25%"
    }else{
        slide.style.marginLeft = "-50%"
        number.classList.remove('active')
        email.classList.remove('active')
        sbulet.classList.add('active')
    }
}

const inputBoxThree = () => {
    if(((password.value) && (conpassword.value)) === ""){
        password.classList.add('active')
        conpassword.classList.add('active')
        slide.style.marginLeft = "-50%"
    }else if(((password.value.length) && (conpassword.value.length)) <= 7){
        alert('please fill password or confirm password at least less than 8 characters')
        slide.style.marginLeft = "-50%"
    }else if((password.value.length) !== (conpassword.value.length)){
        alert("password and confirm password do not match")
        slide.style.marginLeft = "-50%"
    }else{
        password.classList.remove('active')
        conpassword.classList.remove('active')
        tbulet.classList.add('active')
        setTimeout(() => {
            singlein()
        },1000)
    }
}

const singlein = () => {
    alert('welcome submited!')
    input.forEach(single => {
        single.value = ""
        slide.style.marginLeft = "0%"
        tbulet.classList.remove('active')
        fbulet.classList.remove('active')
        sbulet.classList.remove('active')
    })
}

nextOne.addEventListener('click', () => {
   inputBoxOne()
})

nextTwo.addEventListener('click', () => {
   inputBoxTwo()
})

prevOne.addEventListener('click', () => {
    slide.style.marginLeft = "0%"
    fbulet.classList.remove('active')
})

prevTwo.addEventListener('click', () => {
    slide.style.marginLeft = "-25%"
    sbulet.classList.remove('active')
})

submit.addEventListener('click', () => {
    inputBoxThree()
})