import { TabContentContainer } from "../../styles/Tabs.styles"
import Form from "./Form"

export default function Tab(props) {
    return (
        <TabContentContainer>
            <Form id={props.id} />
        </TabContentContainer>
    )
}