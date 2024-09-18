document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginBox = document.querySelector('.login-box');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        removeErrorMessages();

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'aa' && password === 'aa') {
            window.location.href = 'admin.html'; 
        } else {
            // عرض رسالة خطأ واحدة فقط
            showErrorMessage('اسم المستخدم أو كلمة المرور غير صحيحة');
        }
    });

    function showErrorMessage(message) {
        // إنشاء عنصر رسالة الخطأ إذا لم يكن موجوداً
        let errorMessage = loginBox.querySelector('.error-message');
        if (!errorMessage) {
            errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            loginBox.insertBefore(errorMessage, form); // إدراج الرسالة قبل النموذج
        }
        errorMessage.textContent = message;
    }

    function removeErrorMessages() {
        const errorMessages = loginBox.querySelectorAll('.error-message');
        errorMessages.forEach(errorMessage => errorMessage.remove());
    }
});
