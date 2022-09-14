import { Container, Typography } from "@mui/material";

const EducationDetails = (props:{studyName:string,
                                  degree:string  }) => {
    return (
        <Container sx={{pt:1}}>
            <Typography>
                {props.studyName}
            </Typography>
            <Typography>
                {props.degree}
            </Typography>
        </Container>
    );

}

export default EducationDetails;