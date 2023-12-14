class Menu extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML =
            `
        <aside class="menu">
        <picture class="menu__logo">
            <img src="/globals/assets/logo.png" alt="JB Cosmetología ícono" height="33">
        </picture>

        <hr class="menu__divider">


        <span class="menu__title">Menu</span>

        <nav class="menu__nav">

            
        <a href="/usuarios" class="menu__link">
            <i class="menu__icons fa-regular fa-circle-user"></i>
            <span>Usuarios</span>
        </a>
        <a href="/roles" class="menu__link">
            <i class="menu__icons fa-regular fa-bookmark"></i>
            <span>Roles</span>
        </a>
            <a href="/insumos" class="menu__link">
                <i class="menu__icons fa-regular fa-lemon"></i>
                <span>Insumos</span>
            </a>
            <a href="/tratamientos" class="menu__link">
                <i class="menu__icons fa-regular fa-sun"></i>
                <span>Tratamientos</span>
            </a>
            <a href="/cita" class="menu__link">
                <i class="menu__icons fa-regular fa-bell"></i>
                <span>Citas</span>
            </a>
            <a href="/proveedores" class="menu__link">
                <i class="menu__icons fa-regular fa-address-card"></i>
                <span>Proveedores</span>
            </a>
            <a href="/compra" class="menu__link">
                <i class="menu__icons fa-solid fa-cart-shopping"></i>
                <span>Compras</span>
            </a>
            <a href="/categoria-insumos" class="menu__link">
                <i class="menu__icons fa-regular fa-clipboard"></i>
                <span>Categoría insumos</span>
            </a>
            <a href="/cosmetologos" class="menu__link">
                <i class="menu__icons fa-regular fa-clipboard"></i>
                <span>Cosmetólogos</span>
            </a>
            <a href="/pacientes" class="menu__link">
                <i class="menu__icons fa-regular fa-clipboard"></i>
                <span>Pacientes</span>
            </a>
            <a href="/agenda" class="menu__link">
                <i class="menu__icons fa-regular fa-clipboard"></i>
                <span>Agenda</span>
            </a>
        

        </nav>

        <footer class="menu__footer">
            <span class="menu__title">Perfil</span>

            <div class="menu__profile">
                <picture>
                    <img class="menu__avatar" src="/globals/assets/user-image.jpeg" alt="">
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



class RadiosStatus extends HTMLElement {
    constructor() {
        super()
    }



    connectedCallback() {
        this.innerHTML = `
                <div class="form__input-box">
                    <label class="form__label">Estado</label>


                    <div style="display: flex; gap: 8px;">
                    <div>
                    <input id="ejemplo" type="radio" class="form__checkbox" name="ejemplo">
                    Habilitado
                    </div>
                    <div>
                    <input id="ejemplo" type="radio" class="form__checkbox" name="ejemplo">
                    Inhabilitado
                    </div>
                    </div>
                </div>
        `
    }
}


class ActionButtons extends HTMLElement {
    constructor() {
        super()
        this.isDelete;
        this.isView;
        this.isUpdate;
    }

    static observedAttributes = ["is-delete", "is-view", "is-update"];

    connectedCallback() {
        this.innerHTML = `
        

        <div style="display: flex; gap: 8px;">
        ${this.isView !== "false" ?
            (
                `<a href="./visualizar" class="table__action-icon">
                <i class="fa-regular fa-eye"></i>
                </a>`
            )
        : ""}
        
        

        ${this.isUpdate !== "false" ?
            (
                `<a href="./actualizar" class="table__action-icon">
                <i class="fa-solid fa-pencil"></i>
                </a>`
            )
        : ""}
        
        ${this.isDelete !== "false" ?
            (
                `<a href="./eliminar" class="table__action-icon">
                    <i class="fa-regular fa-trash-can"></i>
                </a>`
            )
        : ""}


        </div>`
    }


    attributeChangedCallback(name, oldValue, newValue) {
        switch(name){
            case "is-delete": this.isDelete = newValue; break;
            case "is-view": this.isView = newValue; break;
            case "is-update": this.isUpdate = newValue; break;
        }
      }
}


window.customElements.define("nav-menu", Menu)
window.customElements.define("radios-status", RadiosStatus)
window.customElements.define("action-buttons", ActionButtons)