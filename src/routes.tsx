import { Link } from 'react-router-dom';

export const routes = [
    {
        index: true,
        path: '/',
        element: (
            <>
                <Link to="/apply">Apply</Link>
            </>
        ),
    },
    {
        path: '/apply',
        element: <p>A route for the #1 step</p>,
    },
    {
        path: '/confirm',
        element: <p>A route for the #2 step</p>,
    },
    {
        path: '/success',
        element: <p>A route for the success step</p>,
    },
];
