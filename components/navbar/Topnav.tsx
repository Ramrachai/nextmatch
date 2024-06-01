import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from '@nextui-org/react';
import NavLink from './NavLink';
import Logo from '../Logo';
export default function Topnav() {
    return (
        <>
            <Navbar
                className=""
                classNames={{
                    item: [
                        'text-gray-700',
                        'uppercase',
                        'text-sm',
                        'data-[active]:text-emerald-600',
                        'data-[active]:font-normal',
                    ],
                }}>
                <NavbarBrand as={Link} href={'/'}>
                    <Logo />
                    <span className="text-teal-600 ml-2 uppercase text-sm">
                        Life
                    </span>
                    <span className="text-gray-800 ml-1 uppercase text-sm ">
                        Partner
                    </span>
                </NavbarBrand>

                <NavbarContent justify="center">
                    <NavLink href="/members" label="Matches" />
                    <NavLink href="/lists" label="Lists" />
                    <NavLink href="/messages" label="Messages" />
                </NavbarContent>

                <NavbarContent justify="end">
                    <Button
                        as={Link}
                        href="/login"
                        size="sm"
                        variant="bordered"
                        color="default">
                        Login
                    </Button>
                    <Button
                        as={Link}
                        href="/register"
                        size="sm"
                        variant="bordered"
                        className="text-teal-600 border-teal-600">
                        Register
                    </Button>
                </NavbarContent>
            </Navbar>
        </>
    );
}
