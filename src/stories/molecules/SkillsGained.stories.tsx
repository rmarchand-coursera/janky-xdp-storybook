import SkillsGained from './SkillsGained';
import { skillsGained } from "../mockData";

export default {
    title: 'molecules/SkillsGained',
    component: SkillsGained
};

export const base = () => <SkillsGained skills={skillsGained} />
