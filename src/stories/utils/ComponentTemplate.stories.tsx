import ComponentTemplate from "./ComponentTemplate";

export default {
    title: 'utils/Component Template',
    component: ComponentTemplate
};

export const base = ({ width, height }) => (
    <ComponentTemplate width={width} height={height} componentDescription={'Enrolment Flow'} />
)