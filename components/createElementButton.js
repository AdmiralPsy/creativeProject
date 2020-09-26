class CreateElementButton extends HTMLElement {
    static TITLE = 'title';
    static TARGET = 'target';
    static ELEMENT_TAG = 'element-tag';

    constructor() {
        super();
        this.innerHTML = this.COMPONENT_HTML;
        this.addEventListener('click', e => this.createElement())
    }

    createElement() {
        let elementTag = this.getAttribute(CreateElementButton.ELEMENT_TAG);
        let elementHtml = '<' + elementTag + '></' + elementTag + '>';
        let element = document.querySelector(this.getAttribute(CreateElementButton.TARGET));
        element.innerHTML += elementHtml;
    }

    get COMPONENT_HTML() {
        let html = `
        <button class="btn btn-primary">/* Button Title */</button>`;
        html = html.replace(
            '/* Button Title */', this.getAttribute(CreateElementButton.TITLE));
        return html;
    }
}

customElements.define('create-element-button', CreateElementButton);