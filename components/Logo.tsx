import Image from 'next/image';
import logoW from '@/assets/images/jumene-white.png';
import logoB from '@/assets/images/jumene-black.png';
import React from 'react';

interface LogoProps {
    color?: 'black' | 'white';
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'black', className }) => {
    return (
        <Image
            alt="Jumene logo"
            height={50}
            src={color == 'black' ? logoB : logoW}
            width={80}
            className={`${className}`}
        />
    );
};

export default Logo;
