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
import { SubmitHandler, useForm } from 'react-hook-form';
import EmailField from './shared/EmailField';
import PasswordField from './shared/PasswordField';
import Link from 'next/link';
import SocialLogin from './shared/SocialLogin';
import { FaPhone, FaUser } from 'react-icons/fa';
import Logo from '../Logo';

interface FormType {
    name: string;
    mobile: number;
    email: string;
    password: string;
}

const RegisterForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormType>({
        mode: 'onTouched',
    });

    const onSubmit: SubmitHandler<FormType> = async (data) => {
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
                        {...register('name', {
                            required: 'Required',
                            minLength: {
                                value: 3,
                                message:
                                    'Name must be at least 3 characters long',
                            },
                            pattern: {
                                value: /^[a-zA-Z]+(?:[-' ][a-zA-Z]+)*$/,
                                message:
                                    'Name must contain only letters and spaces',
                            },
                            setValueAs: (value) => value.trim(),
                        })}
                        type="text"
                        placeholder="Full name"
                        startContent={<FaUser color="#666" />}
                        isInvalid={!!errors.name}
                        errorMessage={errors.name?.message as string}
                    />
                    <Input
                        {...register('mobile', {
                            required: 'Required',
                            pattern: {
                                value: /^(017|016|013|016|014|018|019|015)\d{8}$/,
                                message: 'Invalid Mobile Number',
                            },
                        })}
                        type="number"
                        placeholder="Mobile Number"
                        startContent={<FaPhone color="#666" />}
                        isInvalid={!!errors.mobile}
                        errorMessage={errors.mobile?.message as string}
                    />
                    <EmailField register={register} errors={errors} />
                    <PasswordField register={register} errors={errors} />
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
