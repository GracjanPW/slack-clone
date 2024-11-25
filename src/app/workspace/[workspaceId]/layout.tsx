"use client"
import Sidebar from "./sidebar";
import Toolbar from "./toolbar";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle
} from "@/components/ui/resizable"
import WorkspaceSidebar from "./workspace-sidebar";
import { usePannel } from "@/hooks/use-pannel";
import { Loader } from "lucide-react";
import { Id } from "../../../../convex/_generated/dataModel";
import { Thread } from "@/features/messages/components/thread";
import { Profile } from "@/features/members/components/profile";

interface LayoutProps {
  children: React.ReactNode;
}

const WorkspaceLayout = ({ children }: LayoutProps) => {
  const { parentMessageId, profileMemberId, onClose} = usePannel();

  const showPanel = !!parentMessageId || !!profileMemberId;

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
            minSize={11}
            className="bg-[#5e2c5f]"
          >
            <WorkspaceSidebar/>
          </ResizablePanel>
          <ResizableHandle withHandle/>
          <ResizablePanel
            minSize={20}
          >
            {children}
          </ResizablePanel>
          {showPanel && (
            <>
            <ResizableHandle withHandle/>
            <ResizablePanel minSize={20} defaultSize={29}>
              {parentMessageId ? (
                <Thread
                  messageId={parentMessageId as Id<"messages">}
                  onClose={onClose}
                />
              ): profileMemberId ? (
                <Profile
                  memberId={profileMemberId as Id<"members">}
                  onClose={onClose}
                />
              ) :(
                
                <div className="flex h-full items-center justify-center">
                  <Loader className="size-5 animate-spin text-muted-foreground"/>
                </div>
                )}
            </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default WorkspaceLayout;
