document.addEventListener('DOMContentLoaded', () => {
    const show = document.querySelector('#pass-controller');
    const pass = document.querySelector('#password');
    show.addEventListener('click', () => {
        pass.type = (pass.type === 'password') ? 'text' : 'password';
        show.innerHTML = (pass.type === 'password') ? 'Show' : 'Hide';
    });
});