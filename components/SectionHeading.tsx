import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center' }) => {
  const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
  const itemAlign = align === 'left' ? 'items-start' : align === 'right' ? 'items-end' : 'items-center';

  return (
    <div className={`flex flex-col ${itemAlign} ${alignClass} mb-12 md:mb-20`}>
      {subtitle && (
        <span className="font-script text-2xl md:text-3xl text-brand-neon mb-2 -rotate-2 inline-block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight text-white leading-none">
        {title}
      </h2>
      <div className="w-24 h-1 bg-brand-neon mt-4"></div>
    </div>
  );
};