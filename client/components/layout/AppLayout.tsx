import React from "react";
//constant and types
import { Props } from "@ts/types/Props";
//components
import TopNav from "@components/topnav/TopNav";
import { default as AlertModal } from "@components/GlobalAlertModal";

function AppLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen">
      <AlertModal />
      <TopNav />
      {children}
    </div>
  );
}

export default AppLayout;
