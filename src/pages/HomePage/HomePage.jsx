import PackageList from '../../components/PackageList/PackageList'
import InfoBoxHDW from '../../components/InfoBoxHDW/InfoBoxHDW'
import InfoBoxIncluded from '../../components/InfoBoxIncluded/InfoBoxIncluded'

import { Container } from 'react-bootstrap'

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
            </Container>

        </>

    )
}
export default HomePage


