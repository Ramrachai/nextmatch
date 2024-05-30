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
import logo from '../../assets/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import PasswordInput from './shared/PasswordInput';

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
            <CardHeader className="flex justify-center gap-3">
                <Image alt="logo" height={50} src={logo} width={50} />
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

                <div className="text-sm flex items-center justify-center gap-3">
                    <span>Login with: </span>
                    <Button
                        variant="ghost"
                        isIconOnly
                        aria-label="login with google"
                        className="flex-1 border-red-400">
                        <FcGoogle size={26} />
                    </Button>

                    <Button
                        variant="ghost"
                        isIconOnly
                        aria-label="login with facebook"
                        className="flex-1 border-blue-500">
                        <FaFacebook color="#0866ff" size={26} />
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
