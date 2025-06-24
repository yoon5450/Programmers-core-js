class MyElement extends HTMLElement {
  count = 0;

  constructor() {
    super();
  }

  connectedCallback() {
    console.log("mount");
    this.render();
    this.attachEvent();
  }

  disconnectedCallback() {
    console.log("unmount");
  }

  static get observedAttributes() {
    return ["data-value"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
  }

  handleClick() {
    console.log("clicked");
    this.dataset.value = ++this.count
  }

  attachEvent() {
    this.addEventListener("click", this.handleClick);
  }

  render() {
    console.log();
    this.innerText = ++this.count;
  }
}

customElements.define("my-element", MyElement);

// const element = document.createElement('my-element');

// document.body.append(element);
