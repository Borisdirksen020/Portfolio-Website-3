const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalLink = document.getElementById('modalLink');
const modalGallery = document.getElementById('modalGallery');
const projectCards = document.querySelectorAll('.project-card');
const closeButtons = document.querySelectorAll('[data-modal-close]');

function openProjectModal(card) {
  const title = card.dataset.title;
  const link = card.dataset.link;
  const details = card.querySelector('.project-details');
  const description = details.querySelector('.project-description').innerHTML;
  const galleryImages = details.querySelectorAll('.project-gallery img');

  modalTitle.textContent = title;
  modalDescription.innerHTML = description;
  modalLink.href = link;
  modalLink.textContent = 'Bekijk project';

  modalGallery.innerHTML = '';
  galleryImages.forEach((image) => {
    const clone = image.cloneNode(true);
    clone.classList.add('modal-gallery-image');
    modalGallery.appendChild(clone);
  });

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeProjectModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

projectCards.forEach((card) => {
  card.addEventListener('click', () => openProjectModal(card));
});

closeButtons.forEach((button) => {
  button.addEventListener('click', closeProjectModal);
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeProjectModal();
  }
});
