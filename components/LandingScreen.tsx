import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface LandingScreenProps {
  onNavigate: () => void;
}

export function LandingScreen({ onNavigate }: LandingScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl tracking-tight text-foreground">
                Redesigning a Legacy Language Course
              </h1>
              <p className="text-xl text-muted-foreground">
                Improving learner autonomy, pacing, and feedback under real-world constraints
              </p>
            </div>

            {/* Description */}
            <div>
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                Compare a legacy learning system with an incremental redesign under real-world constraints.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Explore how product-level design decisions improve engagement, comprehension, and skill transfer.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                onClick={onNavigate}
                size="lg"
                className="gap-2 text-lg px-8 py-6 rounded-lg bg-[#5B6B8C] hover:bg-[#4A5A7B] text-white w-full sm:w-auto"
              >
                Explore the System Redesign
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Target Audience */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                DESIGNED FOR
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm">
                <span className="px-4 py-2 bg-muted rounded-full">Learning Experience Designers</span>
                <span className="px-4 py-2 bg-muted rounded-full">Instructional Designers</span>
                <span className="px-4 py-2 bg-muted rounded-full">Education Product Managers</span>
                <span className="px-4 py-2 bg-muted rounded-full">Higher-ed / EdTech Teams</span>
              </div>
            </div>
          </div>

          {/* Right Column - Animated Before/After Visualization */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-muted-foreground">BEFORE</div>
                <div className="text-sm text-muted-foreground">AFTER</div>
              </div>
              
              <div className="space-y-6">
                {/* Motivation */}
                <div className="space-y-2">
                  <div className="text-sm text-foreground">Motivation</div>
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#D4A574] rounded-full"
                        initial={{ width: '35%' }}
                        animate={{ width: '35%' }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#7FA998] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 0.8, delay: 1 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Cognitive Load */}
                <div className="space-y-2">
                  <div className="text-sm text-foreground">Cognitive Load</div>
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#D4A574] rounded-full"
                        initial={{ width: '85%' }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </div>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#D4A574] rounded-full"
                        initial={{ width: '85%' }}
                        animate={{ width: '35%' }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Confidence */}
                <div className="space-y-2">
                  <div className="text-sm text-foreground">Confidence</div>
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#D4A574] rounded-full"
                        initial={{ width: '30%' }}
                        animate={{ width: '30%' }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      />
                    </div>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#5B8BA0] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '80%' }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Skill Transfer */}
                <div className="space-y-2">
                  <div className="text-sm text-foreground">Skill Transfer</div>
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#D4A574] rounded-full"
                        initial={{ width: '40%' }}
                        animate={{ width: '40%' }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      />
                    </div>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#8B7FA9] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 0.8, delay: 1.3 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 text-xs text-muted-foreground text-center">
                Strategic redesign under real institutional constraints
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}