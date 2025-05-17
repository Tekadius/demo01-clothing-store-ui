import { Avatar } from "@mui/material";
import avatar from "../assets/images/avatar.jpg";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import HomeIcon from "@mui/icons-material/Home";

function SideBar() {
  return (
    <div className="md:px-8">
      <div className="text-center text-[#599a5e] font-bold p-4 md:p-6">
        <h1 href="/">
          <p>CSTORE</p>
        </h1>
      </div>
      <div className="text-sm text-[#353535] md:py-4 tracking-wide">
        <div className="flex gap-4 items-center">
          <Avatar
            src={avatar}
            sx={{
              bgcolor: "9c9fa6",
              width: "46px",
              height: "46px",
              cursor: "pointer",
            }}
          />
          <div className="items-center">
            <p className="font-bold whitespace-nowrap mb-1">Umar J.</p>
            <p className="text-xs whitespace-nowrap text-[#5c5c5c]">
              Project Manager
            </p>
          </div>
          <div className="text-[#ee5f3b]">
            <WorkspacePremiumIcon
              color="inherit"
              sx={{ width: "20px", height: "20px" }}
            />
          </div>
        </div>
        <ul className="flex flex-col gap-12 my-12">
          <li className="flex justify-between items-center text-[#109b1c]">
            <button className="cursor-pointer p-0.5">Dashboard</button>
            <HomeIcon color="inherit" sx={{ width: "20px", height: "20px" }} />
          </li>
          <li className="flex justify-between items-center text-[#364e38]">
            <button className="cursor-pointer p-0.5">Products</button>
            <InventoryIcon
              color="inherit"
              sx={{ width: "20px", height: "20px" }}
            />
          </li>
          <li className="flex justify-between items-center text-[#364e38]">
            <button className="cursor-pointer p-0.5">Categories</button>
            <CategoryIcon
              color="inherit"
              sx={{ width: "20px", height: "20px" }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
