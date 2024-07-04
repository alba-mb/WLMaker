document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const template = document.getElementById('template');

    gallery.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            const img = event.target.cloneNode();
            template.appendChild(img);
        }
    });

    template.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            template.removeChild(event.target)
            
        }
    });
});
