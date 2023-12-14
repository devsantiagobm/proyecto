class Menu extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML =
            `<header class="header">
           <picture class="header__picture">
               <img src="/globals/assets/small-logo.svg" alt="" class="header__logo">
           </picture>
   
           <nav class="header__nav">
               <ul class="header__list">
                   <li>
                       <a href="/home" class="header__link">Home</a>
                   </li>
                   <li>
                       <a href="/home/tratamientos" class="header__link">Tratamientos</a>
                   </li>
                   <li>
                       <a href="/home/cosmetologos" class="header__link">Cosmétologos</a>
                   </li>
                   <li>
                       <a href="/auth/registro.html" class="header__link">Registrate</a>
                   </li>
                   <li>
                       <a href="/auth/inicio.html" class="button">Inicia sesión</a>
                   </li>
               </ul>
           </nav>
       </header>`
    }
}


class Footer extends HTMLElement {

    constructor(){
        super()
    }

    connectedCallback() {
        this.innerHTML =
            `
        <footer class="footer">
        <div class="footer__header">
            <picture class="footer__picture">
                <img src="/globals/assets/small-logo.svg" alt="Logo">
            </picture>

            <nav class="footer__nav">
                <a class="footer__link" href="/home">Home</a>
                <a class="footer__link" href="/home/tratamientos">Tratamientos</a>
                <a class="footer__link" href="/home/cosmetologos">Cosmétologos</a>
                <a class="footer__link" href="/auth/registro.html">Registrate</a>
                <a class="footer__link" href="/auth/inicio.html">Inicia sesión</a>
            </nav>




            <div class="footer__extern-links">
                <a href="" class="footer__anchor">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="" class="footer__anchor">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
            </div>
        </div>



        <hr class="footer__divider">

        <span class="footer__copyright">©Copyright 2023, Derechos reservados por Alejandra Bautista</span>
    </footer>`
    }
}

window.customElements.define("nav-menu", Menu)
window.customElements.define("custom-footer", Footer)