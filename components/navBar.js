class NavBar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = this.COMPONENT_HTML;
    }

    get COMPONENT_HTML() {
        return `
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="navbar-brand" href="/index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Log Out</a>
            </li>    
        </ul>
    </div>
</nav>`
    }
}

customElements.define('nav-bar', NavBar);