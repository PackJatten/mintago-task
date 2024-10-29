import { FormProvider, useForm } from 'react-hook-form';
import PensionDataEntry from './PensionDataEntry';
import { useState } from 'react';
import PensionSummary from './PensionSummary';
import { AnimatePresence, motion } from 'framer-motion';

const PensionTracker = () => {
  const methods = useForm({ mode: 'onChange', defaultValues: { pots: 0 } });
  const [onSummary, setOnSummary] = useState<boolean>(false);
  const variants = {
    entry: { y: -20, opacity: 0 },
    appear: { y: 0, opacity: 1 },
  };
  return (
    <FormProvider {...methods}>
      <AnimatePresence mode="wait">
        <div className="relative flex flex-col justfy-center">
          {!onSummary && (
            <motion.div
              data-testid="data-entry-container"
              className="absolute w-full"
              key="data-entry"
              initial="entry"
              animate="appear"
              exit="entry"
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <PensionDataEntry toggleSection={() => setOnSummary(true)} />
            </motion.div>
          )}
          {onSummary && (
            <motion.div
              data-testid="summary-container"
              className="absolute w-full"
              key="data-summary"
              initial="entry"
              animate="appear"
              exit="entry"
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <PensionSummary toggleSection={() => setOnSummary(false)} />
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </FormProvider>
  );
};

export default PensionTracker;
