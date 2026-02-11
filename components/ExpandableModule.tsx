import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, TrendingUp, TrendingDown } from 'lucide-react';

interface ModuleImprovement {
  change: string;
  impact: 'motivation' | 'cognitiveLoad' | 'confidence' | 'skillTransfer';
}

interface ExpandableModuleProps {
  number: number;
  title: string;
  descriptor: string;
  improvements: ModuleImprovement[];
}

const impactConfig = {
  motivation: { label: 'Motivation', color: '#7FA998', icon: TrendingUp },
  cognitiveLoad: { label: 'Cognitive Load', color: '#D4A574', icon: TrendingDown },
  confidence: { label: 'Confidence', color: '#5B8BA0', icon: TrendingUp },
  skillTransfer: { label: 'Skill Transfer', color: '#8B7FA9', icon: TrendingUp },
};

export function ExpandableModule({
  number,
  title,
  descriptor,
  improvements,
}: ExpandableModuleProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden transition-colors hover:bg-[#5B6B8C]/5">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm bg-[#7FA998]/20 text-[#7FA998] flex-shrink-0">
              {number}
            </div>
            <div className="flex-1 space-y-1">
              <h4 className="text-sm">{title}</h4>
              <p className="text-sm text-muted-foreground">{descriptor}</p>
            </div>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0"
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="px-4 pb-4 border-t border-border bg-card/50">
              <div className="pt-4 space-y-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  What changed in this module
                </div>

                <div className="space-y-3">
                  {improvements.map((improvement, idx) => {
                    const config = impactConfig[improvement.impact];
                    const Icon = config.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${config.color}20` }}
                        >
                          <Icon
                            className="w-3 h-3"
                            style={{ color: config.color }}
                          />
                        </div>
                        <p className="text-sm text-foreground flex-1">
                          {improvement.change}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Mini indicator bars */}
                <div className="pt-3 space-y-2">
                  {Array.from(
                    new Set(improvements.map((i) => i.impact))
                  ).map((impact) => {
                    const config = impactConfig[impact];
                    return (
                      <div key={impact} className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground w-24 flex-shrink-0">
                          {config.label}
                        </span>
                        <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: config.color }}
                            initial={{ width: 0 }}
                            animate={{
                              width: impact === 'cognitiveLoad' ? '40%' : '80%',
                            }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          />
                        </div>
                        <span className="text-xs" style={{ color: config.color }}>
                          {impact === 'cognitiveLoad' ? '↓' : '↑'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
