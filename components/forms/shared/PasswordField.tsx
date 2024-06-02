import React, { useState } from 'react';
import { Input, InputProps } from '@nextui-org/react';
import { FaEye, FaEyeSlash, FaKey } from 'react-icons/fa';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface PasswordFieldProps extends InputProps {
    register: UseFormRegister<any>;
    size?: InputProps['size'];
    errors: FieldErrors;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
    size = 'md',
    register,
    errors,
    ...rest
}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <Input
            size={size}
            placeholder="Password"
            startContent={<FaKey color="#666" />}
            type={isVisible ? 'text' : 'password'}
            endContent={
                <button
                    className="focus:outline-none"
                    type="button"
                    onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? (
                        <FaEyeSlash
                            color="#666"
                            className="pointer-events-none"
                        />
                    ) : (
                        <FaEye color="#666" className="pointer-events-none" />
                    )}
                </button>
            }
            {...register('password', {
                required: 'Password is required',
                minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long',
                },
                pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[.,/\\|(){}\[\]+=-_^#~!:;'"`])[a-zA-Z\d.,/\\|(){}\[\]!:;'"+=-_^#~`]+$/,
                    message:
                        'Password Must contain character, number and symbol',
                },
            })}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message as string}
            {...rest} // Spread additional props here
        />
    );
};

export default PasswordField;
