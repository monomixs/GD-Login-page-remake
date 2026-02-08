// script.js

const loginBtn = document.getElementById('login');
const usernameInput = document.querySelector('input[placeholder="username"]');

loginBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();

    if (username !== "") {
        // Save the username to local storage
        localStorage.setItem('gdUsername', username);
        
        // Redirect to home.html
        window.location.href = "/home.html";
    } else {
        alert("Please enter a username!");
    }
});

// --- Keep existing Modal logic below ---
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modalOverlay');

if(openModal) {
    openModal.onclick = () => modal.style.display = 'block';
    closeModal.onclick = () => modal.style.display = 'none';

}



