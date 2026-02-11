import { Slider } from './ui/slider';
import { Label } from './ui/label';

interface ColoredControlSliderProps {
  label: string;
  description: string;
  value: number;
  onChange: (value: number) => void;
  impactColor: string;
  impactLabel: string;
}

export function ColoredControlSlider({
  label,
  description,
  value,
  onChange,
  impactColor,
  impactLabel,
}: ColoredControlSliderProps) {
  const getSliderLabel = (val: number) => {
    const labels = ['Low', 'Medium', 'High', 'Very High'];
    return labels[val - 1] || 'Medium';
  };

  return (
    <div 
      className="bg-card border rounded-lg p-6 space-y-4 transition-all"
      style={{ 
        borderColor: `${impactColor}30`,
        backgroundColor: `${impactColor}05`,
      }}
    >
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label className="flex items-center gap-2">
            {label}
            <span 
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ 
                backgroundColor: `${impactColor}20`,
                color: impactColor,
              }}
            >
              {impactLabel}
            </span>
          </Label>
          <span className="text-sm text-muted-foreground">
            {getSliderLabel(value)}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="relative">
        <Slider
          value={[value]}
          onValueChange={([val]) => onChange(val)}
          min={1}
          max={4}
          step={1}
        />
        <style>{`
          [data-radix-slider-range] {
            background-color: ${impactColor} !important;
          }
          [data-radix-slider-thumb] {
            background-color: ${impactColor} !important;
            border-color: ${impactColor} !important;
          }
        `}</style>
      </div>
    </div>
  );
}
