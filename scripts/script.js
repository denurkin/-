let buttonOpacity = document.querySelectorAll("button"),
buttonLike = document.querySelectorAll(".element__like"),
nameProfile = document.querySelector('.profile__name'),
workingProfile = document.querySelector('.profile__working'),
popupName = document.querySelector('.popup__name'),
popupWorking = document.querySelector('.popup__working'),
popupOpen = document.querySelector('.profile__edit'),
popupClose = document.querySelector('.popup__close'),
popupSave = document.querySelector('.popup__form'),
popup = document.querySelector(".popup");


function popupToggle () {
    popup.classList.toggle('popup__opened');
}

function popupContent() {
    popupName.value = nameProfile.textContent;
    popupWorking.value = workingProfile.textContent;
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    popupToggle();
    nameProfile.textContent = popupName.value;
    workingProfile.textContent = popupWorking.value;
}

popupOpen.addEventListener("click", () => {
    popupToggle();
    popupContent();
})

popupClose.addEventListener('click', popupToggle)

popupSave.addEventListener('submit', formSubmitHandler)


for (let i = 0; i < buttonOpacity.length; i++) {
    buttonOpacity[i].addEventListener("mousemove", () => {
        buttonOpacity[i].style.opacity = "0.6";
    })
    buttonOpacity[i].addEventListener("mouseleave", () => {
        buttonOpacity[i].style.opacity = "1";
    })
}

for (let i = 0; i < buttonLike.length; i++) {
    buttonLike[i].addEventListener("click", () => {
        if (window.getComputedStyle(buttonLike[i]).backgroundImage == 'url("http://127.0.0.1:5500/image/like.svg")') {
            buttonLike[i].style.backgroundImage = "url(/image/Union.svg)";
        } else {
            buttonLike[i].style.backgroundImage = "url(/image/like.svg)";
        }
    })
}
