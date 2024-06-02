'use client';
import { Input, InputProps } from '@nextui-org/react';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FaEnvelope } from 'react-icons/fa';

interface EmailFieldProps extends InputProps {
    size?: InputProps['size'];
    register: UseFormRegister<any>;
}
const EmailField: React.FC<EmailFieldProps> = ({
    size = 'md',
    register,
    ...rest
}) => {
    return (
        <Input
            startContent={<FaEnvelope color="#666" />}
            type="email"
            placeholder="email"
            size={size}
            defaultValue=""
            {...register('email')}
            {...rest}
        />
    );
};

export default EmailField;
