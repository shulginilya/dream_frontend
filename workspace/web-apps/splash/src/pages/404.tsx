import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const { push } = useRouter();

    useEffect(() => {
        push('http://localhost:4000');
    }, []);

    return (
        <div>404</div>
    );
};

export default NotFound;
