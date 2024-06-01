import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarContent,
    NavbarItem,
    Button,
} from '@nextui-org/react';

import NavLink from './NavLink';
import Link from 'next/link';
import Logo from '../Logo';

export default function App() {
    return (
        <Navbar
            disableAnimation
            isBordered
            classNames={{
                item: ['text-sm', 'data-[active]:text-secondary'],
            }}>
            <NavbarContent className="hidden sm:flex pr-3" justify="start">
                <NavbarBrand as={Link} href={'/'}>
                    <Logo />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavLink href="/members" label="Matches" />
                <NavLink href="/lists" label="Lists" />
                <NavLink href="/messages" label="messages" />
            </NavbarContent>

            <NavbarContent justify="end" className="hidden sm:flex">
                <NavbarItem>
                    <Button
                        as={Link}
                        href="/login"
                        color="secondary"
                        size="sm"
                        variant="flat"
                        className="w-max">
                        Login
                    </Button>
                </NavbarItem>

                <NavbarItem>
                    <Button
                        as={Link}
                        href="/register"
                        color="secondary"
                        variant="bordered"
                        size="sm"
                        className="w-max">
                        Register
                    </Button>
                </NavbarItem>
            </NavbarContent>

            {/* mobile menu section start  */}

            <NavbarContent className="sm:hidden" justify="start">
                <NavbarBrand as={Link} href={'/'}>
                    <Logo />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="sm:hidden" justify="end">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu className="items-center">
                <NavLink href="/members" label="Matches" />
                <NavLink href="/lists" label="Lists" />
                <NavLink href="/messages" label="messages" />

                <Button
                    as={Link}
                    href="/login"
                    color="secondary"
                    size="sm"
                    variant="flat"
                    className="w-max">
                    Login
                </Button>

                <Button
                    as={Link}
                    href="/register"
                    color="secondary"
                    variant="bordered"
                    size="sm"
                    className="w-max">
                    Register
                </Button>
            </NavbarMenu>
        </Navbar>
    );
}
