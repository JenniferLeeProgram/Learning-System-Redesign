import { NavigationHeader } from './NavigationHeader';
import { Button } from './ui/button';
import { MetricIndicator } from './MetricIndicator';
import { ColoredControlSlider } from './ColoredControlSlider';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { ArrowRight, Lock } from 'lucide-react';
import type { DesignControls, DesignMetrics } from '../App';

interface RedesignControlsScreenProps {
  designControls: DesignControls;
  onControlsChange: (controls: DesignControls) => void;
  metrics: DesignMetrics;
  onNavigate: () => void;
  onBack: () => void;
}

export function RedesignControlsScreen({
  designControls,
  onControlsChange,
  metrics,
  onNavigate,
  onBack,
}: RedesignControlsScreenProps) {
  const updateControl = <K extends keyof DesignControls>(
    key: K,
    value: DesignControls[K]
  ) => {
    onControlsChange({ ...designControls, [key]: value });
  };

  return (
    <div className="min-h-screen pb-12">
      <NavigationHeader title="Redesign Controls" onBack={onBack} />

      {/* Constraints Banner */}
      <div className="bg-[#5B6B8C]/10 border-b border-[#5B6B8C]/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Lock className="w-4 h-4 text-[#5B6B8C]" />
            <span className="text-muted-foreground">Real-world constraints:</span>
            <span>Large class size · Limited instructor time · Fixed term length</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-[1fr,380px] gap-8">
          {/* Controls Panel */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3>Design Adjustments</h3>
              <p className="text-muted-foreground">
                Adjust course design parameters to see how they impact learner experience 
                and outcomes. All changes happen within existing constraints.
              </p>
            </div>

            {/* Control Sliders */}
            <div className="space-y-4">
              {/* Content Chunking - affects Cognitive Load */}
              <ColoredControlSlider
                label="Content Chunking & Pacing"
                description="Break dense lessons into smaller, predictable units"
                value={designControls.contentChunking}
                onChange={(val) => updateControl('contentChunking', val)}
                impactColor="#D4A574"
                impactLabel="Cognitive Load"
              />

              {/* Practice Frequency - affects Skill Transfer */}
              <ColoredControlSlider
                label="Practice Frequency"
                description="Increase opportunities for skill application"
                value={designControls.practiceFrequency}
                onChange={(val) => updateControl('practiceFrequency', val)}
                impactColor="#8B7FA9"
                impactLabel="Skill Transfer"
              />

              {/* Feedback Timing - affects Confidence */}
              <ColoredControlSlider
                label="Feedback Timing"
                description="Provide earlier, more actionable feedback"
                value={designControls.feedbackTiming}
                onChange={(val) => updateControl('feedbackTiming', val)}
                impactColor="#5B8BA0"
                impactLabel="Confidence"
              />

              {/* Scaffolding - affects Confidence & Cognitive Load */}
              <ColoredControlSlider
                label="Scaffolding Level"
                description="Add progressive support structures for skill building"
                value={designControls.scaffolding}
                onChange={(val) => updateControl('scaffolding', val)}
                impactColor="#5B8BA0"
                impactLabel="Confidence"
              />

              {/* Optional Practice Toggle - affects Motivation */}
              <div 
                className="bg-card border rounded-lg p-6 transition-all"
                style={{ 
                  borderColor: '#7FA99830',
                  backgroundColor: '#7FA99805',
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1 flex-1">
                    <Label className="flex items-center gap-2">
                      Include Optional Practice
                      <span 
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ 
                          backgroundColor: '#7FA99820',
                          color: '#7FA998',
                        }}
                      >
                        Motivation
                      </span>
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Allow learners to practice beyond required work
                    </p>
                  </div>
                  <Switch
                    checked={designControls.optionalPractice}
                    onCheckedChange={(checked) => updateControl('optionalPractice', checked)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Live Metrics Preview */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-6 sticky top-24">
              <div>
                <h4 className="mb-4">Updated Learning Indicators</h4>
                <div className="space-y-4">
                  <MetricIndicator
                    label="Motivation"
                    value={metrics.motivation}
                  />
                  <MetricIndicator
                    label="Cognitive Load"
                    value={metrics.cognitiveLoad}
                  />
                  <MetricIndicator
                    label="Confidence"
                    value={metrics.confidence}
                  />
                  <MetricIndicator
                    label="Skill Transfer"
                    value={metrics.skillTransfer}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-border space-y-3">
                <p className="text-sm text-muted-foreground">
                  Metrics update in real-time as you adjust design parameters
                </p>
                <Button
                  onClick={onNavigate}
                  className="w-full gap-2 bg-[#5B6B8C] hover:bg-[#4A5A7B] text-white"
                >
                  View Redesigned System
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