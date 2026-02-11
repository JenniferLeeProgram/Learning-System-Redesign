import { motion } from 'motion/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface MetricIndicatorProps {
  label: string;
  value: number;
  variant?: 'low' | 'medium' | 'high';
}

export function MetricIndicator({ label, value, variant = 'medium' }: MetricIndicatorProps) {
  const getMetricConfig = () => {
    switch (label) {
      case 'Motivation':
        return {
          color: '#7FA998',
          label: value >= 70 ? 'High' : value >= 40 ? 'Medium' : 'Low',
          tooltip: value >= 70 
            ? 'Improved through autonomy-supportive pathways and choice' 
            : 'Limited by fixed pacing and low learner control',
        };
      case 'Cognitive Load':
        return {
          color: '#D4A574',
          label: value >= 70 ? 'High' : value >= 40 ? 'Moderate' : 'Low',
          tooltip: value <= 40 
            ? 'Reduced via chunking and progressive disclosure' 
            : 'Increased by dense content and limited scaffolding',
          inverse: true,
        };
      case 'Confidence':
        return {
          color: '#5B8BA0',
          label: value >= 70 ? 'High' : value >= 40 ? 'Medium' : 'Low',
          tooltip: value >= 70 
            ? 'Built through low-stakes practice and frequent success signals' 
            : 'Undermined by high-stakes assessments and delayed feedback',
        };
      case 'Skill Transfer':
        return {
          color: '#8B7FA9',
          label: value >= 70 ? 'High' : value >= 40 ? 'Medium' : 'Low',
          tooltip: value >= 70 
            ? 'Strengthened through authentic contexts and applied practice' 
            : 'Limited by abstract exercises and decontextualized content',
        };
      default:
        return {
          color: '#9DB2BF',
          label: 'Medium',
          tooltip: '',
        };
    }
  };

  const config = getMetricConfig();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="space-y-2 cursor-help">
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">
                {label}
                {config.inverse && <span className="text-xs text-muted-foreground ml-1">(lower is better)</span>}
              </span>
              <span className="text-sm" style={{ color: config.color }}>
                {config.label}
              </span>
            </div>
            <div className="relative h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ backgroundColor: config.color }}
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm max-w-xs">{config.tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}