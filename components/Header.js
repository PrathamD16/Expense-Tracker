import React from "react";
import {useSession, signIn, signOut} from 'next-auth/react'

function Header() {
  const {data: session} = useSession()

  return (
    <div className="flex-grow bg-gradient-to-b from-purple-500 to-blue-400 p-2 py-3 text-white text-base">
      <nav className="flex justify-between mx-6">
        {/* left */}
        <div className="cursor-pointer">
          <p>Expense App</p>
        </div>
        {/* right */}
        <div onClick={!session ? signIn : signOut} className="cursor-pointer hover:underline">
            <p>{session ? `Hello, ${session.user.name}` : `Sign In`}</p>
        </div>
      </nav>
    </div>
  );
}

export default Header;
