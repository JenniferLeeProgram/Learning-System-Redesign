import { FileText, Clock, AlertCircle } from 'lucide-react';

interface CourseWeekProps {
  number: number;
  title: string;
  hasAssessment: boolean;
  hasLateDeadline?: boolean;
  viewType: 'instructor' | 'learner';
  isRedesigned?: boolean;
}

export function CourseWeek({ 
  number, 
  title, 
  hasAssessment, 
  hasLateDeadline,
  viewType,
  isRedesigned = false
}: CourseWeekProps) {
  return (
    <div className={`border border-border rounded-lg p-4 ${hasLateDeadline && !isRedesigned ? 'border-[#D4A574]/50 bg-[#D4A574]/5' : 'bg-card'}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${isRedesigned ? 'bg-[#7FA998]/20 text-[#7FA998]' : 'bg-muted text-foreground'}`}>
            {number}
          </div>
          <div className="flex-1 space-y-1">
            <h4 className="text-sm">{title}</h4>
            {viewType === 'learner' && !isRedesigned && (
              <p className="text-sm text-muted-foreground">
                {hasAssessment ? 'High-stakes assessment' : 'Dense content delivery'}
              </p>
            )}
            {viewType === 'instructor' && !isRedesigned && (
              <p className="text-sm text-muted-foreground">
                {hasAssessment ? 'Graded assignment due' : 'Lecture & readings'}
              </p>
            )}
            {isRedesigned && (
              <p className="text-sm text-muted-foreground">
                Modular units · Scaffolded practice · Immediate feedback
              </p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {hasAssessment && !isRedesigned && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <FileText className="w-3 h-3" />
            </div>
          )}
          {hasLateDeadline && !isRedesigned && (
            <div className="flex items-center gap-1 text-xs text-[#D4A574]">
              <AlertCircle className="w-4 h-4" />
            </div>
          )}
          {isRedesigned && (
            <div className="flex items-center gap-1 text-xs text-[#7FA998]">
              <Clock className="w-3 h-3" />
              <span>Flexible</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
