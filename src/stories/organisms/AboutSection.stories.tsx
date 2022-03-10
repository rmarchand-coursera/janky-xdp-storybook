import { ComponentStory, ComponentMeta } from "@storybook/react";
import AboutSection from "./AboutSection";
import { skillsGained, courseDetails } from "../mockData";
import { base as CourseDescriptionStory } from '../molecules/CourseDescription.stories';

export default {
    title: 'organisms/About Section',
    component: AboutSection
} as ComponentMeta<typeof AboutSection>

const Template: ComponentStory<typeof AboutSection> = (args) => <AboutSection {...args} />;

export const base = Template.bind({});
base.args = {
    ...CourseDescriptionStory.args,
    skillsGained,
    courseDetails
}