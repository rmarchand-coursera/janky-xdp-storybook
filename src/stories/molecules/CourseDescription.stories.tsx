import { ComponentStory, ComponentMeta } from "@storybook/react";
import CourseDescription from './CourseDescription';

export default {
    title: 'molecules/CourseDescription',
    component: CourseDescription
} as ComponentMeta<typeof CourseDescription>;

const Template: ComponentStory<typeof CourseDescription> = (args) => <CourseDescription {...args} />

export const base = Template.bind({});
base.args = {
    description: ` 
In this course -- through a combination of video lectures, demonstrations, and hands-on practice -- you’ll learn about the main components of an operating system and how to perform critical tasks like managing software and users, and configuring hardware.

By the end of this course you’ll be able to:
● navigate the Windows and Linux filesystems using a graphical user interface and command line interpreter
● set up users, groups, and permissions for account access
● install, configure, and remove software on the Windows and Linux operating systems
● configure disk partitions and filesystems
● understand how system processes work and how to manage them
● work with system logs and remote connection tools
● utilize operating system knowledge to troubleshoot common issues in an IT Support Specialist role
    `,
    numberOfViews: 131044
};