import { FolderIcon, MusicIcon } from './icons.js';

// --- Menu Structure Definition ---
export const menuItems = [
  {
    id: 'saralis',
    label: 'Sarali Varasa',
    icon: FolderIcon,
    children: [
      {
        id: 'sarali-varasa-1',
        label: 'Sarali Varasa',
        icon: MusicIcon,
        contentPath: '/content/saralis/sarali-varasa.html'
      }
    ]
  },
  {
    id: 'jantis',
    label: 'Janti Varasa',
    icon: FolderIcon,
    children: [
      {
        id: 'janti-varasa-1',
        label: 'Janti Varasa',
        icon: MusicIcon,
        contentPath: '/content/jantis/janti-varasa.html'
      }
    ]
  },
  {
    id: 'dhatus',
    label: 'Dhatu Varasa',
    icon: FolderIcon,
    children: [
      {
        id: 'dhatu-varasa-1',
        label: 'Dhatu Varasa',
        icon: MusicIcon,
        contentPath: '/content/dhatus/dhatu-varasa.html'
      }
    ]
  },
  {
    id: 'alankarams',
    label: 'Alankaarams',
    icon: FolderIcon,
    children: [
      {
        id: 'eka-1',
        label: 'Eka Talam',
        icon: MusicIcon,
        contentPath: '/content/alankarams/eka-talam.html'
      },
      {
        id: 'rupaka-1',
        label: 'Rupaka Talam',
        icon: MusicIcon,
        contentPath: '/content/alankarams/rupaka-talam.html'
      },
      {
        id: 'triputa-1',
        label: 'Triputa Talam',
        icon: MusicIcon,
        contentPath: '/content/alankarams/triputa-talam.html'
      },
      {
        id: 'matya-1',
        label: 'Matya Talam',
        icon: MusicIcon,
        contentPath: '/content/alankarams/matya-talam.html'
      },
      {
        id: 'dhruva-1',
        label: 'Dhruva Talam',
        icon: MusicIcon,
        contentPath: '/content/alankarams/dhruva-talam.html'
      },
      {
        id: 'jampe-1',
        label: 'Jampe Talam',
        icon: MusicIcon,
        contentPath: '/content/alankarams/jampe-talam.html'
      },
      {
        id: 'ata-1',
        label: 'Ata Talam',
        icon: MusicIcon,
        contentPath: '/content/alankarams/ata-talam.html'
      }
    ]
  },
  {
    id: 'geetams',
    label: 'Geetams',
    icon: FolderIcon,
    children: [
      {
        id: 'geetam-1',
        label: '01. Sri Gananaadha',
        icon: MusicIcon,
        contentPath: '/content/geetams/01-sri-gananaadha.html'
      },
      {
        id: 'geetam-2',
        label: '02. Kunda Gowra',
        icon: MusicIcon,
        contentPath: '/content/geetams/02-kunda-gowra.html'
      },
      {
        id: 'geetam-3',
        label: '03. Keraya Neeranu',
        icon: MusicIcon,
        contentPath: '/content/geetams/03-keraya-neeranu.html'
      },
      {
        id: 'geetam-4',
        label: '04. Padumanaabha',
        icon: MusicIcon,
        contentPath: '/content/geetams/04-padumanaabha.html'
      },
      {
        id: 'geetam-5',
        label: '05. Vara Veena',
        icon: MusicIcon,
        contentPath: '/content/geetams/05-vara-veena.html'
      },
      {
        id: 'geetam-6',
        label: '06. Vaani Veena',
        icon: MusicIcon,
        contentPath: '/content/geetams/06-vaani-veena.html'
      },
      {
        id: 'geetam-7',
        label: '07. Kamalajadala',
        icon: MusicIcon,
        contentPath: '/content/geetams/07-kamalajadala.html'
      },
      {
        id: 'geetam-8',
        label: '08. Sree Lola',
        icon: MusicIcon,
        contentPath: '/content/geetams/08-sree-lola.html'
      },
      {
        id: 'geetam-9',
        label: '09. Mandhara Dhaare',
        icon: MusicIcon,
        contentPath: '/content/geetams/09-mandhara-dhaare.html'
      }
    ]
  },
  {
    id: 'swarajathis',
    label: 'Swarajathis',
    icon: FolderIcon,
    children: [
      {
        id: 'swarajathi-1',
        label: '01. Ra ra venu',
        icon: MusicIcon,
        contentPath: '/content/swarajathis/01-bilahari-swarajathi.html'
      },
      {
        id: 'swarajathi-2',
        label: '02. Kalyani',
        icon: MusicIcon,
        contentPath: '/content/swarajathis/02-kalyani-swarajathi.html'
      },
      {
        id: 'swarajathi-3',
        label: '03. Hamsadhwani',
        icon: MusicIcon,
        contentPath: '/content/swarajathis/03-hamsadhwani-swarajathi.html'
      },
      {
        id: 'swarajathi-4',
        label: '04. Jhinjhoti',
        icon: MusicIcon,
        contentPath: '/content/swarajathis/04-jhinjhoti-swarajathi.html'
      }
    ]
  },
  {
    id: 'varnams',
    label: 'Varnams',
    icon: FolderIcon,
    children: [
      {
        id: '01-mohana-varnam',
        label: '01. Mohana - Ninnu Kori',
        icon: MusicIcon,
        contentPath: '/content/varnams/01-mohana-ninnu-kori.html'
      },
      {
        id: '02-shankarabharanam-saami-ninne',
        label: '02. Shankarabharanam - Saami Ninne',
        icon: MusicIcon,
        contentPath: '/content/varnams/02-shankarabharanam-saami-ninne.html'
      },
      {
        id: 'varnam-hamsadhwani-jalajaksha',
        label: '03. Hamsadhwani - Jalajaksha',
        icon: MusicIcon,
        contentPath: '/content/varnams/03-hamsadhwani-jalajaksha.html'
      },
      {
        id: '04-shree-saami-ninne',
        label: '04. Shree - Saami Ninne',
        icon: MusicIcon,
        contentPath: '/content/varnams/04-shree-saami-ninne.html'
      },
      {
        id: '05-kalyani-vanajakshi',
        label: '05. Kalyani - Vanajakshi',
        icon: MusicIcon,
        contentPath: '/content/varnams/05-kalyani-vanajakshi.html'
      },
      {
        id: '06-thodi-era-naa-pai',
        label: '06. Thodi - Era naa pai',
        icon: MusicIcon,
        contentPath: '/content/varnams/06-thodi-era-naa-pai.html'
      },
      {
        id: '07-navaragamalika',
        label: '07. Navaragamalika',
        icon: MusicIcon,
        contentPath: '/content/varnams/07-navaragamalika.html'
      },
      {
        id: '08-kambhoji',
        label: '08. Kambhoji',
        icon: MusicIcon,
        contentPath: '/content/varnams/08-kambhoji.html'
      }
    ]
  },
  {
    id: 'kritis',
    label: 'Kritis',
    icon: FolderIcon,
    children: [
      {
        id: '01-krithi-vighnarajasree',
        label: 'Vighnaraja Sree',
        icon: MusicIcon,
        contentPath: '/content/krithis/01-krithi-vighnarajasree.html'
      }
    ]
  },
];


