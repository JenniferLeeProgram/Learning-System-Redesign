import { NavigationHeader } from './NavigationHeader';
import { Button } from './ui/button';
import { MetricIndicator } from './MetricIndicator';
import { ViewToggle } from './ViewToggle';
import { ExpandableModule } from './ExpandableModule';
import { RationalePanel } from './RationalePanel';
import { ArrowRight, CheckCircle2, Lightbulb } from 'lucide-react';
import type { DesignMetrics } from '../App';

interface RedesignedCourseScreenProps {
  metrics: DesignMetrics;
  onNavigate: () => void;
  onBack: () => void;
  viewType: 'instructor' | 'learner';
  onViewTypeChange: (view: 'instructor' | 'learner') => void;
  showRationale: boolean;
  onRationaleToggle: () => void;
}

export function RedesignedCourseScreen({
  metrics,
  onNavigate,
  onBack,
  viewType,
  onViewTypeChange,
  showRationale,
  onRationaleToggle,
}: RedesignedCourseScreenProps) {
  const improvements = [
    { label: 'Modular structure', description: 'Short, predictable lesson units reduce cognitive load' },
    { label: 'Scaffolded sequences', description: 'Progressive practice builds confidence and mastery' },
    { label: 'Immediate feedback', description: 'Automated and peer feedback enables quick adjustment' },
    { label: 'Flexible pacing', description: 'Self-paced modules support diverse learning speeds' },
  ];

  const modules = [
    {
      number: 1,
      title: 'Introduction & Basics',
      descriptor: 'Guided onboarding · Predictable structure · Early success signals',
      improvements: [
        { change: 'Reduced initial content to 3 core concepts instead of 6', impact: 'cognitiveLoad' as const },
        { change: 'Added immediate success checkpoints after each concept', impact: 'confidence' as const },
        { change: 'Provided clear "what to expect" roadmap at module start', impact: 'motivation' as const },
      ],
    },
    {
      number: 2,
      title: 'Grammar Fundamentals',
      descriptor: 'Chunked concepts · Progressive difficulty · Error-tolerant practice',
      improvements: [
        { change: 'Broke complex grammar into 10-minute micro-lessons', impact: 'cognitiveLoad' as const },
        { change: 'Added unlimited low-stakes practice with instant corrections', impact: 'confidence' as const },
        { change: 'Introduced adaptive difficulty based on learner performance', impact: 'skillTransfer' as const },
      ],
    },
    {
      number: 3,
      title: 'Vocabulary Building',
      descriptor: 'Contextualized vocabulary · Story-based reinforcement · Reduced memorization load',
      improvements: [
        { change: 'Embedded vocabulary in authentic story contexts vs. isolated lists', impact: 'skillTransfer' as const },
        { change: 'Spaced repetition algorithm reduces review burden by 40%', impact: 'cognitiveLoad' as const },
        { change: 'Learners choose personally relevant vocabulary themes', impact: 'motivation' as const },
      ],
    },
    {
      number: 4,
      title: 'Conversation Practice',
      descriptor: 'Authentic scenarios · Peer interaction · Confidence-building rehearsal',
      improvements: [
        { change: 'Structured peer practice with conversation frameworks', impact: 'confidence' as const },
        { change: 'Recorded practice with self-review before peer interaction', impact: 'motivation' as const },
        { change: 'Real-world scenarios instead of abstract dialogues', impact: 'skillTransfer' as const },
      ],
    },
    {
      number: 5,
      title: 'Writing Skills',
      descriptor: 'Low-stakes drafting · Iterative feedback · Skill transfer focus',
      improvements: [
        { change: 'Multiple low-stakes drafts replace single high-stakes essay', impact: 'confidence' as const },
        { change: 'Inline automated feedback during writing (not after)', impact: 'cognitiveLoad' as const },
        { change: 'Authentic writing tasks for learner\'s real-world contexts', impact: 'skillTransfer' as const },
      ],
    },
    {
      number: 6,
      title: 'Integration Module',
      descriptor: 'Applied synthesis · Real-world tasks · Mastery validation',
      improvements: [
        { change: 'Project-based assessment mirrors real language use', impact: 'skillTransfer' as const },
        { change: 'Learners select project aligned with personal goals', impact: 'motivation' as const },
        { change: 'Clear rubric and exemplars reduce assessment anxiety', impact: 'confidence' as const },
      ],
    },
  ];

  return (
    <div className="min-h-screen pb-12">
      <NavigationHeader title="Redesigned Learning System" onBack={onBack} />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* View Toggle & Rationale Button */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
          <ViewToggle value={viewType} onChange={onViewTypeChange} />
          <Button
            variant={showRationale ? 'default' : 'outline'}
            size="sm"
            onClick={onRationaleToggle}
            className={`gap-2 ${showRationale ? 'bg-[#5B6B8C] hover:bg-[#5B6B8C] text-white' : ''}`}
          >
            <Lightbulb className="w-4 h-4" />
            {showRationale ? 'Hide' : 'Show'} Design Rationale
          </Button>
        </div>

        <div className="grid lg:grid-cols-[1fr,380px] gap-8">
          {/* Main Course Structure */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3>Redesigned Course Structure</h3>
              <p className="text-muted-foreground">
                {viewType === 'instructor'
                  ? 'Modular system optimized for scalability and consistent learner progress'
                  : 'Self-paced learning with scaffolded practice and continuous feedback'
                }
              </p>
            </div>

            {/* Course Timeline - Now Expandable */}
            <div className="space-y-3">
              {modules.map((module) => (
                <ExpandableModule
                  key={module.number}
                  number={module.number}
                  title={module.title}
                  descriptor={module.descriptor}
                  improvements={module.improvements}
                />
              ))}
            </div>

            {/* Key Improvements */}
            <div className="bg-[#7FA998]/10 border border-[#7FA998]/30 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7FA998]" />
                <h4>Key Improvements</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {improvements.map((improvement, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-sm text-foreground">{improvement.label}</p>
                    <p className="text-sm text-muted-foreground">{improvement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Rationale Panel */}
            {showRationale && <RationalePanel />}
          </div>

          {/* Metrics Sidebar */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-6 sticky top-24">
              <div>
                <h4 className="mb-4">Updated Learning Indicators</h4>
                <div className="space-y-4">
                  <MetricIndicator label="Motivation" value={metrics.motivation} />
                  <MetricIndicator label="Cognitive Load" value={metrics.cognitiveLoad} />
                  <MetricIndicator label="Confidence" value={metrics.confidence} />
                  <MetricIndicator label="Skill Transfer" value={metrics.skillTransfer} />
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <Button
                  onClick={onNavigate}
                  className="w-full gap-2 bg-[#5B6B8C] hover:bg-[#4A5A7B] text-white"
                >
                  View Design Takeaways
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