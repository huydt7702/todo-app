import { Link } from 'react-router-dom';
import { ClearIcon, SearchIcon } from '~/components/Icons';
import Image from '~/components/Image/Image';
import config from '~/config';

function Header() {
    return (
        <header className="flex items-center h-[48px] bg-[#2564cf] justify-between px-4">
            <Link to={config.routes.home} className="font-semibold text-white hover:underline">
                To Do
            </Link>

            <div className="relative flex items-center w-[400px]">
                <span className="absolute top-0 lef-0 bottom-0 flex items-center justify-center px-[8px] cursor-pointer text-[#2564cf] hover:bg-[rgba(0,0,0,0.05)] transition-colors">
                    <SearchIcon />
                </span>
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 py-[8px] px-[40px] h-[32px] rounded-md text-xl"
                />
                <span className="absolute top-0 bottom-0 right-0 flex items-center justify-center px-[8px] cursor-pointer text-[#2564cf] hover:bg-[rgba(0,0,0,0.05)] transition-colors">
                    <ClearIcon />
                </span>
            </div>

            <div className="flex items-center justify-center h-full w-[48px] hover:bg-[#005A9E] transition-colors cursor-pointer">
                <Image
                    className="rounded-full w-[32px] h-[32px] object-cover border-[1px] border-solid border-white"
                    src="https://yt3.ggpht.com/yti/AHyvSCB28-vRqPO18qUYbFvjBwj7JvCFh9Bh4dlOQWe1DA=s88-c-k-c0x00ffffff-no-rj-mo"
                    alt="User"
                />
            </div>
        </header>
    );
}

export default Header;
