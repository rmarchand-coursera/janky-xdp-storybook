import BannerSection, { Props as BannerSectionProps } from "../organisms/BannerSection";
import AboutSection, { Props as AboutSectionProps } from "../organisms/AboutSection";

const XdpPage = (props: BannerSectionProps & AboutSectionProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px'}}>
        <BannerSection {...props} />
        <AboutSection {...props} />
    </div>
)

export default XdpPage;
