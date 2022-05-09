window.addEventListener('scroll', (e) => {
    if(this.scrollY > 40) {
        document.querySelector('.header__top--wrapper').classList.add('remove');
        document.querySelector('.header__body--wrapper').classList.add('fixed');
        document.querySelector('.main__header').style.paddingTop = "150px";
    }else{
        document.querySelector('.header__top--wrapper').classList.remove('remove');
        document.querySelector('.header__body--wrapper').classList.remove('fixed');
        document.querySelector('.main__header').style.paddingTop = "60px";
    }
});

let submit = document.querySelector('.form__contact--submit > button');
let fullName = document.querySelector('#FullName');
let email = document.querySelector('#Email');
let phoneNumber = document.querySelector('#PhoneNumber');
let company = document.querySelector('#Company');

submit.onclick = (e) => {
    if(fullName.value.trim().length == 0) {
        addMessError("error_name", "Vui lòng điền họ tên của bạn");
        e.preventDefault();
    }
    if(email.value.trim().length == 0) {
        addMessError("error_email", "Vui lòng điền email");
        e.preventDefault();
    }
    if(phoneNumber.value.trim().length == 0) {
        addMessError("error_phone", "Vui lòng điền số điện thoại");
        e.preventDefault();
    }
    if(company.value.trim().length == 0) {
        addMessError("error_company", "Vui lòng nhập bộ phận/ công ty");
        e.preventDefault();
    }
}

fullName.onkeyup = (e) => {
    if(e.target.value.length == 0) {
        addMessError("error_name", "Vui lòng điền họ tên của bạn");
    }else{
        addMessError("error_name", "");
    }
};

email.onkeyup = (e) => {
    if(e.target.value.length == 0) {
        addMessError("error_email", "Vui lòng điền email");
    }else if(!validateEmail(e.target.value)) {
        addMessError("error_email", "Vui lòng nhập đúng định dạng email");
    }else{
        addMessError("error_email", "");
    }
};

phoneNumber.onkeyup = (e) => {
    if(e.target.value.length == 0) {
        addMessError("error_phone", "Vui lòng điền số điện thoại");
    }else if(!validateNumber(e.target.value)){
        addMessError("error_phone", "Vui lòng nhập đúng định dạng");
    }
    else{
        addMessError("error_phone", "");
    }
};

company.onkeyup = (e) => {
    if(e.target.value.length == 0) {
        addMessError("error_company", "Vui lòng nhập bộ phận/ công ty");
    }else{
        addMessError("error_company", "");
    }
};

function addMessError(classElement, message) {
    var item = document.getElementsByClassName(classElement)[0];
    item.innerText = message;
}

function validateEmail(elementValue){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue); 
} 

function validateNumber(elementValue) {
    var numberPattern = /^\d+$/;
    return numberPattern.test(elementValue);
}
