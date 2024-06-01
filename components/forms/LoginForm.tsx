import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Input,
    Button,
} from '@nextui-org/react';
import Link from 'next/link';
import { FaEnvelope, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import PasswordInput from './shared/PasswordInput';
import Logo from '../Logo';

export default function LoginForm() {
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
                <Logo color="black" className="block" />
                <p className="text-md">Log in to your account</p>
            </CardHeader>
            <Divider />
            <CardBody className="mt-4">
                <Input
                    startContent={<FaEnvelope color="#666" />}
                    type="email"
                    placeholder="Email"
                    size="md"
                />
                <PasswordInput size="md" />
                <Button color="secondary" fullWidth>
                    Login
                </Button>

                <div className="mt-3 text-sm flex items-center justify-center gap-3">
                    <span>Login with: </span>
                    <Button
                        isIconOnly
                        aria-label="login with google"
                        color="secondary">
                        <FcGoogle size={26} />
                    </Button>

                    <Button
                        isIconOnly
                        aria-label="login with facebook"
                        color="secondary">
                        <FaFacebook size={26} />
                    </Button>
                </div>
            </CardBody>
            <CardFooter>
                <Link href="#" className="underline text-sm">
                    Forgot Passowrd?
                </Link>
                <Link href={'/register'} className="underline text-sm">
                    {"Don't"} have an account ?
                </Link>
            </CardFooter>
        </Card>
    );
}