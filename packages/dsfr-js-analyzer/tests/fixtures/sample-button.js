/**
 * Sample DSFR Button component for testing
 */

class DsfrButton {
  constructor(element) {
    this.element = element;
    this.isExpanded = false;
    
    this.init();
  }
  
  init() {
    this.element.addEventListener('click', this.handleClick.bind(this));
    this.element.addEventListener('focus', this.handleFocus.bind(this));
    this.element.addEventListener('blur', this.handleBlur.bind(this));
  }
  
  handleClick(event) {
    this.toggle();
  }
  
  handleFocus(event) {
    this.element.classList.add('fr-btn--focus');
    this.element.setAttribute('aria-expanded', 'true');
  }
  
  handleBlur(event) {
    this.element.classList.remove('fr-btn--focus');
  }
  
  toggle() {
    if (this.isExpanded) {
      this.collapse();
    } else {
      this.expand();
    }
  }
  
  expand() {
    this.isExpanded = true;
    this.element.setAttribute('aria-expanded', 'true');
    this.element.classList.add('fr-btn--expanded');
  }
  
  collapse() {
    this.isExpanded = false;
    this.element.setAttribute('aria-expanded', 'false');
    this.element.classList.remove('fr-btn--expanded');
  }
}

export default DsfrButton;
