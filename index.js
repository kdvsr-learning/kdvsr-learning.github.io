import { ChevronDownIcon, MenuIcon, HelpIcon } from './icons.js';
import { contentMap, menuItems } from './app-data.js';

// --- DOM Element Selection ---
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const menuContainer = document.getElementById('menu-container');
const pageTitle = document.getElementById('page-title');
const contentIframe = document.getElementById('content-iframe');
const helpLink = document.getElementById('help-link');

// --- State ---
let isSidebarOpen = window.innerWidth >= 768; // Open on desktop by default
let activeMenuItemElement = null;

// --- UI Update Functions ---

const loadContentIntoIframe = async (path) => {
  const isHtml = path.endsWith('.html');
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    if (isHtml) {
      contentIframe.src = path;
    }
  } catch (error) {
    console.warn(`Could not fetch real file '${path}'. Using fallback content from map. Error: ${error.message}`);
  }
};

const setSidebarState = (isOpen) => {
  isSidebarOpen = isOpen;
  if (isOpen) {
    sidebar.classList.remove('-translate-x-full');
    if (window.innerWidth < 768) {
      sidebarOverlay.classList.remove('hidden');
    }
  } else {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
  }
};

const handleMenuItemClick = async (item, element) => {
  if (item.contentPath) {
    pageTitle.textContent = item.label;
    contentIframe.src = 'about:blank';

    if (activeMenuItemElement) {
      activeMenuItemElement.classList.remove('bg-blue-600', 'text-white');
      activeMenuItemElement.classList.add('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
    }
    element.classList.add('bg-blue-600', 'text-white');
    element.classList.remove('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
    activeMenuItemElement = element;

    if (window.innerWidth < 768) {
      setSidebarState(false);
    }
    await loadContentIntoIframe(item.contentPath);
  }
};

// --- Rendering ---
const renderMenu = () => {
  menuContainer.innerHTML = ''; // Clear existing menu
  menuItems.forEach(item => {
    const li = document.createElement('li');

    const itemDiv = document.createElement('div');
    itemDiv.className = 'flex items-center justify-between p-2 my-1 rounded-md cursor-pointer transition-colors duration-200 text-gray-300 hover:bg-gray-700 hover:text-white';
    itemDiv.role = 'button';
    itemDiv.setAttribute('aria-expanded', 'false');

    itemDiv.innerHTML = `
            <div class="flex items-center space-x-3">
                ${item.icon}
                <span>${item.label}</span>
            </div>
            ${item.children ? ChevronDownIcon : ''}
        `;

    li.appendChild(itemDiv);

    if (item.children) {
      const subMenuUl = document.createElement('ul');
      subMenuUl.className = 'submenu pl-6 mt-1 border-l border-gray-600';

      item.children.forEach(child => {
        const childLi = document.createElement('li');

        const childItemDiv = document.createElement('div');
        childItemDiv.className = 'flex items-center justify-between p-2 my-1 rounded-md cursor-pointer transition-colors duration-200 text-gray-300 hover:bg-gray-700 hover:text-white';
        childItemDiv.role = 'button';
        childItemDiv.setAttribute('aria-selected', 'false');

        childItemDiv.innerHTML = `
                    <div class="flex items-center space-x-3">
                        ${child.icon}
                        <span>${child.label}</span>
                    </div>
                `;

        childItemDiv.addEventListener('click', (e) => {
          e.stopPropagation();
          childItemDiv.setAttribute('aria-selected', 'true');
          if (activeMenuItemElement) {
            activeMenuItemElement.setAttribute('aria-selected', 'false');
          }
          handleMenuItemClick(child, childItemDiv);
        });
        childLi.appendChild(childItemDiv);
        subMenuUl.appendChild(childLi);
      });

      li.appendChild(subMenuUl);

      itemDiv.addEventListener('click', () => {
        const isOpening = !subMenuUl.classList.contains('open');
        subMenuUl.classList.toggle('open');
        itemDiv.setAttribute('aria-expanded', isOpening);
        const chevron = itemDiv.querySelector('.chevron-icon');
        if (chevron) {
          chevron.classList.toggle('open');
        }
      });

    } else {
      itemDiv.addEventListener('click', () => handleMenuItemClick(item, itemDiv));
    }

    menuContainer.appendChild(li);
  });
};

// --- Initialization ---
const init = () => {
  mobileMenuButton.innerHTML = MenuIcon;
  helpLink.innerHTML = `${HelpIcon}<span>Help</span>`;

  mobileMenuButton.addEventListener('click', () => setSidebarState(!isSidebarOpen));
  sidebarOverlay.addEventListener('click', () => setSidebarState(false));

  helpLink.addEventListener('click', async (e) => {
    e.preventDefault();

    if (activeMenuItemElement) {
      activeMenuItemElement.classList.remove('bg-blue-600', 'text-white');
      activeMenuItemElement.classList.add('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
      activeMenuItemElement.setAttribute('aria-selected', 'false');
      activeMenuItemElement = null;
    }

    pageTitle.textContent = 'Help';
    contentIframe.src = 'about:blank';

    if (window.innerWidth < 768) {
      setSidebarState(false);
    }

    await loadContentIntoIframe('/HELP.html');
  });


  renderMenu();


  // Initial sidebar state
  setSidebarState(isSidebarOpen);
};

document.addEventListener('DOMContentLoaded', init);