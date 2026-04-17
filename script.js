// Button Click Alert
document.querySelector('.btn-trial').addEventListener('click', function() {
    alert("Trial Started! Redirecting to WhatsApp...");
    // Aap yahan apna WhatsApp link bhi dal sakte hain
    // window.location.href = "https://wa.me/yournumber";
});

// Smooth Scroll Effect for Navbar
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("Navigating to section...");
    });
});