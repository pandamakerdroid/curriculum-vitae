import type { NextPage } from 'next';
import Components from '@components';
import { Container } from '@mui/material';
const IndexPage: NextPage = () => {
    return (
        <div className="App">
            <Container sx={{maxWidth:'1080px'}}>
                <Components.Header />
                <Components.ExperienceContainer title="Experience" />
                <Components.EducationContainer title="Education" />
                <Components.Footer />
            </Container>
        </div>

    )
}

export default IndexPage;