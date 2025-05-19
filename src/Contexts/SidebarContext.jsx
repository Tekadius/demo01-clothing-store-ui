import { createContext, useState } from "react";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev); // for md sidebar
  const toggleMobileSidebar = () => setIsMobileSidebarOpen((prev) => !prev);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        isMobileSidebarOpen,
        setIsSidebarOpen,
        setIsMobileSidebarOpen,
        toggleSidebar,
        toggleMobileSidebar,
      }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
