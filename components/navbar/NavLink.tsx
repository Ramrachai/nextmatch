'use client';
import { NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
    href: string;
    label: string;
    className?: string;
};

const NavLink = ({ href, label, className }: Props) => {
    const pathname = usePathname();
    return (
        <NavbarItem
            as={Link}
            href={href}
            isActive={pathname === href}
            className={`${className}`}>
            {label}
        </NavbarItem>
    );
};

export default NavLink;
