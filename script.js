
function increment() {
    document.getElementById('inputquantity').stepUp();
}
function decrement() {
     document.getElementById('inputquantity').stepDown();
}

let form = document.querySelector('#form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let massage=""
    let name,phone,address,error
    error=document.querySelector('#error')
    name=document.querySelector('#name')
    phone=document.querySelector('#phone')
    address=document.querySelector('#address')
    
    if(name.value==""){
        massage="Name cannot be empty"
    }
    else if(!CheckAlphabet(name.value)){
        massage="Name cannot be a numeric or a symbol"
    }
    else if(name.value.length<5){
        massage="Name must more than 5 characters"
    }
    else if(phone.value==""){
        massage="Phone number cannot be empty"
    }
    else if(CheckAlphabet(phone.value)){
        massage="Phone number cannot be a alphabet"
    }
    else if(!phone.value.startsWith("0")){
        massage="Phone number starts with 0"
    }
    else if(phone.value.length<10){
        massage="Phone must more than 10 numbers"
    }
    else if(address.value==""){
        massage="Address cannot be empty"
    }
    else if(address.value.length<5){
        massage="Address must more than 5 characters"
    }
    else{
        alert("Success")
    }

    error.textContent = massage
})

function CheckAlphabet(string) {
    string = string.toLowerCase()
    let valid = true
    Array.from(string).forEach(c => {
        if(c < 'a' || c>'z'){
            valid=false
        }
        if(c == ' '){
            valid=true
        }
    })
    return valid
}