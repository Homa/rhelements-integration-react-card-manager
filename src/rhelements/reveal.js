
export function reveal() {
  console.log(`[reveal] elements ready, revealing the body`);
  window.document.body.removeAttribute("unresolved");
}

export function autoReveal() {
  // If Web Components are already ready, run the handler right away.  If they
  // are not yet ready, wait.
  //
  // see https://github.com/github/webcomponentsjs#webcomponents-loaderjs for
  // info about web component readiness events
  if (window.WebComponents && window.WebComponents.ready) {
    handleWebComponentsReady();
  } else {
    window.addEventListener("WebComponentsReady", handleWebComponentsReady);
  }
}

function handleWebComponentsReady() {
  console.log("[reveal] web components ready");
  reveal();
}
