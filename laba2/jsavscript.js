function toggleMenu() {
    const menu = document.querySelector('.menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modalOverlay').style.display = 'flex';
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modalOverlay').style.display = 'none';
});

document.getElementById('okButton').addEventListener('click', function() {
    document.getElementById('modalOverlay').style.display = 'none';
});
