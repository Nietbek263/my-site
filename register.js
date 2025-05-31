
document.querySelectorAll('input[name="formType"]').forEach(radio => {
    radio.addEventListener('change', function() {
        document.getElementById('loginForm').classList.toggle('active', this.value === 'login');
        document.getElementById('registerForm').classList.toggle('active', this.value === 'register');
    });
});

// Kirish (login) formasi uchun hodisa tinglovchisi
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Formaning standart yuborilishini oldini oladi
    alert('Tizimga kirish muvaffaqiyatli!'); // Foydalanuvchiga xabar berish

    // Foydalanuvchini index sahifasiga yo'naltirish
    window.location.href = 'index.html';
});

// Ro'yxatdan o'tish (register) formasi uchun hodisa tinglovchisi
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Ro‘yxatdan o‘tish muvaffaqiyatli!');

    // Ro'yxatdan o'tgandan so'ng foydalanuvchini index sahifasiga yo'naltirish
    window.location.href = 'index.html';
});