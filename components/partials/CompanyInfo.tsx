import { Container, Typography } from "@mui/material";

const CompanyInfo = (props:{employerName:string,
                            employerShortName:string,
                            employerType?:string,
                            employerSize?:string,
                            employerWebsite?:string}) => 
{
    return (
    <Container sx={{pl:0,pr:0,pb:1}}>
        <Typography variant='h5' sx={{pl:0,pr:0,pb:1,fontWeight: 500}}>
            {props.employerName}
        </Typography>
        <Typography variant='body2' 
            sx={{ fontFamily: 'Roboto',
                  fontWeight: 'light',
                  fontStyle: 'italic',
                  color: '#000b' }}>
            {props.employerType}
        </Typography>
        <Typography variant='body2'
            sx={{ fontFamily: 'Roboto',
                  fontWeight: 'light',
                  fontStyle: 'italic',
                  color: '#0008' }}>
            {props.employerSize}
        </Typography>
    </Container>);
}

export default CompanyInfo;