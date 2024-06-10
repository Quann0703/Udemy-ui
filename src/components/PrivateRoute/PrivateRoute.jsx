import { useEffect } from 'react';
import useAccount from '~/hooks/useAccount';
import useAuthModal from '~/hooks/useAuthModal';
import { openAuthModal } from '~/store/actions/authModalAction';

function PrivateRoute({ children }) {
    const {
        state: { isLogin },
    } = useAccount();
    const { dispatch } = useAuthModal();
    console.log(isLogin);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!isLogin) {
                dispatch(openAuthModal());
            }
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [isLogin, dispatch]);

    return isLogin ? children : <div></div>;
}

export default PrivateRoute;
