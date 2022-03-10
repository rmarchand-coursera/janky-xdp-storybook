import Pill from './Pill';

export default {
    title: 'atoms/Pill',
    component: Pill
};

export const shortText = () => <Pill name="hi" />
export const longText = () => <Pill name="this is an unreasonably long pill name, does it still look ok" />
