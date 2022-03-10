import EnrollButton from "../atoms/EnrollButton";

const EnrollWithEmail = ({ isFree, startDate }) => (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <EnrollButton isFree={isFree} startDate={startDate} />
        <input type="email" />
    </div>
)

export default EnrollWithEmail;