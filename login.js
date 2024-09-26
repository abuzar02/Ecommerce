document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Static admin credentials
    const adminEmail = 'admin@login.com';
    const adminPassword = 'admin123';

    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    // Check if login matches admin credentials
    if (emailInput === adminEmail && passwordInput === adminPassword) {
        alert('Admin login successful');
        // Redirect to admin dashboard (replace with actual dashboard page)
        window.location.href = 'admin-dashboard.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid email or password.';
    }
});