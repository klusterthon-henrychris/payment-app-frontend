import React, { ReactElement } from "react";
import { Menu, Transition } from "@headlessui/react";

interface IDropdownMenu {
  menuItems: { title: string; onClick: (prop?: any) => void }[];
  title: ReactElement;
  id?: string;
}

const DropdownMenu: React.FC<IDropdownMenu> = ({ title, menuItems, id }) => {
  return (
    <div className="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <span>
              <Menu.Button>{title}</Menu.Button>
            </span>

            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-3 w-28 origin-top-right bg-white border rounded-md shadow-lg outline-none z-30"
              >
                <div>
                  {menuItems.map((menuItem) => (
                    <Menu.Item
                      key={menuItem.title}
                      as="div"
                      className="p-3 rounded-md hover:bg-light-white cursor-pointer"
                      onClick={() => menuItem.onClick(id)}
                    >
                      {({ active }) => <span>{menuItem.title}</span>}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default DropdownMenu;
