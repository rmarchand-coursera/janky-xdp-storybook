import Pill from '../atoms/Pill';

const SkillsGained = ({ skills }: { skills: string[] }) => (
    <section style={{ padding: '24px', border: '1px solid grey'}}>
    <h1 style={{ textTransform: 'uppercase', color: 'darkgrey', marginTop: '0px' }}>skills you will gain</h1>
    <div style={{ display: 'flex', gap: '10px'}}>
        {skills.map(s => (
           <Pill name={s}  />
        ))
        }
    </div>
    </section>
)

export default SkillsGained;