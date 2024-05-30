'use client';
import React, { useState } from 'react';
import { Input } from '@nextui-org/react';
import { FaEye, FaEyeSlash, FaKey } from 'react-icons/fa';

type Props = {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
};

export default function PasswordInput({ className, size }: Props) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <Input
            size={size || 'sm'}
            startContent={<FaKey color="#666" />}
            placeholder="Password"
            endContent={
                <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}>
                    {isVisible ? (
                        <FaEyeSlash
                            color="#666"
                            size={16}
                            className=" pointer-events-none"
                        />
                    ) : (
                        <FaEye
                            color="#666"
                            size={16}
                            className=" pointer-events-none"
                        />
                    )}
                </button>
            }
            type={isVisible ? 'text' : 'password'}
            className={`${className}`}
        />
    );
}
