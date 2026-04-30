function handleJoin() {
    const email = document.getElementById('email-input').value.trim();
    const btn = document.querySelector('.btn-primary');
    
    if (!email || !email.includes('@')) {
        alert("Mohon masukkan email yang valid.");
        return;
    }

    btn.innerHTML = 'Processing...';
    btn.disabled = true;

    // Simulasi
    setTimeout(() => {
        // success UI seperti yang sudah ada
        // ...
        btn.innerHTML = 'Submit & Join';
        btn.disabled = false;
    }, 1200);
}
