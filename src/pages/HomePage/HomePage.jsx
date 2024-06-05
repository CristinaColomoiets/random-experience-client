import PackageList from '../../components/PackageList/PackageList'
import InfoBoxHDW from '../../components/InfoBoxHDW/InfoBoxHDW'
import InfoBoxIncluded from '../../components/InfoBoxIncluded/InfoBoxIncluded'
import BtnUp from '../../components/BtnUp/BtnUp'

import { Container } from 'react-bootstrap'
import FAQ from '../../components/FAQ/FAQ'

const HomePage = () => {
    return (
        <>
            <video autoPlay loop playsInline muted className="mb-5 w-100 h-80">
                <source src="http://togarestaurante.com/wp-content/uploads/2021/08/toga_hero_web_video_1920_1080_.mp4" type="video/mp4" />
            </video>
            <Container>
                <InfoBoxHDW/>
                <InfoBoxIncluded/>
                <PackageList />
                <FAQ/>
                <BtnUp/>
            </Container>

        </>

    )
}
export default HomePage


