import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

type Props = {
    children: React.ReactNode;
};

const MasterLayout = ({ children }: Props) => {
    return (
        <>
            {/* <Header /> */}
            {children}
            <Footer />
        </>
    );
};

export default MasterLayout;
