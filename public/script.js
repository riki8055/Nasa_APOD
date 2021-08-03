(function () {
    var burger = document.querySelector('.navbar-burger');
    var menu = document.querySelector('#' + burger.dataset.target);
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();

document.addEventListener('DOMContentLoaded', () => {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
        const $notification = $delete.parentNode;

        $delete.addEventListener('click', () => {
        $notification.parentNode.removeChild($notification);
        });
    });
});

// FOOTER ACTIONS
const credits = document.getElementById('credits');
const idk = document.getElementById('idk');

setInterval(switchIt, 6000);

function switchIt() {
    credits.classList.toggle('hide');
    idk.classList.toggle('hide');
}