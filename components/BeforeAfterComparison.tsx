import { motion } from 'motion/react';

interface Metric {
  label: string;
  beforeValue: number;
  afterValue: number;
  color: string;
  inverse?: boolean;
}

export function BeforeAfterComparison() {
  const metrics: Metric[] = [
    { label: 'Motivation', beforeValue: 35, afterValue: 85, color: '#7FA998' },
    { label: 'Cognitive Load', beforeValue: 85, afterValue: 35, color: '#D4A574', inverse: true },
    { label: 'Confidence', beforeValue: 30, afterValue: 80, color: '#5B8BA0' },
    { label: 'Skill Transfer', beforeValue: 40, afterValue: 85, color: '#8B7FA9' },
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-6">
      <div>
        <h4 className="mb-2">System Impact Preview</h4>
        <p className="text-sm text-muted-foreground">
          How redesign decisions shift key learning outcomes
        </p>
      </div>
      
      <div className="space-y-5">
        {metrics.map((metric) => (
          <div key={metric.label} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">{metric.label}</span>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{metric.beforeValue}%</span>
                <span>→</span>
                <span style={{ color: metric.color }}>{metric.afterValue}%</span>
              </div>
            </div>
            <div className="relative h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full opacity-30"
                style={{ backgroundColor: metric.color }}
                initial={{ width: 0 }}
                animate={{ width: `${metric.beforeValue}%` }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ backgroundColor: metric.color }}
                initial={{ width: 0 }}
                animate={{ width: `${metric.afterValue}%` }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
