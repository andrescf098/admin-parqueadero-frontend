import React from "react";
import Menu from "./Menu";

const SideBar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
        <Menu></Menu>
      </div>
    </aside>
  );
};

export default SideBar;
