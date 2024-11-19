"use client"
import Toolbar from "./toolbar";

interface LayoutProps {
  children: React.ReactNode;
}

const WorkspaceLayout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full">
      <Toolbar />
      {children}
    </div>
  );
};

export default WorkspaceLayout;
