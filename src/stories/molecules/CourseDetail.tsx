import LazyIcon from "../atoms/LazyIcon";

const CourseDetail = ({ icon, text, subtext }: { icon: string, text: string, subtext: string }) => (
    <div style={{ display: 'flex', gap: '12px'}}>
        <LazyIcon name={icon} />
        <div style={{ display: 'flex', flexDirection: 'column'}}><p style={{ margin: 0, fontWeight: 'bold' }}>{text}</p>{subtext}</div>
    </div>
)

export default CourseDetail;