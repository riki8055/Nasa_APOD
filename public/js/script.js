const container = document.querySelector('.container')
const btn = document.querySelector('.nav-btn')

btn.addEventListener('click', () => {
    document.body.classList.toggle("change")
})

// Header
const goBtn = document.querySelector('.go-btn')

goBtn.addEventListener('click', () => {
    document.querySelector('.apod-section').classList.remove('display');
    showApod()
    container.style.transform = "translateY(-100vh)"
})
// End of Header

// APOD Section
const closeBtnResult = document.querySelector('.close-btn')
const toTopBtn = document.querySelector('.to-top')

const showApod = () => {
    setTimeout(() => {
        document.querySelector('.apod-section').classList.add('display');
    }, 6000);
}

closeBtnResult.addEventListener('click', () => {
    document.querySelector('.apod-section .main').classList.remove("show-result")
})

toTopBtn.addEventListener('click', () => {
    container.style.transform = "translateY(0)"
})

window.addEventListener('load', () => {
    showApod()
})
// End of APOD Section