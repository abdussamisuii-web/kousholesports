document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('regForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Brazilian freestyle alert style
        alert("BOOYAH! Squad registered. Get ready for the slaughter.");
        
        form.reset();
    });

    // Smooth scroll for the "Join Now" button
    document.getElementById('mainJoinBtn').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#register').scrollIntoView({
            behavior: 'smooth'
        });
    });
});