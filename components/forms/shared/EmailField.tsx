import { Input, InputProps } from '@nextui-org/react';
import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FaEnvelope } from 'react-icons/fa';

interface EmailFieldProps extends InputProps {
    size?: InputProps['size'];
    register: UseFormRegister<any>;
    errors: FieldErrors;
}
const EmailField: React.FC<EmailFieldProps> = ({
    size = 'md',
    register,
    errors,
    ...rest
}) => {
    return (
        <Input
            startContent={<FaEnvelope color="#666" />}
            type="email"
            placeholder="email"
            size={size}
            defaultValue=""
            {...register('email', {
                required: 'Email is required',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                    message: 'Email is invalid',
                },
            })}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message as string}
            {...rest}
        />
    );
};

export default EmailField;
