import type { Language } from './templeDescriptions';

type UITranslations = Record<string, Record<Language, string>>;

export const uiTranslations: UITranslations = {
  // Navigation
  'Home': {
    en: 'Home',
    kn: 'ಮುಖಪುಟ'
  },
  'Temples': {
    en: 'Temples',
    kn: 'ದೇವಾಲಯಗಳು'
  },
  'Festivals': {
    en: 'Festivals',
    kn: 'ಹಬ್ಬಗಳು'
  },
  'Explore': {
    en: 'Explore',
    kn: 'ಅನ್ವೇಷಿಸಿ'
  },
  'Contact': {
    en: 'Contact',
    kn: 'ಸಂಪರ್ಕಿಸಿ'
  },
  'Search temples...': {
    en: 'Search temples...',
    kn: 'ದೇವಾಲಯಗಳನ್ನು ಹುಡುಕಿ...'
  },
  'TempleVerse': {
    en: 'TempleVerse',
    kn: 'ದೇವಾಲಯ ಪ್ರಪಂಚ'
  },
  
  // Temple Places
  'Mangalore': {
    en: 'Mangalore',
    kn: 'ಮಂಗಳೂರು'
  },
  'near Mangalore': {
    en: 'near Mangalore',
    kn: 'ಮಂಗಳೂರು ಸಮೀಪ'
  },

  // Temple Names
  'Mangaladevi Temple': {
    en: 'Mangaladevi Temple',
    kn: 'ಮಂಗಳಾದೇವಿ ದೇವಾಲಯ'
  },
  'Kadri Manjunatha Temple': {
    en: 'Kadri Manjunatha Temple',
    kn: 'ಕದ್ರಿ ಮಂಜುನಾಥ ದೇವಾಲಯ'
  },
  'Kudroli Gokarnanatheshwara Temple': {
    en: 'Kudroli Gokarnanatheshwara Temple',
    kn: 'ಕುದ್ರೋಳಿ ಗೋಕರ್ಣನಾಥೇಶ್ವರ ದೇವಾಲಯ'
  },
  'Kateel Durgaparameshwari Temple': {
    en: 'Kateel Durgaparameshwari Temple',
    kn: 'ಕಟೀಲು ದುರ್ಗಾಪರಮೇಶ್ವರಿ ದೇವಾಲಯ'
  },

  // Deities
  'Goddess Mangaladevi': {
    en: 'Goddess Mangaladevi',
    kn: 'ಮಂಗಳಾದೇವಿ ದೇವಿ'
  },
  'Goddess Durga': {
    en: 'Goddess Durga',
    kn: 'ದುರ್ಗಾ ದೇವಿ'
  },
  'Mangaladevi': {
    en: 'Mangaladevi',
    kn: 'ಮಂಗಳಾದೇವಿ'
  },

  // UI Elements
  'Read More': {
    en: 'Read More',
    kn: 'ಇನ್ನಷ್ಟು ಓದಿ'
  },
  'Read Less': {
    en: 'Read Less',
    kn: 'ಕಡಿಮೆ ಓದಿ'
  },
  'Quick Facts': {
    en: 'Quick Facts',
    kn: 'ಪ್ರಮುಖ ಮಾಹಿತಿ'
  },
  'Primary Deity:': {
    en: 'Primary Deity:',
    kn: 'ಮುಖ್ಯ ದೇವರು:'
  },
  'Visitor Info': {
    en: 'Visitor Info',
    kn: 'ಭೇಟಿ ಮಾಹಿತಿ'
  },
  'Timings:': {
    en: 'Timings:',
    kn: 'ಸಮಯ:'
  },
  'Please verify timings before visiting as they may vary on festival days.': {
    en: 'Please verify timings before visiting as they may vary on festival days.',
    kn: 'ಹಬ್ಬದ ದಿನಗಳಲ್ಲಿ ಸಮಯ ಬದಲಾಗಬಹುದು, ದಯವಿಟ್ಟು ಭೇಟಿ ನೀಡುವ ಮೊದಲು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.'
  },
  'Source: Community contributions • Last updated:': {
    en: 'Source: Community contributions • Last updated:',
    kn: 'ಮೂಲ: ಸಮುದಾಯದ ಕೊಡುಗೆಗಳು • ಕೊನೆಯ ನವೀಕರಣ:'
  },

  // Actions
  'Directions': {
    en: 'Directions',
    kn: 'ದಾರಿ'
  },
  'Link copied to clipboard!': {
    en: 'Link copied to clipboard!',
    kn: 'ಲಿಂಕ್ ನಕಲಿಸಲಾಗಿದೆ!'
  },
  'Temple saved to your collection': {
    en: 'Temple saved to your collection',
    kn: 'ದೇವಾಲಯವನ್ನು ನಿಮ್ಮ ಸಂಗ್ರಹಕ್ಕೆ ಸೇರಿಸಲಾಗಿದೆ'
  },
  'Playing temple story': {
    en: 'Playing temple story',
    kn: 'ದೇವಾಲಯದ ಕಥೆ ಪ್ಲೇ ಆಗುತ್ತಿದೆ'
  },
  'Text-to-speech is not supported in your browser': {
    en: 'Text-to-speech is not supported in your browser',
    kn: 'ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಸೌಲಭ್ಯ ಲಭ್ಯವಿಲ್ಲ'
  },
  'Opening directions in Google Maps...': {
    en: 'Opening directions in Google Maps...',
    kn: 'ಗೂಗಲ್ ಮ್ಯಾಪ್‌ನಲ್ಲಿ ದಾರಿ ತೋರಿಸುತ್ತಿದೆ...'
  },

  // Story and Descriptions
  'Story': {
    en: 'Story',
    kn: 'ಇತಿಹಾಸ'
  },
  'Location:': {
    en: 'Location:',
    kn: 'ಸ್ಥಳ:'
  },
  'Deity:': {
    en: 'Deity:',
    kn: 'ದೇವರು:'
  },
  'Festivals & Rituals': {
    en: 'Festivals & Rituals',
    kn: 'ಹಬ್ಬಗಳು & ಆಚರಣೆಗಳು'
  },
  'Opening Hours': {
    en: 'Opening Hours',
    kn: 'ತೆರೆಯುವ ಸಮಯ'
  },
  'Play 60s Story': {
    en: 'Play 60s Story',
    kn: '60 ಸೆಕೆಂಡ್ ಕಥೆ ಕೇಳಿ'
  },
  'Stop Story': {
    en: 'Stop Story',
    kn: 'ಕಥೆ ನಿಲ್ಲಿಸಿ'
  },
  'View Details': {
    en: 'View Details',
    kn: 'ಹೆಚ್ಚಿನ ವಿವರಗಳು'
  },
  'Get Directions': {
    en: 'Get Directions',
    kn: 'ದಾರಿ ತೋರಿಸಿ'
  },
  'Share Temple': {
    en: 'Share Temple',
    kn: 'ದೇವಾಲಯ ಹಂಚಿಕೊಳ್ಳಿ'
  },
  'More Details': {
    en: 'More Details',
    kn: 'ಹೆಚ್ಚಿನ ಮಾಹಿತಿ'
  },
  'Nearby Temples in': {
    en: 'Nearby Temples in',
    kn: 'ಸಮೀಪದ ದೇವಾಲಯಗಳು -'
  },

  // Time
  'Daily': {
    en: 'Daily',
    kn: 'ದೈನಂದಿನ'
  },
  'Morning': {
    en: 'Morning',
    kn: 'ಬೆಳಗ್ಗೆ'
  },
  'Evening': {
    en: 'Evening',
    kn: 'ಸಂಜೆ'
  },
  'typical': {
    en: 'typical',
    kn: 'ಸಾಮಾನ್ಯವಾಗಿ'
  },

  // Other
  'Festival information and special poojas for': {
    en: 'Festival information and special poojas for',
    kn: 'ಹಬ್ಬದ ಮಾಹಿತಿ ಮತ್ತು ವಿಶೇಷ ಪೂಜೆಗಳು -'
  },
  'will be updated soon. Visit the temple or contact local authorities for current schedules.': {
    en: 'will be updated soon. Visit the temple or contact local authorities for current schedules.',
    kn: 'ಶೀಘ್ರದಲ್ಲೇ ನವೀಕರಿಸಲಾಗುವುದು. ಪ್ರಸ್ತುತ ವೇಳಾಪಟ್ಟಿಗಾಗಿ ದೇವಾಲಯಕ್ಕೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ಸ್ಥಳೀಯ ಅಧಿಕಾರಿಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ.'
  },
  'Known for its historical significance and unique architectural style': {
    en: 'Known for its historical significance and unique architectural style',
    kn: 'ಐತಿಹಾಸಿಕ ಮಹತ್ವ ಮತ್ತು ವಿಶಿಷ್ಟ ವಾಸ್ತುಶಿಲ್ಪದ ಹೆಗ್ಗುರುತು'
  },
  'River-island temple known for Yakshagana': {
    en: 'River-island temple known for Yakshagana',
    kn: 'ಯಕ್ಷಗಾನಕ್ಕೆ ಹೆಸರುವಾಸಿಯಾದ ನದಿ-ದ್ವೀಪ ದೇವಾಲಯ'
  },
  'River-island temple of Goddess Durga, known for Yakshagana performances and serene location on the Nandini river.': {
    en: 'River-island temple of Goddess Durga, known for Yakshagana performances and serene location on the Nandini river.',
    kn: 'ನಂದಿನಿ ನದಿಯ ಮೇಲಿರುವ ದುರ್ಗಾ ದೇವಿಯ ದ್ವೀಪ ದೇವಾಲಯ, ಯಕ್ಷಗಾನ ಪ್ರದರ್ಶನಗಳಿಗೆ ಮತ್ತು ಪ್ರಶಾಂತ ಸ್ಥಳಕ್ಕೆ ಹೆಸರುವಾಸಿಯಾಗಿದೆ.'
  }
};