'use client';

import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Input,
} from '@nextui-org/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import EmailField from './shared/EmailField';
import PasswordField from './shared/PasswordField';
import Link from 'next/link';
import SocialLogin from './shared/SocialLogin';
import { FaPhone, FaUser } from 'react-icons/fa';
import Logo from '../Logo';

const RegisterForm: React.FC = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data: any) => {
        console.log(data);
    };

    return (
        <Card className="max-w-[500px] mx-auto px-3 py-4">
            <CardHeader className="flex-col gap-2">
                <Logo />
                <p className="text-md">Create New Accountt</p>
            </CardHeader>
            <Divider />
            <CardBody>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4">
                    <Input
                        {...register('name')}
                        placeholder="Full name"
                        startContent={<FaUser color="#666" />}
                    />
                    <Input
                        {...register('mobile')}
                        placeholder="Mobile Number"
                        startContent={<FaPhone color="#666" />}
                    />
                    <EmailField register={register} />
                    <PasswordField register={register} />
                    <Button color="secondary" fullWidth type="submit">
                        Register
                    </Button>
                </form>
                <SocialLogin />
            </CardBody>
            <Divider />
            <CardFooter>
                <Link href={'/login'} className="underline text-sm">
                    Already have an account ?
                </Link>
            </CardFooter>
        </Card>
    );
};

export default RegisterForm;
