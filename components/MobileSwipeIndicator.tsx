import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileSwipeIndicatorProps {
  showLeft?: boolean;
  showRight?: boolean;
}

export function MobileSwipeIndicator({ showLeft, showRight }: MobileSwipeIndicatorProps) {
  return (
    <div className="lg:hidden flex items-center justify-center gap-4 py-2">
      {showLeft && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-1 text-sm text-muted-foreground"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Swipe</span>
        </motion.div>
      )}
      {showRight && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-1 text-sm text-muted-foreground"
        >
          <span>Swipe</span>
          <ChevronRight className="w-4 h-4" />
        </motion.div>
      )}
    </div>
  );
}
