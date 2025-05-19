import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DiamondIcon from "@mui/icons-material/Diamond";
import dashboardCircle from "../assets/images/circle.svg";

function AdminDashboard() {
  return (
    <div className="grid gap-10 md:gap-12 flex-col">
      <div className="flex items-center gap-2">
        <span className="text-white px-2.5 py-2 rounded-sm from-[#109b1c] to-[#8ad270] bg-gradient-to-l flex">
          <HomeIcon color="inherit" sx={{ width: "16px", height: "16px" }} />
        </span>
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <ul className="flex flex-col flex-wrap lg:flex-nowrap md:flex-row justify-between gap-4 lg:gap-8 text-white tracking-wide">
        <l1 className="rounded-md p-8 md:p-12 relative from-[#ecc900] to-[#f9d966] bg-gradient-to-l w-full">
          <div className="flex items-baseline gap-2">
            <h2 className="mb-4 whitespace-nowrap text-xl leading-none">
              weekly sales
            </h2>
            <CalendarTodayIcon
              color="inherit"
              sx={{ width: "24px", height: "24px" }}
            />
          </div>
          <p className="font-semibold text-4xl whitespace-nowrap mb-8">
            $ 12,000
          </p>
          <p className="text-sm font-medium">Increase by 60%</p>
          <img
            className="absolute top-0 right-0 h-full"
            src={dashboardCircle}
          />
        </l1>
        <l1 className="rounded-md p-8 md:p-12 relative from-[#FE8D96] to-[#f7a4ab] bg-gradient-to-l w-full">
          <div className="flex items-baseline gap-2">
            <h2 className="mb-4 text-xl whitespace-nowrap leading-none">
              Weekly orders
            </h2>
            <BookmarkBorderIcon
              color="inherit"
              sx={{ width: "24px", height: "24px" }}
            />
          </div>
          <p className="font-semibold text-4xl whitespace-nowrap mb-8">
            12,000
          </p>
          <p className="text-sm font-medium">Increase by 60%</p>
          <img
            className="absolute top-0 right-0 h-full"
            src={dashboardCircle}
          />
        </l1>
        <l1 className="rounded-md p-8 md:p-12 relative from-[#3096E7] to-[#8fc2ed] bg-gradient-to-l w-full">
          <div className="flex items-baseline gap-2">
            <h2 className="mb-4 text-xl whitespace-nowrap leading-none">
              Total orders
            </h2>
            <DiamondIcon
              color="inherit"
              sx={{ width: "24px", height: "24px" }}
            />
          </div>
          <p className="font-semibold text-4xl whitespace-nowrap mb-8">
            12,000
          </p>
          <p className="text-sm font-medium">Increase by 60%</p>
          <img
            className="absolute top-0 right-0 h-full"
            src={dashboardCircle}
          />
        </l1>
      </ul>
      {/* Recent Orders */}
      <div className="bg-white w-full overflow-auto rounded-md p-8 md:p-12">
        <h2 className="font-bold tracking-wide text-xl mb-8">Recent Orders</h2>
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-righ">
            <thead class="text-xs text-gray-700 uppercase">
              <tr className=" border-b border-[#EBEDF3]">
                <th scope="col" className="text-start p-4 whitespace-nowrap">
                  Product
                </th>
                <th scope="col" className="text-start p-4 whitespace-nowrap">
                  Order ID
                </th>
                <th scope="col" className="text-start p-4 whitespace-nowrap">
                  Date
                </th>
                <th scope="col" className="text-start p-4 whitespace-nowrap">
                  Customer name
                </th>
                <th scope="col" className="text-start p-4 whitespace-nowrap">
                  Status
                </th>
                <th scope="col" className="text-start p-4 whitespace-nowrap">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#EBEDF3]">
                <td className="p-4 whitespace-nowrap">Lorem Ipsum</td>
                <td className="p-4 w-36 whitespace-nowrap">#57319</td>
                <td className="p-4 w-36 whitespace-nowrap">April 8th,2025</td>
                <td className="p-4 w-42 whitespace-nowrap">Kavin</td>
                <td className="p-4 w-24 whitespace-nowrap">
                  <span className="py-1 px-2 bg-green-200/50 text-green-600 rounded-md text-xs tracking-wide uppercase">
                    Delivered
                  </span>
                </td>
                <td className="p-4 w-24 whitespace-nowrap">$5000.00</td>
              </tr>
              <tr className="border-b border-[#EBEDF3]">
                <td className="p-4 whitespace-nowrap">Lorem Ipsum</td>
                <td className="p-4 w-36 whitespace-nowrap">#57319</td>
                <td className="p-4 w-36 whitespace-nowrap">April 8th,2025</td>
                <td className="p-4 w-42 whitespace-nowrap">Kavin</td>
                <td className="p-4 w-24 whitespace-nowrap">
                  <span className="py-1 px-2 bg-yellow-200/50 text-yellow-600 rounded-md text-xs tracking-wide uppercase">
                    Shipped
                  </span>
                </td>
                <td className="p-4 w-24 whitespace-nowrap">$5000.00</td>
              </tr>
              <tr className="border-b border-[#EBEDF3]">
                <td className="p-4 whitespace-nowrap">Lorem Ipsum</td>
                <td className="p-4 w-36 whitespace-nowrap">#57319</td>
                <td className="p-4 w-36 whitespace-nowrap">April 8th,2025</td>
                <td className="p-4 w-42 whitespace-nowrap">Kavin</td>
                <td className="p-4 w-24 whitespace-nowrap">
                  <span className="py-1 px-2 bg-gray-200/50 text-gray-600 rounded-md text-xs tracking-wide uppercase">
                    Canceled
                  </span>
                </td>
                <td className="p-4 w-24 whitespace-nowrap">$5000.00</td>
              </tr>
              <tr className="border-b border-[#EBEDF3]">
                <td className="p-4 whitespace-nowrap">Lorem Ipsum</td>
                <td className="p-4 w-36 whitespace-nowrap">#57319</td>
                <td className="p-4 w-36 whitespace-nowrap">April 8th,2025</td>
                <td className="p-4 w-42 whitespace-nowrap">Kavin</td>
                <td className="p-4 w-24 whitespace-nowrap">
                  <span className="py-1 px-2 bg-green-200/50 text-green-600 rounded-md text-xs tracking-wide uppercase">
                    Delivered
                  </span>
                </td>
                <td className="p-4 w-24 whitespace-nowrap">$5000.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Recent Orders End*/}
    </div>
  );
}

export default AdminDashboard;
