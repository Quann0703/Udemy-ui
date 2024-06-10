import ModalProvider from './ModalProvider';
import AuthModalProvider from './AuthModalProvider';
import AccountProvider from './AccountProvider';
function Provider({ children }) {
    return (
        <AccountProvider>
            <AuthModalProvider>
                <ModalProvider>{children}</ModalProvider>
            </AuthModalProvider>
        </AccountProvider>
    );
}

export default Provider;
