import { UserButton } from "@/features/auth/components/user-button";
import WorkspaceSwitcher from "./workspace-switcher";
import { SidebarButton } from "./sidebar-button";
import { Bell, Home, MessageSquare, MoreHorizontal } from "lucide-react";

const buttons = [
  {
    icon:Home,
    label:"Home",
    isActive:true
  },
  {
    icon:MessageSquare,
    label:"DMs",
    isActive:false
  },
  {
    icon:Bell,
    label:"Activity",
    isActive:false
  },
  {
    icon:MoreHorizontal,
    label:"More",
    isActive:false
  }
]

const Sidebar = () => {
  return ( 
    <aside className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-[9px] pb-4">
      <WorkspaceSwitcher/>
      {
        buttons.map((button,i)=>(
          <SidebarButton 
            key={i}
            Icon={button.icon}
            label={button.label}
            isActive={button.isActive}
          />
        ))
      }
      <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
        <UserButton/>
      </div>
    </aside>
   );
}
 
export default Sidebar;