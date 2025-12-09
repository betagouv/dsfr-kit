/**
 * Sample JavaScript file for behavioral analysis testing
 */

class TestComponent {
  constructor() {
    this.isOpen = false;
    this.state = 'idle';

    this.button = document.querySelector('.button');
    this.setupListeners();
  }

  setupListeners() {
    // Event listener detection
    this.button.addEventListener('click', this.handleClick.bind(this));

    // Inline handler (although not recommended, it's a pattern)
    this.button.onfocus = () => {
      console.log('focused');
    };
  }

  handleClick(event) {
    // DOM manipulation
    this.button.classList.toggle('active');
    this.button.setAttribute('aria-expanded', 'true');
    this.button.textContent = 'Clicked';

    // State transition
    if (this.state === 'idle') {
      this.state = 'active';
    } else {
      this.state = 'idle';
    }

    if (this.isOpen) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }
  }

  cleanup() {
    // Remove listener detection
    this.button.removeEventListener('click', this.handleClick);
  }
}
