import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col ">
        <main className="flex-1  p-6">{children}</main>
      </div>
    </div>
  );
}
