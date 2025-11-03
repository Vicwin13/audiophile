import Button from './Button';
import React from 'react';

const ButtonExamples: React.FC = () => {
  return (
    <div className="p-8 space-y-8 bg-[var(--background)] min-h-screen">
      <h1 className="text-3xl font-bold text-[var(--sec-black)] mb-8">Button Component Examples</h1>
      
      {/* Variants */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--sec-black)]">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--sec-black)]">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--sec-black)]">With Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button 
            icon="/file.svg" 
            iconPosition="left"
            iconAlt="File icon"
          >
            Left Icon
          </Button>
          <Button 
            icon="/globe.svg" 
            iconPosition="right"
            iconAlt="Globe icon"
          >
            Right Icon
          </Button>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--sec-black)]">States</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button fullWidth>Full Width</Button>
        </div>
      </div>

      {/* As Link */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--sec-black)]">As Link</h2>
        <div className="flex flex-wrap gap-4">
          <Button 
            href="https://example.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            External Link
          </Button>
        </div>
      </div>

      {/* Custom Styling */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--sec-black)]">Custom Styling</h2>
        <div className="flex flex-wrap gap-4">
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full"
          >
            Custom Styled
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonExamples;