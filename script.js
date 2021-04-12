
let toggle = document.querySelectorAll('.faq-toggle');

toggle.forEach(item => {
  item.addEventListener('click', e => {
    // console.log('test: it worked');
    item.parentNode.classList.toggle('active');
  })
})
