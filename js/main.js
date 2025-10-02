
document.querySelector('[data-link]').addEventListener('click', function() {
  open(atob(this.dataset.link), this.target)
}, false);
