import React from 'react'
import { Footer, Navbar } from '../components'

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative pt-[72px] min-w-screen min-h-screen flex flex-col text-black">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
