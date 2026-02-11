import { useState } from 'react';
import { NavigationHeader } from './NavigationHeader';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { MetricIndicator } from './MetricIndicator';
import { CheckCircle2, RotateCcw, TrendingUp, Brain, Users } from 'lucide-react';
import type { DesignMetrics } from '../App';

interface SummaryScreenProps {
  metrics: DesignMetrics;
  onBack: () => void;
  onRestart: () => void;
}

export function SummaryScreen({ metrics, onBack, onRestart }: SummaryScreenProps) {
  const [stakeholderNotes, setStakeholderNotes] = useState(
    'The redesign focuses on sustainable learner outcomes by restructuring course delivery. Key improvements include modular content, scaffolded practice, and automated feedback—all achievable within existing constraints. This approach reduces cognitive overload, increases learner confidence, and improves skill retention without requiring additional instructor time.'
  );

  const takeaways = [
    {
      icon: Brain,
      title: 'Predictable structure supports completion',
      description: 'Consistent, bite-sized units reduce anxiety and help learners build momentum',
    },
    {
      icon: TrendingUp,
      title: 'Scaffolded practice improves confidence and retention',
      description: 'Progressive difficulty ensures learners experience success at each stage',
    },
    {
      icon: Users,
      title: 'System design drives learning effectiveness',
      description: 'Strategic use of automation and structure scales quality without proportional cost',
    },
  ];

  return (
    <div className="min-h-screen pb-12">
      <NavigationHeader title="Design Takeaways" onBack={onBack} />

      <div className="container mx-auto px-4 py-8 max-w-4xl print:max-w-none">
        <div className="space-y-8">
          {/* Summary Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#7FA998]/20">
              <CheckCircle2 className="w-8 h-8 text-[#7FA998]" />
            </div>
            <div>
              <h3 className="mb-2">Redesign Complete</h3>
              <p className="text-muted-foreground">
                You've explored how strategic design decisions transform learning experiences
              </p>
            </div>
          </div>

          {/* Final Metrics */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h4 className="mb-6">Final Learning Indicators</h4>
            <p className="text-sm text-muted-foreground mb-6">
              Comparing traditional course (low) to redesigned system (optimized)
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <MetricIndicator label="Motivation" value={metrics.motivation} />
              <MetricIndicator label="Cognitive Load" value={metrics.cognitiveLoad} />
              <MetricIndicator label="Confidence" value={metrics.confidence} />
              <MetricIndicator label="Skill Transfer" value={metrics.skillTransfer} />
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-6">
            <h4>Key Takeaways</h4>
            <div className="space-y-5">
              {takeaways.map((takeaway, idx) => {
                const Icon = takeaway.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#5B6B8C]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#5B6B8C]" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm">{takeaway.title}</p>
                      <p className="text-sm text-muted-foreground">{takeaway.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stakeholder Communication */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <div className="space-y-2">
              <h4>Stakeholder Communication</h4>
              <p className="text-sm text-muted-foreground">
                How would you explain this redesign to leadership or project stakeholders?
              </p>
            </div>
            <Textarea
              value={stakeholderNotes}
              onChange={(e) => setStakeholderNotes(e.target.value)}
              className="min-h-[160px] resize-none"
              placeholder="Describe the redesign rationale, key improvements, and expected impact..."
            />
            <p className="text-xs text-muted-foreground">
              This space helps you practice articulating design decisions for non-technical audiences
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={onRestart}
              variant="outline"
              className="flex-1 gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Start Over
            </Button>
            <Button
              onClick={() => window.print()}
              className="flex-1 gap-2 bg-[#5B6B8C] hover:bg-[#4A5A7B] text-white"
            >
              Export Summary
            </Button>
          </div>

          {/* Portfolio Note */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              This interactive redesign demonstrates systematic thinking about learning experience design, 
              balancing learner needs with real-world implementation constraints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}