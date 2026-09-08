/**
 * 9:16 Vertical Video Lightbox Modal & Showcase Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('videoLightbox');
  const modalContainer = document.getElementById('lightboxContainer');
  const closeBtn = document.getElementById('lightboxClose');
  const videoCards = document.querySelectorAll('.phone-mockup-wrapper');

  if (!modal || !closeBtn) return;

  const videoDriveFolder = 'https://drive.google.com/drive/folders/1Cp1mPFGWDoOQ0RcS4aXmZfCXoScC1L16?usp=drive_link';

  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const videoTitle = card.dataset.title || '爆款短影音作品';
      const videoDesc = card.dataset.desc || '';
      const videoSrc = card.dataset.videoSrc || '';

      if (videoSrc) {
        modalContainer.innerHTML = `
          <div style="position: relative; width: 100%; height: 100%; display: flex; flex-direction: column; background: #000;">
            <video src="${videoSrc}" controls autoplay style="width: 100%; height: 100%; object-fit: contain;"></video>
            <div style="position: absolute; bottom: 0; left: 0; width: 100%; padding: 1.5rem; background: linear-gradient(to top, rgba(0,0,0,0.9), transparent); color: #FFF;">
              <h4 style="font-size: 1.1rem; color: #FFF; margin-bottom: 0.25rem;">${videoTitle}</h4>
              <p style="font-size: 0.85rem; color: #DDD;">${videoDesc}</p>
            </div>
          </div>
        `;
      } else {
        // Direct link to Google Drive folder preview
        modalContainer.innerHTML = `
          <div style="position: relative; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; background: #1C1B1A; color: #FFF; text-align: center;">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--accent-terracotta); display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
            <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem; color: #FFF;">${videoTitle}</h3>
            <p style="font-size: 0.925rem; color: #BBB; margin-bottom: 2rem; max-width: 320px;">${videoDesc}</p>
            <a href="${videoDriveFolder}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 0.9375rem; padding: 0.8rem 1.8rem;">
              前往 Google Drive 觀看完整影片原檔 ↗
            </a>
          </div>
        `;
      }

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    modalContainer.innerHTML = '';
  };

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});
