/**
 * 9:16 Vertical Video Lightbox Modal & Instagram Reels Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('videoLightbox');
  const modalContainer = document.getElementById('lightboxContainer');
  const closeBtn = document.getElementById('lightboxClose');
  const videoCards = document.querySelectorAll('.phone-mockup-wrapper');

  if (!modal || !closeBtn) return;

  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const videoTitle = card.dataset.title || '短影音作品';
      const videoDesc = card.dataset.desc || '';
      const reelUrl = card.dataset.igReel || '';
      const reelId = card.dataset.reelId || '';

      if (reelId || reelUrl) {
        const fullIgUrl = reelUrl || `https://www.instagram.com/reel/${reelId}/`;
        const embedUrl = `https://www.instagram.com/reel/${reelId}/embed/`;

        modalContainer.innerHTML = `
          <div style="position: relative; width: 100%; height: 100%; display: flex; flex-direction: column; background: #1E1E1E; border-radius: 24px; overflow: hidden; border: 1px solid #2A2A2A;">
            <div style="padding: 1rem 1.25rem; background: #181818; border-bottom: 1px solid #2A2A2A; display: flex; align-items: center; justify-content: space-between;">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFDF00" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span style="font-size: 0.9rem; font-weight: 600; color: #F9F6F0;">Instagram Reel</span>
              </div>
              <a href="${fullIgUrl}" target="_blank" rel="noopener noreferrer" style="font-size: 0.8rem; color: #FFDF00; font-weight: 600;">
                開啟 IG 原片 ↗
              </a>
            </div>

            <div style="flex-grow: 1; position: relative; width: 100%; height: calc(100% - 110px); background: #121212; display: flex; align-items: center; justify-content: center;">
              <iframe 
                src="${embedUrl}" 
                style="width: 100%; height: 100%; border: none;" 
                allowtransparency="true" 
                allow="encrypted-media"
                title="${videoTitle}"
              ></iframe>
            </div>

            <div style="padding: 1rem 1.25rem; background: #1E1E1E; color: #F9F6F0;">
              <h4 style="font-size: 1.05rem; color: #F9F6F0; margin-bottom: 0.2rem; font-family: var(--font-serif);">${videoTitle}</h4>
              <p style="font-size: 0.825rem; color: #99958F; font-family: var(--font-sans);">${videoDesc}</p>
            </div>
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
