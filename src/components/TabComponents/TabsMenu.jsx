import { useState } from "react";
import { useStore } from "../../store/store";
import {
  TabsContainer,
  TabList,
  TabListItem,
  TabBody,
} from "../../styles/Tabs.styles";
import Tab from "./Tab";

export default function TabsMenu() {
  const [activeTab, setActiveTab] = useState(1);
  const store = useStore()

  const handleTab = (value) => {
    setActiveTab(value);
  };

  return (
    <TabsContainer>
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
