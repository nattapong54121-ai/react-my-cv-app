import React from 'react'

export default function NavBar({ pname, colorLinkNavBar }) {
  return (
        <>
    {/* ส่วนของ NAvBar */}
    <div className="w-full flex items-center justify-between px-20 pt-5">
        {/* โลโก้และชื่อเว็บด้านซ้าย */}
        <div>
            <span className="text-[#19ec4a] text-3xl font-bold">{'>_'}</span>
            <span className="text-white text-3xl font-bold">NinNon SAU</span>
        </div>

        {/* เมนูด้านขวา */}
        <div className="flex gap-5 items-center">
            <a href="/" className="text-white" style={{color: pname == 'h' ? colorLinkNavBar: '#FFFFFF'}}>Home</a>
            <a href="/About" className="text-white" style={{color: pname == 'a' ? colorLinkNavBar: '#FFFFFF'}}>About</a>
            <a href="/Contact" className="text-white" style={{color: pname == 'c' ? colorLinkNavBar: '#FFFFFF'}}>Contact</a>
            <a href="/portfolio" className="text-white border-2 border-white px-4 py-1 rounded-2xl"
            style={{color: pname == 'p' ? colorLinkNavBar: '#FFFFFF'}}>
              Let's Talk</a>
        </div>
    </div>
    </>
  )
}
