import { Button } from '@nextui-org/react';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin: React.FC = () => {
    return (
        <div className="mt-3 text-sm flex items-center justify-center gap-3">
            <span className="text-xs sm:text-sm">or continue with: </span>
            <Button aria-label="login with google" color="secondary" size="sm">
                <FcGoogle size={20} /> Google
            </Button>

            <Button
                aria-label="login with facebook"
                color="secondary"
                size="sm">
                <FaFacebook size={20} color="#0866ff" /> Facebook
            </Button>
        </div>
    );
};

export default SocialLogin;
