import { ComponentStory, ComponentMeta } from "@storybook/react";
import EnrollForFree from "./EnrollForFree";

export default {
    title: 'molecules/EnrollForFree',
    component: EnrollForFree
} as ComponentMeta<typeof EnrollForFree>;

const Template: ComponentStory<typeof EnrollForFree> = (args) => <EnrollForFree {...args} />

export const base = Template.bind({});
base.args = {
    isFree: true,
    startDate: 'Mar 9',
    numberEnrolled: 1010892
}