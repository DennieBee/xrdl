class Transform extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {}
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

  connectedCallback() {}
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

  connectedCallback() {}
  disconnectedCallback() {}
  attributeChangedCallback(name, oldValue, newValue) {}
  adoptedCallback() {}

  static get observedAttributes() {
    return [];
  }
}

customElements.define('transform', Transform);
customElements.define('panel', Transform);
customElements.define('model', Transform);
