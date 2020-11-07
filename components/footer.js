

class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = this.COMPONENT_HTML;
    }

    get COMPONENT_HTML() {
        return `
<span id="footer-credit">Website created by Zachary Gallafent. The Github is <a href="https://github.com/AdmiralPsy/creativeProject">here</a>.</span>
<span>The pages on this website are the <a href="/html/login.html">login</a> page, the <a href="/html/home.html">home</a> page, the <a href="/html/newCategory.html">new category</a> page, and the <a href="/html/contact.html">contact</a> page.</span>`
    }
}

customElements.define('assignment-footer', Footer);