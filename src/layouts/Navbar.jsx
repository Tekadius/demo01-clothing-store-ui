import avatar from "../assets/images/avatar.jpg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar } from "@mui/material";
import { use } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";

function Navbar() {
  const {toggleMobileSidebar} = use(SidebarContext)
  return (
    <nav className="flex sticky top-0 right-0 justify-between items-center p-4 bg-white z-40">
      <div className="flex md:gap-16 text-[#599a5e] font-bold">
        <a href="/" className="md:hidden">
          <h1>CSTORE</h1>
        </a>
        <button className="hidden md:block md:mr-8 cursor-pointer text-[#9c9fa6]">
          <MenuOutlinedIcon color="inherit" />
        </button>
      </div>
      <div className="flex gap-6 lg:gap-40">
        <div className="hidden md:flex gap-2 items-center">
          <label htmlFor="search-bar" className="cursor-pointer text-[#9c9fa6]">
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
            <Avatar
              src={avatar}
              sx={{
                bgcolor: "9c9fa6",
                width: "32px",
                height: "32px",
                cursor: "pointer",
              }}
            />
            <div className="cursor-pointer">
              <p className="hidden md:block">Umar</p>
            </div>
          </li>
          <li className="cursor-pointer text-[#9c9fa6]">
            <EmailOutlinedIcon color="inherit" fontSize="small" />
          </li>
          <li className="cursor-pointer text-[#9c9fa6]">
            <NotificationsNoneOutlinedIcon color="inherit" fontSize="small" />
          </li>
        </ul>
        <button className="md:hidden cursor-pointer text-[#9c9fa6]" onClick={toggleMobileSidebar}>
          <MenuOutlinedIcon color="action" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
