class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class="text-center bg-black bg-gradient text-white py-4">
            <p>
                <span class="mx-2">&copy; 2024 Acelin German Shepherds.</span>|
                <span class="mx-2">(360) 539-8981</span>|
                <span class="mx-2">
                    <a style="color: white" href="mailto:angiepol@aol.com">angiepol@aol.com</a></span>
            <p>
        </footer>`;
  }
}

customElements.define("footer-component", FooterComponent);
