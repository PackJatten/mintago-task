import { Description, Field, Input, Label } from '@headlessui/react';
import clsx from 'clsx';
import { TInput } from './input.types';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { motion } from 'framer-motion';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const FormInput = (props: TInput) => {
  const { name, label, description, validation, placeholder } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <motion.div
      animate={{
        paddingBottom: errors[name] ? '8px' : '4px',
      }}
      className="w-full px-4 relative"
    >
      <Field className="flex flex-col">
        <Label
          className={clsx(
            'text-sm font-semibold text-left text-black',
            !description && 'mb-2'
          )}
        >
          {label}
        </Label>
        {description && (
          <Description className="text-xs text-left text-gray-500 mb-1">
            {description}
          </Description>
        )}
        <Input
          {...register(name, validation)}
          placeholder={placeholder}
          className={clsx(
            'mt-2 block w-full border border-gray-300 rounded-lg shadow-md py-2 px-3 text-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500',
            errors[name] && 'border-red-500 ring-2 ring-red-500'
          )}
          type="number"
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 mt-1 text-red-500 text-xs font-medium"
            >
              <ExclamationTriangleIcon width={16} className="text-red-500" />
              <span>{message}</span>
            </motion.div>
          )}
        />
      </Field>
    </motion.div>
  );
};

export default FormInput;
