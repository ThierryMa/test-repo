document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href]').forEach(function(link) {
    link.setAttribute('target', '_blank');
  });
});
