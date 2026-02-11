import { Button } from './ui/button';
import { User, GraduationCap } from 'lucide-react';

interface ViewToggleProps {
  value: 'instructor' | 'learner';
  onChange: (value: 'instructor' | 'learner') => void;
}

export function ViewToggle({ value, onChange }: ViewToggleProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-muted rounded-lg p-1">
      <Button
        variant={value === 'learner' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onChange('learner')}
        className={`gap-2 ${value === 'learner' ? 'bg-[#5B6B8C] hover:bg-[#5B6B8C] text-white' : ''}`}
      >
        <User className="w-4 h-4" />
        Learner View
      </Button>
      <Button
        variant={value === 'instructor' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onChange('instructor')}
        className={`gap-2 ${value === 'instructor' ? 'bg-[#5B6B8C] hover:bg-[#5B6B8C] text-white' : ''}`}
      >
        <GraduationCap className="w-4 h-4" />
        Instructor View
      </Button>
    </div>
  );
}
