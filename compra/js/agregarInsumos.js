function $(selector) {
    const element = document.querySelector(selector)

    if (element) return element

    throw new Error("Elemento no encontrado")
}


const button = $(".form__add-button")
const inputsBox = $(".form__inputs-list")

button.addEventListener("click", () => {
    const newProduct = document.createElement("div")
    newProduct.classList = "form__insumo-box"

    newProduct.innerHTML = productHTML

    inputsBox.appendChild(newProduct)
})





const productHTML = `<div class="form__insumo-box">
<div class="form__input-box">
    <label class="form__label" for="menuCategoriaDesplegable">Insumo</label>
    <select id="menuCategoriaDesplegable" name="insumo1" class="form__input">
    <option value="Opcion 1">Aceite</option>
    <option value="Opcion 2">Botox</option>
    <option value="Opcion 3">Chocolate</option>
    </select>
</div>

<div class="form__input-box">
    <label class="form__label" for="cantidad">Cantidad :</label>
    <input id="cantidad" type="number" class="form__input" placeholder="Cantidad">
</div>
</div>

<div class="form__divider"></div>

`