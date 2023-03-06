import { useState } from "react";
import {
  TabsContainer,
  TabList,
  TabListItem,
  TabBody,
} from "../../styles/Tabs.styles";
import Tab from "./Tab";
import { menuAtom } from "../../atoms/menu-atom"
import { useAtom } from "jotai"

export default function TabsMenu() {
  const [activeTab, setActiveTab] = useState(1);
  const [toggle] = useAtom(menuAtom)

  const handleTab = (value) => {
    setActiveTab(value);
  };

  return (
    <TabsContainer open={toggle}>
      <TabList>
        <TabListItem
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTab(1)}
        >
          Pokémon 1
        </TabListItem>
        <TabListItem
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTab(2)}
        >
          Pokémon 2
        </TabListItem>
      </TabList>
      <TabBody>{activeTab === 1 ? <Tab id={"tabOne"} /> : <Tab id={"tabTwo"} />}</TabBody>
    </TabsContainer>
  );
}
