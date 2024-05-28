import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSmile } from 'react-icons/fa';

export default function Home() {
    return (
        <main>
            <h2>Hello Next match</h2>
            <h1>This is home page</h1>
            <Button
                as={Link}
                href="/members"
                startContent={<FaSmile size={30} />}
                color="primary"
                variant="bordered">
                Goto Members page
            </Button>
        </main>
    );
}
