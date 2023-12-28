class NavComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-md bg-dark-subtle bg-gradient">
        <div class="container-fluid px-5">
            <a class="navbar-brand" href="/">Acelin German Shepherds</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav px-4">
                    <li class="nav-item p-2">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item p-2">
                        <a class="nav-link" href="/about.html">About</a>
                    </li>
                    <li class="nav-item p-2 dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dogs for Sale
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/puppies.html">Puppies</a></li>
                            <li><a class="dropdown-item" href="/studs.html">Studs</a></li>
                            <li><a class="dropdown-item" href="/dams.html">Dams</a></li>
                            <li><a class="dropdown-item" href="/adults.html">Adult Dogs</a></li>
                        </ul>
                    </li>
                    <li class="nav-item p-2">
                        <a class="nav-link" href="/contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;
  }
}

customElements.define("nav-component", NavComponent);