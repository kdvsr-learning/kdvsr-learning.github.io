import { FolderIcon, MusicIcon } from './icons.js';

// --- Menu Structure Definition ---
export const menuItems = [
  {
    id: 'varnams',
    label: 'Varnams',
    icon: FolderIcon,
    children: [
      {
        id: 'varnam-hamsadhwani-jalajaksha',
        label: 'Hamsadhwani: Jalajaksha',
        icon: MusicIcon,
        contentPath: '/content/varnams/varnam-hamsadhwani-jalajaksha.html'
      },
      {
        id: 'theory-chords',
        label: 'Chords',
        icon: MusicIcon,
        contentPath: '/content/theory/chords.md'
      },
      {
        id: 'theory-harmony',
        label: 'Harmony',
        icon: MusicIcon,
        contentPath: '/content/theory/harmony.md'
      }
    ]
  },
  {
    id: 'history',
    label: 'Music History',
    icon: FolderIcon,
    children: [
      {
        id: 'history-baroque',
        label: 'Baroque Period',
        icon: MusicIcon,
        contentPath: '/content/history/baroque.md'
      },
      {
        id: 'history-classical',
        label: 'Classical Period',
        icon: MusicIcon,
        contentPath: '/content/history/classical.md'
      },
      {
        id: 'history-romantic',
        label: 'Romantic Period',
        icon: MusicIcon,
        contentPath: '/content/history/romantic.md'
      }
    ]
  },
  {
    id: 'composers',
    label: 'Composers',
    icon: FolderIcon,
    children: [
      {
        id: 'composers-bach',
        label: 'Bach',
        icon: MusicIcon,
        contentPath: '/content/composers/bach.md'
      },
      {
        id: 'composers-mozart',
        label: 'Mozart',
        icon: MusicIcon,
        contentPath: '/content/composers/mozart.md'
      },
      {
        id: 'composers-beethoven',
        label: 'Beethoven',
        icon: MusicIcon,
        contentPath: '/content/composers/beethoven.md'
      }
    ]
  }
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