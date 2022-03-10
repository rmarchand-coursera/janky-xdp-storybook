const RelatedCertificate = ({ name }: { name: string }) => (
    <span>
        <p style={{ display: 'inline' }}>This course is part of </p>
        <p style={{ fontWeight: 900, display: 'inline' }}>{name}</p>
    </span>
)

export default RelatedCertificate;
