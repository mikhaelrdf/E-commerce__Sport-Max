document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
  const navMenu = document.querySelector('.nav-menu')

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function () {
      navMenu.classList.toggle('active')
    })
  }

  // Fechar menu ao clicar em um link
  const navLinks = document.querySelectorAll('.nav-menu a')
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active')
    })
  })

  // Filtro de Produtos
  const filterBtns = document.querySelectorAll('.filter-btn')
  const productCards = document.querySelectorAll('.product-card')

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      // Remover classe active de todos os botões
      filterBtns.forEach(btn => btn.classList.remove('active'))
      // Adicionar classe active ao botão clicado
      this.classList.add('active')

      const filter = this.getAttribute('data-filter')

      productCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'block'
        } else {
          if (card.getAttribute('data-category') === filter) {
            card.style.display = 'block'
          } else {
            card.style.display = 'none'
          }
        }
      })
    })
  })

  // Slider de Depoimentos
  const testimonialCards = document.querySelectorAll('.testimonial-card')
  const dots = document.querySelectorAll('.dot')
  const prevBtn = document.querySelector('.testimonial-btn.prev')
  const nextBtn = document.querySelector('.testimonial-btn.next')
  let currentSlide = 0

  function showSlide(index) {
    testimonialCards.forEach(card => card.classList.remove('active'))
    dots.forEach(dot => dot.classList.remove('active'))

    testimonialCards[index].classList.add('active')
    dots[index].classList.add('active')
    currentSlide = index
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', function () {
      currentSlide =
        (currentSlide - 1 + testimonialCards.length) % testimonialCards.length
      showSlide(currentSlide)
    })

    nextBtn.addEventListener('click', function () {
      currentSlide = (currentSlide + 1) % testimonialCards.length
      showSlide(currentSlide)
    })
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', function () {
      showSlide(index)
    })
  })

  // Auto slider para depoimentos
  setInterval(function () {
    if (testimonialCards.length > 0) {
      currentSlide = (currentSlide + 1) % testimonialCards.length
      showSlide(currentSlide)
    }
  }, 5000)

  // Validação do formulário de newsletter
  const newsletterForm = document.getElementById('newsletter-form')
  const formMessage = document.querySelector('.form-message')

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value

      // Simulação de envio de formulário
      formMessage.textContent = 'Obrigado por se inscrever!'
      formMessage.style.color = '#28a745'
      this.reset()

      // Limpar mensagem após 3 segundos
      setTimeout(() => {
        formMessage.textContent = ''
      }, 3000)
    })
  }

  // Adicionar ao carrinho (simulação)
  const addToCartBtns = document.querySelectorAll('.product-card .btn-primary')
  const cartCount = document.querySelector('.cart-count')
  let count = 0

  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      count++
      cartCount.textContent = count

      // Feedback visual
      this.textContent = 'Adicionado!'
      this.style.backgroundColor = '#28a745'

      setTimeout(() => {
        this.textContent = 'Adicionar ao Carrinho'
        this.style.backgroundColor = ''
      }, 1500)
    })
  })

  // Efeito de scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const targetId = this.getAttribute('href')
      if (targetId === '#') return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        })
      }
    })
  })
})
