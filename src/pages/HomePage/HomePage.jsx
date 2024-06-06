import PackageList from '../../components/PackageList/PackageList'
import InfoBoxHDW from '../../components/InfoBoxHDW/InfoBoxHDW'
import InfoBoxIncluded from '../../components/InfoBoxIncluded/InfoBoxIncluded'
import BtnUp from '../../components/BtnUp/BtnUp'
import { Container } from 'react-bootstrap'

const HomePage = () => {
    return (
        <>
            <video autoPlay loop playsInline muted className="mb-5 w-100 h-80 video">
                <source src="https://res.cloudinary.com/drpdy7tju/video/upload/v1717662947/CleanShot_2024-06-06_at_10.34.05_rooa28.mp4" type="video/mp4" />
            </video>
            <Container>
                <InfoBoxHDW />
                <InfoBoxIncluded />
                <div id="all-packages">
                    <PackageList />
                </div>
                <BtnUp />
            </Container>
        </>

    )
}
export default HomePage


