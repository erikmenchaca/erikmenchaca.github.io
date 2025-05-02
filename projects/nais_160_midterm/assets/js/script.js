async function loadHeaderAndNav() {
  try {
    // Detect if we are inside contents/ or root
    const basePath = window.location.pathname.includes('contents') ? '../' : '';

    const response = await fetch(basePath + 'assets/json/data.json');
    const data = await response.json();
    console.log('✅ Successfully loaded data.json:', data);

    // Load Header
    const headerData = data.header;
    const header = document.getElementById('header-region');

    const logo = document.createElement('img');
    logo.src = basePath + headerData.logo.src;
    logo.alt = headerData.logo.alt;
    logo.title = headerData.logo.title;
    logo.id = 'logo';

    const banner = document.createElement('img');
    banner.src = basePath + headerData.banner.src;
    banner.alt = headerData.banner.alt;
    banner.title = headerData.banner.title;
    banner.id = 'banner';

    header.appendChild(logo);
    header.appendChild(banner);

    console.log('✅ Header inserted');

    // Load Navigation
    const navData = data.navigation;
    const nav = document.getElementById('nav-region');

    navData.forEach(link => {
      const a = document.createElement('a');
      a.href = basePath + link.href;
      if (link.target) {
        a.target = link.target;
      }

      if (link.original && link.rollover) {
        const img = document.createElement('img');
        img.src = basePath + link.original;
        img.alt = link.alt;
        img.title = link.title;

        img.addEventListener('mouseover', () => {
          img.src = basePath + link.rollover;
        });
        img.addEventListener('mouseout', () => {
          img.src = basePath + link.original;
        });

        a.appendChild(img);
      } else {
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
     const basePath = window.location.pathname.includes('contents') ? '../' : '';

     const response = await fetch(basePath + 'assets/json/data.json');
     const data = await response.json();
     const images = data[section];

     console.log(`✅ Successfully loaded ${section} images:`, images);

     const main = document.getElementById('editable-region');
     main.innerHTML = '';

     // First container: 8 images
     const gridFirst8 = document.createElement('div');
     gridFirst8.className = 'grid-4x2';

     images.slice(0, 8).forEach(img => {
       const imageElement = document.createElement('img');
       imageElement.src = basePath + img.src;
       imageElement.alt = img.alt;
       imageElement.title = img.title;
       gridFirst8.appendChild(imageElement);
     });

     // Second container: 2 images
     const gridLast2 = document.createElement('div');
     gridLast2.className = 'grid-2centered';

     images.slice(8, 10).forEach(img => {
       const imageElement = document.createElement('img');
       imageElement.src = basePath + img.src;
       imageElement.alt = img.alt;
       imageElement.title = img.title;
       gridLast2.appendChild(imageElement);
     });

     // Add both containers to main
     main.appendChild(gridFirst8);
     main.appendChild(gridLast2);

     console.log(`✅ ${section} images inserted into correct layout`);
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
    console.log('ℹ️ This is index.html (no images loading)');
  }
});
