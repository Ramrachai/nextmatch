import Image, { ImageProps } from 'next/image';
import logoW from '@/assets/images/jumene-white.png';
import logoB from '@/assets/images/jumene-black.png';
import React from 'react';

interface LogoProps {
    color?: 'black' | 'white';
}

const Logo: React.FC<LogoProps> = ({ color = 'black', ...rest }) => {
    const src = color === 'black' ? logoB : logoW;

    return (
        <Image
            alt="Jumene Logo"
            height={40}
            width={100}
            src={src}
            quality={90}
            loading="lazy"
            placeholder="empty"
            {...rest}
        />
    );
};

export default Logo;
