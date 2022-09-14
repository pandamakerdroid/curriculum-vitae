import { Container, Typography } from "@mui/material";

const TimePeriod = (props:{start:string,end:string}) => {
    return (
        <Container>
            <Typography variant="body1">
                {props.start} - {props.end===""?"now":props.end}
            </Typography>
        </Container>
    );
}
export default TimePeriod;