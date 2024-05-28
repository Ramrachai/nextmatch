import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const MembersPage = () => {
    return (
        <div>
            <h2>This is Members page</h2>
            <Button as={Link} href="/" color="primary">
                Goto Home
            </Button>
        </div>
    );
};

export default MembersPage;
