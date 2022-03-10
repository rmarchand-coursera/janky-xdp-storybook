import { ComponentStory, ComponentMeta } from "@storybook/react";
import EnrollWithEmail from "./EnrollWithEmail";

export default {
    title: 'molecules/EnrollWithEmail',
    component: EnrollWithEmail
} as ComponentMeta<typeof EnrollWithEmail>;

const Template: ComponentStory<typeof EnrollWithEmail> = (args) => <EnrollWithEmail {...args} />

export const base = Template.bind({});
base.args = {
    isFree: true,
    startDate: 'Mar 9',
}
