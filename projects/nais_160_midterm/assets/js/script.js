async function loadHeaderAndNav() {
  try {
    const response = await fetch('assets/json/data.json');
    const data = await response.json();
    console.log('✅ Successfully loaded data.json:', data);

    // Load Header
    const headerData = data.header;
    const header = document.getElementById('header-region');

    const logo = document.createElement('img');
    logo.src = headerData.logo.src;
    logo.alt = headerData.logo.alt;
    logo.title = headerData.logo.title;
    logo.id = 'logo';

    const banner = document.createElement('img');
    banner.src = headerData.banner.src;
    banner.alt = headerData.banner.alt;
    banner.title = headerData.banner.title;
    banner.id = 'banner';

    header.appendChild(logo);
    header.appendChild(banner);

    console.log('✅ Header inserted');

    // Load Navigation with rollover buttons
    const navData = data.navigation;
    const nav = document.getElementById('nav-region');

    navData.forEach(link => {
      const a = document.createElement('a');
      a.href = link.href;
      if (link.target) {
        a.target = link.target;
      }

      if (link.original && link.rollover) {
        const img = document.createElement('img');
        img.src = link.original;
        img.alt = link.alt;
        img.title = link.title;
        img.addEventListener('mouseover', () => {
          img.src = link.rollover;
        });
        img.addEventListener('mouseout', () => {
          img.src = link.original;
        });
        a.appendChild(img);
      } else {
        // Home text link
        a.textContent = link.title;
        a.style.color = 'white';
        a.style.margin = '0 15px';
        a.style.fontWeight = 'bold';
      }

      nav.appendChild(a);
    });

    console.log('✅ Navigation loaded');
  } catch (error) {
    console.error('❌ Error loading header or nav:', error);
  }
}

async function loadImages(section) {
  try {
    const response = await fetch('../assets/json/data.json');
    const data = await response.json();
    const images = data[section];

    console.log(`✅ Successfully loaded ${section} images:`, images);

    const main = document.getElementById('editable-region');
    main.innerHTML = '';

    const grid = document.createElement('div');
    grid.className = 'grid-container';

    images.forEach(img => {
      const imageElement = document.createElement('img');
      imageElement.src = img.src;
      imageElement.alt = img.alt;
      imageElement.title = img.title;
      grid.appendChild(imageElement);
    });

    main.appendChild(grid);
    console.log(`✅ ${section} images inserted into grid`);
  } catch (error) {
    console.error(`❌ Error loading ${section} images:`, error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadHeaderAndNav();

  if (window.location.pathname.includes('flowers.html')) {
    loadImages('flowers');
  } else if (window.location.pathname.includes('travels.html')) {
    loadImages('travels');
  } else if (window.location.pathname.includes('foods.html')) {
    loadImages('foods');
  } else if (window.location.pathname.includes('gallery.html')) {
    loadImages('gallery');
  } else {
    console.log('ℹ️ This is index.html (no image loading needed)');
  }
});
