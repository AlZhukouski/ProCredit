document.addEventListener('DOMContentLoaded', function () {
  const acc = document.getElementsByClassName('questions__item-title')
  if (acc.length > 0) {
    let i
    let el = document.getElementsByClassName('questions__item-title active')
    for (i = 0; i < acc.length; i++) {

      acc[i].addEventListener('click', function (e) {
        el = document.getElementsByClassName('questions__item-title active')

        if (el.length > 0 && !(e.target === el[0])) {
          const next = el[0].nextElementSibling
          el[0].classList.toggle('active')
          next.style.maxHeight = null
        }

        // eslint-disable-next-line no-invalid-this
        this.classList.toggle('active')
        // eslint-disable-next-line no-invalid-this
        const panel = this.nextElementSibling
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px'
        }
      })
    }
  }

  const passEye = document.getElementsByClassName('form__pass-eye')
  if (passEye.length > 0) {
    let i
    for (i = 0; i < passEye.length; i++) {
      passEye[i].addEventListener('click', function () {
        // eslint-disable-next-line no-invalid-this
        this.classList.toggle('active')
        // eslint-disable-next-line no-invalid-this
        const x = this.closest('.form__line').querySelector('.form__input')
        if (x.type === 'password') {
          x.type = 'text'
        } else {
          x.type = 'password'
        }
      })
    }
  }

  // Get the modal
  const modal = document.getElementById('modal')

  // Get the button that opens the modal
  const btn = document.getElementById('modalBtn')

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName('close')[0]

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = 'block'
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none'
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none'
    }
  }
})
