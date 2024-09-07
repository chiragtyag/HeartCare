function bookAppointment() {
    window.location.href = 'contact.html'; 
}

document.getElementById('scroll-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


window.addEventListener('scroll', () => {
    const scrollTopButton = document.getElementById('scroll-to-top');
    if (window.scrollY > 200) { 
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});



