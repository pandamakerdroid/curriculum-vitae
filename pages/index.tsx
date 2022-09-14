import Components from '@components';
import { Container } from '@mui/material';
const IndexPage = () => {
    return (
        <Container sx={{maxWidth:'1080px'}}>
            <Components.Header />
            <Components.ExperienceContainer />
            <Components.Footer />
        </Container>
    )
}

export default IndexPage;