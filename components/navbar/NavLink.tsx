'use client';
import { NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
    href: string;
    label: string;
};

const NavLink = ({ href, label }: Props) => {
    const pathname = usePathname();
    return (
        <NavbarItem as={Link} href={href} isActive={pathname === href}>
            {label}
        </NavbarItem>
    );
};

export default NavLink;
