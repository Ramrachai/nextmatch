'use client';
import { NavbarItem, NavbarItemProps } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props extends NavbarItemProps {
    href: string;
    label: string;
}

const NavLink = ({ href, label, ...rest }: Props) => {
    const pathname = usePathname();
    return (
        <NavbarItem
            as={Link}
            href={href}
            isActive={pathname === href}
            {...rest}>
            {label}
        </NavbarItem>
    );
};

export default NavLink;
