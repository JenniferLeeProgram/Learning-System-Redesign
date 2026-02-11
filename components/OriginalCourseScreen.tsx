import { NavigationHeader } from './NavigationHeader';
import { Button } from './ui/button';
import { MetricIndicator } from './MetricIndicator';
import { ViewToggle } from './ViewToggle';
import { CourseWeek } from './CourseWeek';
import { MetricLegend } from './MetricLegend';
import { ArrowRight, AlertTriangle } from 'lucide-react';

interface OriginalCourseScreenProps {
  onNavigate: () => void;
  onBack: () => void;
  viewType: 'instructor' | 'learner';
  onViewTypeChange: (view: 'instructor' | 'learner') => void;
}

export function OriginalCourseScreen({ 
  onNavigate, 
  onBack, 
  viewType, 
  onViewTypeChange 
}: OriginalCourseScreenProps) {
  const originalMetrics = {
    motivation: 35,
    cognitiveLoad: 85,
    confidence: 30,
    skillTransfer: 40,
  };

  const frictionPoints = [
    { label: 'Cognitive overload', description: 'Dense lessons with too much content at once' },
    { label: 'Limited practice', description: 'Few opportunities to apply new skills' },
    { label: 'Low autonomy', description: 'Fixed pacing doesn\'t match individual needs' },
    { label: 'Delayed feedback', description: 'Corrections arrive too late to adjust learning' },
  ];

  const weeks = [
    { number: 1, title: 'Introduction & Basics', hasAssessment: false, hasLateDeadline: false },
    { number: 2, title: 'Grammar Fundamentals', hasAssessment: true, hasLateDeadline: false },
    { number: 3, title: 'Vocabulary Building', hasAssessment: false, hasLateDeadline: false },
    { number: 4, title: 'Conversation Practice', hasAssessment: true, hasLateDeadline: true },
    { number: 5, title: 'Writing Skills', hasAssessment: false, hasLateDeadline: false },
    { number: 6, title: 'Midterm Exam', hasAssessment: true, hasLateDeadline: false },
  ];

  return (
    <div className="min-h-screen pb-12">
      <NavigationHeader title="Original Course Experience" onBack={onBack} />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* View Toggle */}
        <div className="mb-8">
          <ViewToggle value={viewType} onChange={onViewTypeChange} />
        </div>

        <div className="grid lg:grid-cols-[1fr,380px] gap-8">
          {/* Main Course Structure */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3>Traditional Course Structure</h3>
              <p className="text-muted-foreground">
                {viewType === 'instructor' 
                  ? 'Linear syllabus focused on curriculum coverage and grading milestones'
                  : 'Fixed pacing with high-stakes assessments and limited support'
                }
              </p>
            </div>

            {/* Course Timeline */}
            <div className="space-y-3">
              {weeks.map((week) => (
                <CourseWeek
                  key={week.number}
                  number={week.number}
                  title={week.title}
                  hasAssessment={week.hasAssessment}
                  hasLateDeadline={week.hasLateDeadline}
                  viewType={viewType}
                />
              ))}
            </div>

            {/* Friction Points */}
            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#D4A574]" />
                <h4>Learner Friction Points</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {frictionPoints.map((point, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-sm text-foreground">{point.label}</p>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics Sidebar */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-6 sticky top-24">
              <div>
                <h4 className="mb-4">Learning Indicators</h4>
                <div className="space-y-4">
                  <MetricIndicator
                    label="Motivation"
                    value={originalMetrics.motivation}
                    variant="low"
                  />
                  <MetricIndicator
                    label="Cognitive Load"
                    value={originalMetrics.cognitiveLoad}
                    variant="high"
                  />
                  <MetricIndicator
                    label="Confidence"
                    value={originalMetrics.confidence}
                    variant="low"
                  />
                  <MetricIndicator
                    label="Skill Transfer"
                    value={originalMetrics.skillTransfer}
                    variant="low"
                  />
                </div>
              </div>

              <MetricLegend />

              <div className="pt-4 border-t border-border">
                <Button 
                  onClick={onNavigate}
                  className="w-full gap-2 bg-[#5B6B8C] hover:bg-[#4A5A7B] text-white"
                >
                  Explore Redesign Options
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}