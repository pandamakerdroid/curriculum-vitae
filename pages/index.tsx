import type { NextPage } from 'next';
import Components from '@components';
import { Container } from '@mui/material';
import Head from 'next/head'

const IndexPage: NextPage = () => {
    return (
        <div className="App">
            <Head>
                <title>Simin Cao</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Container sx={{pl:{xs:0, sm:3},pr:{xs:0, sm:3},maxWidth:'1080px'}}>
                <Components.Header />
                <Components.ExperienceContainer title="Experience" />
                <Components.EducationContainer title="Education" />
                <Components.Footer />
            </Container>
        </div>

    )
}

export default IndexPage;