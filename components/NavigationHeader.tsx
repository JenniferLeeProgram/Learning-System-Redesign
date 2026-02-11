import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

interface NavigationHeaderProps {
  title: string;
  onBack?: () => void;
}

export function NavigationHeader({ title, onBack }: NavigationHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center gap-4">
        {onBack && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        )}
        <h2 className="flex-1">{title}</h2>
      </div>
    </header>
  );
}
