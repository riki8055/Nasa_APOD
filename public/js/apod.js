const form = document.querySelector('.date')
const searchInp = document.querySelector('.date input')
const apodDate = document.getElementById('apod-date')
const apodResult = document.getElementById('apod-result')
const apodImg = document.getElementById('apod-img')
const apodTitle = document.getElementById('apod-title')
const apodText = document.getElementById('apod-text')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const date = searchInp.value

    fetch('http://localhost:3000/apod?date=' + date).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                apodResult.classList.add("err")
                apodResult.querySelector('.error').textContent = data.error
            } else {
                if(apodResult.classList.contains("err")) {
                    apodResult.classList.remove("err")
                }
                apodDate.textContent = data.date
                apodImg.src = data.image_url
                apodTitle.textContent = data.title
                apodText.textContent = data.explanation
            }
        })
    })
    document.querySelector('.apod-section').classList.remove('display')
    showApod()
    document.querySelector('.apod-section .main').classList.add("show-result")
})