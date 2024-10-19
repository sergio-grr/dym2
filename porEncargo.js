window.addEventListener('scroll', function () {
    var footer = document.querySelector('footer');
    var scrollPosition = window.scrollY + window.innerHeight;
    var documentHeight = document.body.offsetHeight;

    if (scrollPosition >= documentHeight - 50) {
        footer.classList.add('show');
    }
});
