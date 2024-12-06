document.querySelector('pre').addEventListener('click', function() {
  const codeContent = this.innerText;
  navigator.clipboard.writeText(codeContent).then(function() {
    alert('Code copied to clipboard!');
  }, function(err) {
    console.error('Could not copy text: ', err);
  });
});
