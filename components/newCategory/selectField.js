class SelectField extends HTMLElement {
    static OPTION_HTML = '&#8227;<input class="borderless" maxlength="20" size="20" placeholder="Option"><br>';
    constructor() {
        super();
        this.innerHTML = this.COMPONENT_HTML;
    }

    get COMPONENT_HTML() {
        let html = `
<input class="borderless" maxlength="20" size="20" placeholder="Field">
<div>`;
        html += SelectField.OPTION_HTML;
        html += SelectField.OPTION_HTML;
        html += `</div>`;
        return html;
    }
}

customElements.define('select-field', SelectField);