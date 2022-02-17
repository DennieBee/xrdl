class Transform extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = "TRANSFORM";
  }

  disconnectedCallback() {}
  attributeChangedCallback(name, oldValue, newValue) {}
  adoptedCallback() {}

  static get observedAttributes() {
    return [];
  }
}

class Panel extends Transform {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = "PANEL";
  }

  disconnectedCallback() {}
  attributeChangedCallback(name, oldValue, newValue) {}
  adoptedCallback() {}

  static get observedAttributes() {
    return [];
  }
}

class Model extends Transform {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = "MODEL";
  }

  disconnectedCallback() {}
  attributeChangedCallback(name, oldValue, newValue) {}
  adoptedCallback() {}

  static get observedAttributes() {
    return [];
  }
}

customElements.define('xrdl-transform', Transform);
customElements.define('xrdl-panel', Panel);
customElements.define('xrdl-model', Model);
