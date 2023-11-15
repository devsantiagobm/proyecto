class Menu extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML =
            `
        <aside class="menu">
        <picture class="menu__logo">
            <img src="../menu/assets/logo.png" alt="">
        </picture>

        <hr class="menu__divider">


        <span class="menu__title">Menu</span>

        <nav class="menu__nav">

            <a href="./dashboard" class="menu__link">
                <i class="menu__icons fa-regular fa-chart-bar"></i>
                <span>Dashboard</span>
            </a>
            <a href="./insumos" class="menu__link">
                <i class="menu__icons fa-regular fa-lemon"></i>
                <span>Insumos</span>
            </a>
            <a href="./usuarios" class="menu__link">
                <i class="menu__icons fa-regular fa-circle-user"></i>
                <span>Usuarios</span>
            </a>
            <a href="./roles" class="menu__link">
                <i class="menu__icons fa-regular fa-bookmark"></i>
                <span>Roles</span>
            </a>
            <a href="./tratamientos" class="menu__link">
                <i class="menu__icons fa-regular fa-sun"></i>
                <span>Tratamientos</span>
            </a>
            <a href="./citas" class="menu__link">
                <i class="menu__icons fa-regular fa-bell"></i>
                <span>Citas</span>
            </a>
            <a href="./proveedores" class="menu__link">
                <i class="menu__icons fa-regular fa-address-card"></i>
                <span>Proveedores</span>
            </a>
            <a href="./compras" class="menu__link">
                <i class="menu__icons fa-solid fa-cart-shopping"></i>
                <span>Compras</span>
            </a>
            <a href="./unidades" class="menu__link">
                <i class="menu__icons fa-regular fa-clipboard"></i>
                <span>Unidades</span>
            </a>

        </nav>

        <footer class="menu__footer">
            <span class="menu__title">Perfil</span>

            <div class="menu__profile">
                <picture>
                    <img class="menu__avatar" src="../menu/assets/user-image.jpeg" alt="">
                </picture>

                <div class="menu__user-data">
                    <span class="menu__username">Alejandra Benitez</span>
                    <span class="menu__email">aleben@example.com</span>
                </div>
            </div>

            <button class="menu__close-session">
                <i class="fa-solid fa-arrow-left"></i>

                <span>
                    Cerrar sesión
                </span>
            </button>

        </footer>
    </aside>
        `
    }
}


console.log("funcionando...");

window.customElements.define("nav-menu", Menu)