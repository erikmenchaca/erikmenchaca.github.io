async function loadHeaderAndNav() {
    try {
      const response = await fetch('assets/json/data.json');
      const data = await response.json();
      console.log('✅ Successfully loaded data.json:', data);
  
      // Load Header (Logo + Banner)
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
  
      console.log('✅ Header (Logo + Banner) inserted');
  
      // Load Navigation
      const navData = data.navigation;
      const nav = document.getElementById('nav-region');
  
      navData.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        if (link.target) {
          a.target = link.target;
        }
        nav.appendChild(a);
      });
  
      console.log('✅ Navigation links inserted');
  
    } catch (error) {
      console.error('❌ Error loading header or nav:', error);
    }
  }
  
  async function loadImages(section) {
    try {
      const response = await fetch('assets/json/data.json');
      const data = await response.json();
      const images = data[section];
  
      console.log(`✅ Successfully loaded ${section} images:`, images);
  
      const container = document.getElementById('editable-region');
      container.innerHTML = '';
  
      images.forEach(img => {
        const imageElement = document.createElement('img');
        imageElement.src = img.src;
        imageElement.alt = img.alt;
        imageElement.title = img.title;
        container.appendChild(imageElement);
      });
  
      console.log(`✅ ${section} images inserted into page`);
  
    } catch (error) {
      console.error(`❌ Error loading ${section} images:`, error);
    }
  }
  
  // Load everything once DOM is ready
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
      console.log('ℹ️ This is index.html or a non-image page.');
    }
  });
  