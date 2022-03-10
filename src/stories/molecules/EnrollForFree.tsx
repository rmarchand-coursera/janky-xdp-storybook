import EnrollButton, { Props as ButtonProps } from "../atoms/EnrollButton";

type EnrollmentProps = ButtonProps & {
    numberEnrolled: number;
}

const EnrollForFree = ({ isFree, startDate, numberEnrolled }: EnrollmentProps ) => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
            <EnrollButton isFree={isFree} startDate={startDate} />
            <div style={{ display: 'flex', flexDirection: "column", gap: '-8px'}}>
                <p style={{ margin: 0 }}>Try for Free: Enroll to start your 7-day full access free trial</p>
                <p style={{ margin: 0 }}>Financial aid available</p>
            </div>
        </div>
        <p>{numberEnrolled} already enrolled</p>
    </div>
)

export default EnrollForFree;