import { autoReveal } from "./reveal.js";

class RHElement extends HTMLElement {
  static create(rhe) {
    window.customElements.define(rhe.tag, rhe);
  }

  static get RhTypes() {
    return {
      Container: "container",
      Content: "content",
      Pattern: "pattern"
    };
  }

  get rhType() {
    return this.getAttribute("rh-type");
  }

  set rhType(value) {
    this.setAttribute("rh-type", value);
  }

  constructor(tag, type, delayRender = false) {
    super();

    this.tag = tag;
    this._queue = [];
    this.template = document.createElement("template");

    this.attachShadow({ mode: "open" });

    if (type) {
      this._queueAction({
        type: "setProperty",
        data: {
          name: "rhType",
          value: type
        }
      });
    }

    if (!delayRender) {
      this.render();
    }
  }

  connectedCallback() {
    if (window.ShadyCSS) {
      window.ShadyCSS.styleElement(this);
    }

    if (this._queue.length) {
      this._processQueue();
    }
  }

  _queueAction(action) {
    this._queue.push(action);
  }

  _processQueue() {
    this._queue.forEach(action => {
      this[`_${action.type}`](action.data);
    });

    this._queue = [];
  }

  _setProperty({ name, value }) {
    this[name] = value;
  }

  render() {
    this.shadowRoot.innerHTML = null;
    this.template.innerHTML = this.html;

    if (window.ShadyCSS) {
      window.ShadyCSS.prepareTemplate(this.template, this.tag);
    }

    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }
}

autoReveal();

export default RHElement;
//# sourceMappingURL=rhelement.js.map
