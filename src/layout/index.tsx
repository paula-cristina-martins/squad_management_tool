import React, { Fragment, ReactNode } from 'react';
import Tab from '../components/Tab';
import { faV } from '@fortawesome/free-solid-svg-icons';
import CompanyName from '../components/Menu/CompanyName';
import UserName from '../components/Menu/UserName';


interface PropsServer {
  children: ReactNode;
}

export default function Layout({ children }: PropsServer) {
  return (
    <Fragment>
      <Tab />
      <div className="flex h-14 bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800">
        <div className="flex w-full items-center font-bold text-white mx-12">
          <CompanyName
            name={"Squad Management Tool"}
            icon={faV}
          />
          <UserName
            name={"Paula Martins"}
            initials={"PM"}
          />
        </div>
      </div>
      <main className="flex px-5">
        {children}
      </main>
      <footer className="flex p-3 justify-center text-gray-400 hover:text-gray-600">
        2022 - All rights reserved
      </footer>
    </Fragment>
  );
}