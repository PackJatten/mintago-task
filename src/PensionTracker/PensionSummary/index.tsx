import { useFormContext } from 'react-hook-form';
import PensionGraph from './PensionGraph';
import { Button } from '@headlessui/react';
import { motion } from 'framer-motion';
import { calculateDesiredPension, calculatePension } from './utils';
import { TPensionSection } from '../index.types';

const PensionSummary = (props: TPensionSection) => {
  const { toggleSection } = props;
  const { getValues } = useFormContext();
  const { pensionTotal, savingsPerYear, ranOut } =
    calculatePension(getValues());
  const { goalPensionTotal, goalSavingsPerYear } =
    calculateDesiredPension(getValues());

  return (
    <div className="flex flex-col md:flex-row border border-gray-300 rounded-xl shadow-xl p-6 bg-gradient-to-r from-blue-50 to-indigo-50 space-y-6 md:space-y-0 md:space-x-8">
      {savingsPerYear && (
        <motion.div
          className="w-full md:w-3/5 p-4 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          <PensionGraph
            data={[
              {
                name: 'Predicted Savings',
                data: savingsPerYear,
                stroke: pensionTotal >= goalPensionTotal ? 'green' : 'red',
              },
              {
                name: 'Goal Savings',
                data: goalSavingsPerYear,
                stroke: '#e16f54',
                className:
                  'opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out',
              },
            ]}
          />
        </motion.div>
      )}
      <div className="flex flex-col w-full md:w-2/5 space-y-6 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold text-indigo-800 mb-4">
          Pension Summary
        </h3>

        <div className="flex justify-between text-sm text-gray-600 border-b pb-2">
          <span>Predicted Pension:</span>
          <span className="font-semibold text-indigo-900">£{pensionTotal}</span>
        </div>

        <div className="flex justify-between text-sm text-gray-600 border-b pb-2">
          <span>Goal Pension:</span>
          <span className="font-semibold text-indigo-900">
            £{goalPensionTotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-sm text-gray-600 border-b pb-2">
          <span>Goal Success:</span>
          {goalPensionTotal <= pensionTotal ? (
            <span className="font-semibold text-green-600">100%</span>
          ) : (
            <span className="font-semibold text-red-500">
              {`${((pensionTotal / goalPensionTotal) * 100).toFixed(2)}%`}
            </span>
          )}
        </div>

        <div className="text-left mt-4">
          <p className="text-gray-700 leading-relaxed">
            {goalPensionTotal <= pensionTotal ? (
              'Congratulations on being on track to meet your pension goal! Your diligent savings and thoughtful planning are paying off, ensuring you’re well-prepared for a comfortable retirement. Continue making regular contributions and reviewing your plan to maintain this positive trajectory as your circumstances and aspirations evolve.'
            ) : (
              <span>
                Currently, you are not on track to meet your pension goal, which
                may impact your future financial security. To get back on track,
                consider increasing your contributions to your pension plan. By
                committing to larger, more consistent investments, you can
                better align your savings with your target and work towards
                securing the retirement you desire. <br />
                <span className="text-red-600 font-semibold">
                  You would run out of money at the age of <b>{ranOut}</b>.
                </span>
              </span>
            )}
          </p>
        </div>

        <Button
          onClick={() => toggleSection()}
          className="height-max mt-6 w-full py-3 px-5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        >
          Return to Data Entry
        </Button>
      </div>
    </div>
  );
};

export default PensionSummary;
