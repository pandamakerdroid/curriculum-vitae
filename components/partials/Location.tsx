import { Container } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Grid, Typography } from "@mui/material";
const Location = (props:{city:string,country:string}) => {
    return (
        <Container>
            <Grid container >
                <Grid item xs={0} md={2} sx={{display:{xs:'none', sm:'block'},pt:1.2}}>
                    <FontAwesomeIcon icon={faMapLocationDot}/>
                </Grid>
                <Grid item xs={12} md={10}>
                    <Typography variant="body2">
                        {props.city}
                    </Typography>
                    <Typography variant="body2">
                        {props.country}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Location