import { Container, Typography } from "@mui/material";

const CompanyInfo = (props:{employerName:string,
                            employerShortName:string,
                            employerType?:string,
                            employerSize?:string,
                            employerWebsite?:string}) => 
{
    return (
    <Container>
        <Typography variant='h5'>
            {props.employerName}
        </Typography>
        <Typography variant='body2'>
            {props.employerType}
        </Typography>
        <Typography variant='body2'>
            {props.employerSize}
        </Typography>
    </Container>);
}

export default CompanyInfo;