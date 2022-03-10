import React from 'react';
import Breadcrumb from "../atoms/Breadcrumb";
import RelatedCertificate from "../atoms/RelatedCertificate";
import LazyRating from "../atoms/LazyRating";

export type Props = {
    breadcrumbPath: string[];
    certificateName: string;
    title: string;
    rating: number;
    renderInstructor: () => React.ReactNode;
    renderEnrollmentMolecule: () => React.ReactNode;
    renderLogo: () => React.ReactNode;
}

const BannerSection = ({ breadcrumbPath, certificateName, title, rating, renderInstructor, renderEnrollmentMolecule, renderLogo }: Props) => (
    <section style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '20px' }}>
                <Breadcrumb path={breadcrumbPath} />
            </div>
            <RelatedCertificate name={certificateName} />
            <h1 style={{ marginBottom: '0'}}>{title}</h1>
            <LazyRating score={rating} />
            <div style={{ marginBottom: '20px' }}>
                {renderInstructor()}
            </div>
            {renderEnrollmentMolecule()}
        </div>
        {renderLogo()}
    </section>
)

export default BannerSection;