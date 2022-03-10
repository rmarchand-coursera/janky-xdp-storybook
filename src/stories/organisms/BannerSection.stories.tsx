import { ComponentStory, ComponentMeta } from "@storybook/react";
import BannerSection from "./BannerSection";
import ComponentTemplate from "../utils/ComponentTemplate";
import { base as EnrollWithEmail } from "../molecules/EnrollWithEmail.stories";
import { base as EnrollForFree } from '../molecules/EnrollForFree.stories';

export default {
    title: 'organisms/Banner Section',
    component: BannerSection
} as ComponentMeta<typeof BannerSection>

const Template: ComponentStory<typeof BannerSection> = (args) => <BannerSection {...args} />

const baseArgs = {
    breadcrumbPath: ['Browse', 'Information Technology', 'Support and Operations'],
    certificateName: 'Google IT Support Professional Certificates',
    title: 'Technical Support Fundamentals',
    rating: 4,
    renderInstructor: () => <ComponentTemplate width={100} height={40} componentDescription={'Instructor'} />,
    renderLogo: () => <ComponentTemplate width={200} height={100} componentDescription={'Logo'} />
}

export const enrollWithEmail = Template.bind({});

enrollWithEmail.args = {
    ...baseArgs,
    renderEnrollmentMolecule: () => <EnrollWithEmail {...EnrollWithEmail.args} />,
}

export const enrollForFree = Template.bind({});

enrollForFree.args = {
    ...baseArgs,
    renderEnrollmentMolecule: () => <EnrollForFree {...EnrollForFree.args} />
}