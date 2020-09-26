

class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = this.COMPONENT_HTML;
    }

    get COMPONENT_HTML() {
        return `
            <span id="footer-credit">Website created by Spencer Magnusson and Zachary Gallafent. The Github is <a href="https://github.com/AdmiralPsy/creativeProject">here</a>.</span>
        `
    }
}

customElements.define('assignment-footer', Footer);