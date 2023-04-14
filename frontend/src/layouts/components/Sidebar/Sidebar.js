import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import { BarsIcon, CalendarIcon, HomeIcon, StarIcon, TheSunIcon, UserIcon } from '~/components/Icons';
import config from '~/config';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const sidebarList = [
    {
        id: 1,
        icon: TheSunIcon,
        to: config.routes.myday,
        title: 'Ngày của tôi',
    },
    {
        id: 2,
        icon: StarIcon,
        to: config.routes.important,
        title: 'Quan trọng',
    },
    {
        id: 3,
        icon: CalendarIcon,
        to: config.routes.planned,
        title: 'Đã lập kế hoạch',
    },
    {
        id: 4,
        icon: UserIcon,
        to: config.routes.assignedToMe,
        title: 'Đã giao cho tôi',
    },
    {
        id: 5,
        icon: HomeIcon,
        to: config.routes.inbox,
        title: 'Tác vụ',
    },
];

function Sidebar({ showSidebar, handleToggleSidebar }) {
    return (
        <aside
            className="w-[290px] h-screen border-solid border-r-[1px] border-[rgba(0,0,0,0.1)]"
            style={{ display: showSidebar ? 'block' : 'none' }}
        >
            <div className="mt-[16px] px-[24px] h-[48px] flex items-center">
                <button onClick={handleToggleSidebar}>
                    <BarsIcon />
                </button>
            </div>
            <ul>
                {sidebarList.map((item) => {
                    const Icon = item.icon;

                    return (
                        <li key={item.id} className="relative hover:bg-[#f5f5f5] transition-colors">
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    cx('flex', 'items-center', 'text-2xl', 'px-[24px]', 'py-[12px]', {
                                        active: isActive,
                                    })
                                }
                            >
                                <Icon />
                                <span className="ml-[16px]">{item.title}</span>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}

export default Sidebar;
