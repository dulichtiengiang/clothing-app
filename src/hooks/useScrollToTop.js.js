import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

const useScrollToTop = ({ children }) => {
    const { pathname } = useLocation();
    useLayoutEffect(() => {
        // window.scrollTo(0, 0);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [pathname]);
    return children || null;
};
export default useScrollToTop;
