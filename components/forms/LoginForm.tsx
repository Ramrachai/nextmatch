'use client';
import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Button,
} from '@nextui-org/react';
import Link from 'next/link';

import Logo from '../Logo';
import { useForm } from 'react-hook-form';
import PasswordField from './shared/PasswordField';
import EmailField from './shared/EmailField';
import SocialLogin from './shared/SocialLogin';

interface FormType {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormType>({
        mode: 'onTouched',
    });

    const onSubmit = async (data: FormType) => {
        console.log(data);
    };

    return (
        <Card
            className="max-w-[500px] mx-auto px-3 py-4"
            shadow="sm"
            radius="sm"
            isBlurred
            classNames={{
                body: ['gap-4'],
                footer: ['flex-wrap', 'gap-3', 'justify-between'],
            }}>
            <CardHeader className="flex justify-center gap-3 items-center flex-col">
                <Logo color="black" />
                <p className="text-md">Log in to your account</p>
            </CardHeader>

            <Divider />

            <CardBody className="mt-4">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex gap-4 flex-col">
                    <EmailField register={register} errors={errors} />
                    <PasswordField register={register} errors={errors} />
                    <Button color="secondary" type="submit" fullWidth>
                        Login
                    </Button>
                </form>
                <SocialLogin />
            </CardBody>
            <CardFooter>
                <Link href="#" className="underline text-sm">
                    Forgot Password?
                </Link>
                <Link href={'/register'} className="underline text-sm">
                    {"Don't"} have an account?
                </Link>
            </CardFooter>
        </Card>
    );
};

export default LoginForm;
