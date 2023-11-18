document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua tautan di dalam menu
    var menuLinks = document.querySelectorAll('.menu a');

    // Tambahkan event listener untuk setiap tautan
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Ambil target dari tautan yang diklik
            var targetId = this.getAttribute('href').substring(1);

            // Dapatkan elemen dengan ID yang sesuai
            var targetElement = document.getElementById(targetId);

            // Gulir halaman ke elemen target
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});