
document.querySelector('[data-link]').addEventListener('click', function(event) {
  event.preventDefault();
  open(atob(this.dataset.link), this.target)
}, false);
