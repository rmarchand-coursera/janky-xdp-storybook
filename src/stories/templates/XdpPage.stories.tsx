import { ComponentStory, ComponentMeta } from '@storybook/react';
import { base as AboutSectionStory } from '../organisms/AboutSection.stories';
import { enrollForFree as BannerSectionStory } from '../organisms/BannerSection.stories';
import XdpPage from "./XdpPage";

export default {
    title: 'templates/Xdp Page',
    component: XdpPage
} as ComponentMeta<typeof XdpPage>

const Template: ComponentStory<typeof XdpPage> = (args) => <XdpPage {...args} />;

export const base = Template.bind({});
base.args = {
   ...AboutSectionStory.args,
   ...BannerSectionStory.args
}