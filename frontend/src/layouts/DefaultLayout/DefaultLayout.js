import classNames from 'classnames/bind';
import { useState } from 'react';

import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import { BarsIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [showSidebar, setShowSidebar] = useState(true);

    const handleToggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar showSidebar={showSidebar} handleToggleSidebar={handleToggleSidebar} />
                <button className={cx('bars-icon')} onClick={handleToggleSidebar}>
                    <BarsIcon />
                </button>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
