



let figure = `        <figure>
          <img src="./assets/visual.png" alt="" />
          <figcaption>히말라야 정상의 모습</figcaption>
        </figure>`

class Card extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode:'open'});


    this.state = {
      showImage: this.getAttribute('showImage') || true,
      title: this.getAttribute('title') || 'Card title'
    }

    this.render();

  }

  render(){
    const {showImage, title} = this.state;

    this.shadowRoot.innerHTML = `
    <style>@import url('./components/Card/Card.css');</style>
      <div class="card">
        ${showImage === 'true' ? figure : '' }
        <h2>${title}</h2>
        <p>
          description....
        </p>
        <button type="button">Button</button>
      </div>
    `
  }
}


customElements.define('c-card',Card);