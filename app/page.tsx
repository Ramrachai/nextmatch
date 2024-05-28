import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { FaSmile } from 'react-icons/fa';

export default function Home() {
    return (
        <main>
            <h2>Hello Next match</h2>
            <Button
                startContent={<FaSmile size={30} />}
                color="primary"
                variant="bordered">
                Solid
            </Button>
        </main>
    );
}