// --- Fallback Content for Development ---
const generateSimulatedContent = (title, path) => {
    return `--- SIMULATED CONTENT for ${title} ---\n\nThis is the markdown content for ${title}, loaded from '${path}'.\n\nThis content is provided as a fallback because the actual file could not be fetched from the server.\n\n## Example Code\n\n\`\`\`javascript\n// Fetched from a simulated external source\nconsole.log("Hello from ${title}!");\n\`\`\`\n`;
};

export const contentMap = {
    '/content/theory/scales.md': generateSimulatedContent('Scales', '/content/theory/scales.md'),
    '/content/theory/chords.md': generateSimulatedContent('Chords', '/content/theory/chords.md'),
    '/content/theory/harmony.md': generateSimulatedContent('Harmony', '/content/theory/harmony.md'),
    '/content/history/baroque.md': generateSimulatedContent('Baroque Period', '/content/history/baroque.md'),
    '/content/history/classical.md': generateSimulatedContent('Classical Period', '/content/history/classical.md'),
    '/content/history/romantic.md': generateSimulatedContent('Romantic Period', '/content/history/romantic.md'),
    '/content/composers/bach.md': generateSimulatedContent('Bach', '/content/composers/bach.md'),
    '/content/composers/mozart.md': generateSimulatedContent('Mozart', '/content/composers/mozart.md'),
    '/content/composers/beethoven.md': generateSimulatedContent('Beethoven', '/content/composers/beethoven.md'),
    '/HELP.html': `<div class="prose prose-invert max-w-none text-gray-800 dark:text-gray-200 p-2">
    <h1 class="text-3xl font-bold mb-4 border-b pb-2 border-gray-300 dark:border-gray-600">How to Add Menu and Submenu Items (Fallback)</h1>
    <p class="mb-4">This guide explains how to modify the application to include new navigation items and their corresponding content.</p>
    <h2 class="text-2xl font-semibold mt-6 mb-3">File Structure Overview</h2>
    <p class="mb-4">The key files you'll be working with are:</p>
    <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li><strong>app-data.js:</strong> Defines the structure of the navigation menu.</li>
        <li><strong>content/:</strong> This directory is where the markdown files (.md) for each page's content should be stored.</li>
        <li><strong>icons.js:</strong> Contains the SVG icons used in the menu.</li>
    </ul>
</div>`
};

// Overwrite specific entries with custom content for demonstration
contentMap['/content/theory/scales.md'] = `# Scales (Fallback)\n\nThis is the specific fallback content for Scales.\n\nMajor scales follow the pattern: W-W-H-W-W-W-H.`;
contentMap['/content/history/baroque.md'] = `# The Baroque Period (Fallback)\n\nThe Baroque period of Western classical music is generally defined as the period from 1600 to 1750.`;