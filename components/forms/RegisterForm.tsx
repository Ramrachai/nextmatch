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
import { FaEnvelope, FaFacebook, FaPhone, FaUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import PasswordInput from './shared/PasswordInput';

export default function RegisterForm() {
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
                <p className="text-md">Create New Accountt</p>
            </CardHeader>
            <Divider />
            <CardBody className="mt-4">
                <Input
                    type="text"
                    placeholder="Full name"
                    size="md"
                    startContent={<FaUser color="#666" />}
                />
                <Input
                    type="text"
                    placeholder="Mobile"
                    size="md"
                    startContent={<FaPhone color="#666" />}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    size="md"
                    startContent={<FaEnvelope color="#666" />}
                />
                <PasswordInput size="md" />
                <Button color="secondary" fullWidth>
                    Register
                </Button>

                <div className="text-sm flex items-center justify-center gap-3">
                    <span>Register with: </span>
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
                <Link href={'/login'} className="underline text-sm">
                    Already have an account ?
                </Link>
            </CardFooter>
        </Card>
    );
}
