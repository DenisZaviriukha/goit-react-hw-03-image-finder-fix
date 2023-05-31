const basicLightbox = require('basiclightbox')

export const modalka = (imgModal) => {
  basicLightbox.create(`
    <img width="1000" src="${imgModal}">
  `).show();
    document.body.style.overflow = 'hidden';

  const mod = document.querySelector('.basicLightbox__placeholder');

    const modDad = document.querySelector('.basicLightbox')

  mod.addEventListener('click', (e) => {
      if (e.target === document.querySelector('.basicLightbox__placeholder')) {
        modDad.remove()
      }
  });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modDad.remove()
            document.body.style.overflow = '';

        }
    })
};