import avatar from "../assets/images/avatar.jpg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 lg:px-8 bg-white ">
      <div className="flex md:gap-16 text-[#599a5e] font-bold">
        <a href="/">
          <p>CSTORE</p>
        </a>
        <button className="hidden md:block cursor-pointer text-[#9c9fa6]">
          <MenuOutlinedIcon color="inherit" />
        </button>
      </div>
      <div className="flex gap-6 md:gap-12 lg:gap-40">
        <div className="hidden md:flex gap-2 items-center">
          <label for="search-bar" className="cursor-pointer text-[#9c9fa6]">
            <SearchOutlinedIcon color="action" fontSize="string" />
          </label>
          <input
            type="text"
            id="search-bar"
            placeholder="Search products"
            className="py-1 px-2 outline-0"
          />
        </div>
        <ul className="flex gap-6 md:gap-10 items-center">
          <li className="flex gap-2 md:gap-4 items-center">
            <div className="cursor-pointer">
              <img className="rounded-full h-8 w-8" src={avatar} />
            </div>
            <div className="cursor-pointer">
              <p className="hidden md:block">admin</p>
            </div>
          </li>
          <li className="cursor-pointer text-[#9c9fa6]">
            <EmailOutlinedIcon color="inherit" fontSize="small" />
          </li>
          <li className="cursor-pointer text-[#9c9fa6]">
            <NotificationsNoneOutlinedIcon color="inherit" fontSize="small" />
          </li>
        </ul>
        <button className="md:hidden cursor-pointer text-[#9c9fa6]">
          <MenuOutlinedIcon color="action" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
