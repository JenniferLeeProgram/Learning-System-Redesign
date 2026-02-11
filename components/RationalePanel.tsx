import { motion } from 'motion/react';
import { BookOpen, Target, RefreshCw } from 'lucide-react';

export function RationalePanel() {
  const rationales = [
    {
      icon: BookOpen,
      title: 'Structured pacing reduces cognitive load',
      description:
        'Breaking content into predictable, bite-sized units prevents working memory overload and supports consistent progress.',
    },
    {
      icon: Target,
      title: 'Scaffolding supports consistent progress',
      description:
        'Progressive difficulty and guided practice build confidence and reduce learner anxiety, especially for struggling students.',
    },
    {
      icon: RefreshCw,
      title: 'Earlier feedback improves self-regulation',
      description:
        'Immediate, actionable feedback enables learners to adjust their approach quickly, preventing compounding errors.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-card border border-border rounded-lg p-6 space-y-6"
    >
      <h4>Design Rationale</h4>
      <div className="space-y-5">
        {rationales.map((rationale, idx) => {
          const Icon = rationale.icon;
          return (
            <div key={idx} className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#5B6B8C]/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-[#5B6B8C]" />
              </div>
              <div className="space-y-1">
                <p className="text-sm">{rationale.title}</p>
                <p className="text-sm text-muted-foreground">{rationale.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
