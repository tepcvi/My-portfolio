import React, { useState, useEffect } from 'react';

interface ThemeColor {
  name: string;
  hue: number;
  hex: string;
}

const themeColors: ThemeColor[] = [
  { name: 'Electric Violet (Reference)', hue: 255, hex: '#8a6ef5' },
  { name: 'Cyber Cyan', hue: 185, hex: '#26d6e8' },
  { name: 'Emerald Matrix', hue: 120, hex: '#3ce077' },
  { name: 'Sunset Amber', hue: 35, hex: '#f59e0b' },
  { name: 'Neon Pink', hue: 315, hex: '#f43f8a' }
];

export const ThemeSwitcher: React.FC = () => {
  const [activeHue, setActiveHue] = useState<number>(255);

  useEffect(() => {
    document.documentElement.style.setProperty('--hue', activeHue.toString());
  }, [activeHue]);

  return (
    <div className="theme-switcher" title="Change Theme Accent Color">
      {themeColors.map((color) => (
        <button
          key={color.hue}
          className={`theme-switcher__btn ${activeHue === color.hue ? 'active' : ''}`}
          style={{ backgroundColor: color.hex }}
          onClick={() => setActiveHue(color.hue)}
          aria-label={`Switch theme to ${color.name}`}
          title={color.name}
        />
      ))}
    </div>
  );
};
