import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './TempleDescription.css';

interface TempleDescriptionProps {
  templeId: string;
}

export function TempleDescription({ templeId }: TempleDescriptionProps) {
  const [expanded, setExpanded] = useState(false);
  const { translate } = useLanguage();

  const shortKey = `temple.${templeId}.short`;
  const fullKey = `temple.${templeId}.full`;
  const shortDescription = translate(shortKey);
  const fullDescription = translate(fullKey);

  return (
    <div className="temple-description-container">
      <p className={`temple-description ${expanded ? 'expanded' : ''}`}>
        {expanded ? fullDescription : shortDescription}
      </p>
      <button 
        className="read-more-button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {translate(expanded ? 'Read Less' : 'Read More')}
      </button>
    </div>
  );
}