import { useFormContext } from 'react-hook-form';
import FormInput from '../components/FormInput';
import { Button } from '@headlessui/react';

const PensionDataEntry = (props) => {
  const { calculatePension } = props;
  const methods = useFormContext();

  const onSubmit = () => {
    calculatePension();
  };

  return (
    <div className="flex flex-col gap-0 p-6 border border-gray-300 rounded-xl shadow-xl bg-gradient-to-r from-blue-50 to-indigo-50">
      <form className="space-y-6">
        <FormInput
          name="retirementAge"
          label="Retirement Age"
          validation={{
            required: 'Retirement age is required',
            min: {
              value: 26,
              message:
                'You need to work for at least 1 year to get your pension',
            },
            max: {
              value: 81,
              message: 'You die at 81, you can’t retire past that',
            },
          }}
          placeholder="66"
          description="The age you wish to retire"
        />

        <FormInput
          name="retirementIncome"
          label="Retirement Income per Year "
          validation={{
            required: 'Retirement income is required',
            min: { value: 1, message: 'Value must be at least 1' },
            max: {
              value: 1000000,
              message:
                'Exceeded maximum retirement income; please enter a value less than £1,000,000',
            },
          }}
          placeholder="16000"
          description="Your desired yearly retirement income (£)"
        />

        <FormInput
          name="salary"
          label="Salary"
          validation={{
            required: 'Salary is required',
            max: {
              value: 100000000,
              message:
                'Exceeded maximum salary; please enter a value less than £100,000,000',
            },
          }}
          placeholder="38000"
          description="Your yearly income (£)"
        />

        <div className="flex flex-col lg:flex-row gap-0 lg:space-x-4">
          <FormInput
            name="employeeContribution"
            label="Employee Contribution %"
            validation={{
              required: 'Employee Contribution is required',
              min: { value: 1, message: 'Value must be at least 1' },
              max: { value: 100, message: 'Value must be 100 or less' },
            }}
            placeholder="10"
            description="What percentage you put in"
          />
          <FormInput
            name="employerContribution"
            label="Employer Contribution %"
            validation={{
              max: { value: 100, message: 'Value must be 100 or less' },
            }}
            placeholder="5"
            description="What percentage your employer puts in"
          />
        </div>
      </form>

      <div className="flex justify-end items-center mt-6">
        <Button
          className="rounded-lg bg-indigo-600 text-white font-medium py-3 px-5 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!methods.formState.isValid}
          onClick={methods.handleSubmit(onSubmit)}
          type="submit"
        >
          Calculate Pension
        </Button>
      </div>
    </div>
  );
};

export default PensionDataEntry;
