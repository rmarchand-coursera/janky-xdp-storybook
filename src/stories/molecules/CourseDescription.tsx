const CourseDescription = ({ numberOfViews, description }: { numberOfViews: number, description: string }) => (
    <>
        <h1 style={{ marginBottom: '5px', marginTop: '0px' }}>About this Course</h1>
        <p style={{ fontWeight: 600, margin: 0 }}>{numberOfViews} recent views</p>
        <pre style={{ fontFamily: 'unset', overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>{description}</pre>
    </>
)

export default CourseDescription;