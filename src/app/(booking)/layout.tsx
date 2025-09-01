import { ReactNode } from "react";

interface BookingLayoutProps {
  children: ReactNode;
}

export default function BookingLayout({ children }: BookingLayoutProps) {
  return <div className="booking-layout">{children}</div>;
}
