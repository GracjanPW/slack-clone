"use client"
import Sidebar from "./sidebar";
import Toolbar from "./toolbar";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle
} from "@/components/ui/resizable"
import WorkspaceSidebar from "./workspace-sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const WorkspaceLayout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full">
      <Toolbar />
      <div className="flex h-[calc(100vh-40px)]">
        <Sidebar/>
        <ResizablePanelGroup
          direction={'horizontal'}
          autoSaveId={"slack-clone-layout"}
        >
          <ResizablePanel
            defaultSize={20}
            minSize={15}
            className="bg-[#5e2c5f]"
          >
            <WorkspaceSidebar/>
          </ResizablePanel>
          <ResizableHandle withHandle/>
          <ResizablePanel
            defaultSize={20}
            minSize={20}
          >
            {children}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default WorkspaceLayout;
