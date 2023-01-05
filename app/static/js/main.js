const cartModal = document.getElementById('cartModal')
const cartBtnOpen = document.getElementById('cartBtnOpen')
const cartBtnClose = document.getElementById('cartBtnClose')

const modalMenu = document.getElementById('modalMenu')
const menuBtnOpen = document.getElementById('menuBtnOpen')
const menuBtnClose = document.getElementById('menuBtnClose')

const RegAndAuth = document.getElementById('RegAndAuth')
const menuBtnOpenRegAndAuth = document.getElementById('menuBtnOpenRegAndAuth')
const closeRegAndAuth = document.getElementById('closeRegAndAuth')

const singupform = document.getElementById('SingUp')
const singinform = document.getElementById('SingIn')

const OpenSingIn = document.getElementById('OpenSingIn')
const OpenSingUp = document.getElementById('OpenSingUp')

cartBtnOpen.onclick = function () {
    cartModal.classList.add('open')
    cartModal.style.display = "block";
    cartBtnClose.onclick = function () {
        cartModal.classList.remove('open')
        cartModal.classList.add('close')
        setTimeout(() => cartModal.style.display = "none", 400)
    }
}

menuBtnOpen.onclick = function () {
    modalMenu.classList.remove('closeMenu')
    modalMenu.classList.add('openMenu')
    modalMenu.style.display = "block";
    menuBtnClose.onclick = function () {
        modalMenu.classList.remove('openMenu')
        modalMenu.classList.add('closeMenu')
        setTimeout(() => modalMenu.style.display = "none", 500)
    }
}


menuBtnOpenRegAndAuth.onclick = function () {
    RegAndAuth.classList.remove('RegAndAuthClose')

    RegAndAuth.classList.add('RegAndAuthOpen')
    RegAndAuth.style.display = "block";
    closeRegAndAuth.onclick = function () {
        RegAndAuth.classList.remove('RegAndAuthOpen')
        RegAndAuth.classList.add('RegAndAuthClose')
        setTimeout(() => RegAndAuth.style.display = "none", 400)
    }
}

OpenSingIn.onclick = function () {
    OpenSingUp.style.borderBottom = "none"
    singinform.classList.add('animateSingInOpen')
    singinform.style.display = 'flex'
    singupform.style.display = 'none'
    OpenSingIn.style.borderBottom = "2px solid #35533a"
}
OpenSingUp.onclick = function () {
    OpenSingIn.style.borderBottom = "none"
    singupform.classList.add('animateSingUpOpen')
    singupform.style.display = 'flex'
    singinform.style.display = 'none'
    OpenSingUp.style.borderBottom = "2px solid #35533a"

}


function clearInput(form, firstInput, lastInput) {
    for (let i in form[0]) {
        if (Number(i) >= firstInput && Number(i) < lastInput) {
            $(form[0][i]).val('');
        }
        else if (Number(i) > lastInput + 1) {
            break
        }
    }
}




singupform.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this)
    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
        }

    })
        .then((res) => res.json())
        .then(function (data) {

            if (data['errors']) {
                inputId = document.querySelectorAll('#SingUp input')
                inputError = document.querySelectorAll('#SingUp .errorText')
                inputId.forEach(element => {
                    element.classList.add('agreedInput')
                    element.classList.remove('errorInput')
                });
                inputError.forEach(element => {
                    element.remove()
                });

                for (let key in data['errors']) {
                    ArrayForm = document.querySelector('#SingUp').querySelectorAll('input[name="' + key + '"]')
                    ArrayForm[0].classList.remove('agreedInput')
                    ArrayForm[0].classList.add('errorInput')
                    let result = ""
                    for (let k in data['errors'][key]) {
                        result += data['errors'][key][k] + '<br>'
                    }
                    ArrayForm[0].insertAdjacentHTML('beforebegin', `<p class="errorText">${result}</p>`)
                }
            }
            else {
                inputError = document.querySelectorAll('#SingUp .errorText')

                inputError.forEach(element => {
                    element.remove()
                });

                clearInput(singupform, 1, 5)
            }
        })

})


singinform.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this)

    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
        }

    })
        .then((res) => res.json())
        .then(function (data) {
            if (data['errors']) {
                inputId = document.querySelectorAll('#SingIn input')
                inputError = document.querySelectorAll('#SingIn .errorText')
                inputId.forEach(element => {
                    element.classList.add('agreedInput')
                    element.classList.remove('errorInput')
                });
                inputError.forEach(element => {
                    element.remove()
                });

                for (let key in data['errors']) {
                    ArrayForm = document.querySelector('#SingIn').querySelectorAll('input[name="' + key + '"]')
                    ArrayForm[0].classList.remove('agreedInput')
                    ArrayForm[0].classList.add('errorInput')
                    let result = ""
                    for (let k in data['errors'][key]) {
                        result += data['errors'][key][k] + '<br>'
                    }
                    ArrayForm[0].insertAdjacentHTML('beforebegin', `<p class="errorText">${result}</p>`)
                }
            }
            else {
                inputError = document.querySelectorAll('#SingIn .errorText')

                inputError.forEach(element => {
                    element.remove()
                });

                clearInput(singupform, 1, 2)
            }
        })

})