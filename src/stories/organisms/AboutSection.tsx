import CourseDescription from "../molecules/CourseDescription";
import SkillsGained from "../molecules/SkillsGained";
import CourseDetail from "../molecules/CourseDetail";

export type Props = {
    numberOfViews: number;
    description: string;
    skillsGained: string[];
    courseDetails: {
        icon: string;
        text: string;
        subtext: string;
    }[];
}

const AboutSection = ({ numberOfViews, description, skillsGained, courseDetails }: Props) => (
    <section style={{ display: 'flex', gap: '4px' }}>
        <div style={{ display: 'flex', gap: '4px', flexDirection: 'column', maxWidth: '800px' }}>
            <CourseDescription numberOfViews={numberOfViews} description={description} />
            <SkillsGained skills={skillsGained} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px'}}>
            {courseDetails.map((detail) => (
                <CourseDetail {...detail} />
            ))}
        </div>
    </section>
)

export default AboutSection
