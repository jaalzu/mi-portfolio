let menu = document.getElementById('nav-menu');
let navList = document.getElementById('nav-list');

menu.addEventListener('click',() => {
    navList.classList.toggle('show-menu');
})





const copyToClipboard = element => {
    const textToCopy = element.innerHTML;

    const el = document.createElement("textarea");
    el.value = textToCopy;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    const tooltip = document.getElementById('tooltip');
    tooltip.innerText = '¡Copiado!';
    setTimeout(() => {
        tooltip.innerText = 'Haz click para copiar'; // Volver al texto original después de un tiempo
    }, 2000);
}

function showTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';
}

function resetTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
}
