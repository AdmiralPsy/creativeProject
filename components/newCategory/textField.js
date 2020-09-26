class TextField extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = this.COMPONENT_HTML;
    }

    get COMPONENT_HTML() {
        return `
<input class="borderless" maxlength="20" size="20" placeholder="Field">
<div>&#8227; Text field</div>`;
    }
}

customElements.define('text-field', TextField);