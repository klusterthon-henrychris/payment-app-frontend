import { useState } from "react";
import { Tab } from "@headlessui/react";
import SettingsProfile from "./SettingsProfile";
import SettingsNotification from "./SettingsNotification";

const SettingsContainer = () => {
  const [tabs] = useState<string[]>(["profile", "notification"]);

  const tabItems: any = {
    profile: <SettingsProfile />,
    notification: <SettingsNotification />,
  };

  return (
    <div className="w-full min-h-screen h-full bg-light-white p-6">
      <div className="w-full max-w-m p-6 bg-white">
        <Tab.Group>
          <Tab.List className="flex space-x-1 w-fit bg-light-white rounded-lg p-1">
            {tabs.map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  `px-6 py-3 bg-light-white rounded-lg capitalize ${
                    selected && "bg-white shadow-md shadow-neutral-300"
                  }`
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="my-6">
            {tabs.map((tab) => {
              return <Tab.Panel key={tab}>{tabItems[tab]}</Tab.Panel>;
            })}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default SettingsContainer;
