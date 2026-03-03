'use strict';

//Opening or closing side bar

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function() {
    elementToggleFunc(sidebar); // Abre ou fecha a sidebar
    elementToggleFunc(this);    // Adiciona ou remove .active do botão para ele girar
});

//Activating Modal-testimonial

const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const testimonialsModalFunc = function () {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
}

for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener('click', function () {
        modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
        modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
        modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;

        modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML;

        testimonialsModalFunc();
    })
}

//Activating close button in modal-testimonial

modalCloseBtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);

//Activating Filter Select and filtering options

const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

select.addEventListener('click', function () {elementToggleFunc(this); });

for(let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener('click', function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);

    });
}

const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
    for(let i = 0; i < filterItems.length; i++) {
        if(selectedValue == "all") {
            filterItems[i].classList.add('active');
        } else if (selectedValue == filterItems[i].dataset.category) {
            filterItems[i].classList.add('active');
        } else {
            filterItems[i].classList.remove('active');
        }
    }
}

// Função para fechar o select
const closeSelect = () => {
    select.classList.remove("active"); // Ou a classe que o seu elementToggleFunc usa
};

// Fecha o select se clicar fora dele
window.addEventListener('click', function (e) {
    const selectBox = document.querySelector('.filter-select-box');
    
    // Se o clique NÃO foi dentro da caixa do select e o select estiver aberto
    if (!selectBox.contains(e.target)) {
        select.classList.remove('active');
    }
});

//Enabling filter button for larger screens 

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
    
    filterBtn[i].addEventListener('click', function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove('active');
        this.classList.add('active');
        lastClickedBtn = this;

    })
}

// Sort dos projetos por data
document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.querySelector(".project-list");
    const sortBtn = document.getElementById("sort-btn");
    const sortValueText = sortBtn.querySelector(".select-value");

    // Função que executa a ordenação
    const sortProjects = (order) => {
        // 1. Pega todos os itens e transforma em Array
        const items = Array.from(projectList.querySelectorAll(".project-item"));

        // 2. Ordena o array
        items.sort((a, b) => {
            const dateA = parseInt(a.getAttribute("data-date"));
            const dateB = parseInt(b.getAttribute("data-date"));

            return order === "desc" ? dateB - dateA : dateA - dateB;
        });

        // 3. Remove os itens atuais e adiciona os ordenados
        projectList.innerHTML = "";
        items.forEach(item => projectList.appendChild(item));
    };

    // Executa a ordenação padrão (Mais recentes primeiro) ao carregar
    sortProjects("desc");

    // Evento de clique no botão de Sort
    sortBtn.addEventListener("click", () => {
        const currentOrder = sortBtn.getAttribute("data-order");
        const newOrder = currentOrder === "desc" ? "asc" : "desc";
        
        sortBtn.setAttribute("data-order", newOrder);
        sortValueText.innerText = newOrder === "desc" ? "Newest" : "Oldest";
        
        sortProjects(newOrder);
    });
});

// Enabling Contact Form

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

for(let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
        if(form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else { 
            formBtn.setAttribute('disabled', '');
        }
    })
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch('https://formspree.io/f/movegeda', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Só mostramos o popup depois que o Formspree confirmar o envio
            showSuccessPopup();
            form.reset();
            formBtn.setAttribute('disabled', '');
        } else {
            response.json().then(data => {
                if (data.errors) {
                    alert(data.errors.map(error => error.message).join(", "));
                } else {
                    alert('Oops! There was a problem submitting your form.');
                }
            });
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your form.');
    });
});


function showSuccessPopup() {
    const popup = document.getElementById('success-popup');
    popup.style.display = 'flex'; // <- Adicionado isso
    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.style.display = 'none'; // <- E escondemos depois de sumir
        }, 400); // tempo da transição do CSS (0.4s = 400ms)
    }, 2500); // tempo que o popup fica visível
}

// Enabling Page Navigation 

/**
 * Seleção de elementos
 */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

/**
 * Lógica de Navegação
 */
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    
    // Pegamos apenas o TEXTO do botão (ex: "About"), 
    // ignorando o SVG, e removemos espaços extras.
    const clickedPage = this.textContent.trim().toLowerCase();

    // Percorremos todas as páginas para decidir qual mostrar
    for (let j = 0; j < pages.length; j++) {
      
      // Se o texto do botão for igual ao data-page da seção
      if (clickedPage === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}