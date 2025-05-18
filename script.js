document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.project-image');

    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.trasition = 'transform 1s ease, filter 1.2s ease';
            image.style.transform = 'scale(1.1)';
            image.style.filter = 'brightness (50%)';
        });

        //retorna ao estado original ao remover o mouse
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
            image.style.filter = 'brightness (0%)';
        });

        //efeito fade-in ao carregar a página
        image.style.opacity = '0';
        image.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => {
            image.style.opacity = '3';
        }, 200);

            const button = document.getElementById('sobre-mim');
    button.addEventListener('click', function() {
        alert('Você clicou no botão SOBRE MIM!');
    });
        //efeito fade-in ao carregar a página
        image.style.opacity = '0';
        image.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => {
            image.style.opacity = '3';
        }, 200);
    });

    document.querySelectorAll('.project-image, .eder-image').forEach(img => {
        setTimeout(() => img.classList.add('visible'), 300);
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 30) header.classList.add('sticky');
    else header.classList.remove('sticky');
});

