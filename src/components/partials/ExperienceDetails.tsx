import { Chip, Container, Typography } from "@mui/material";
import styles from "./ExperienceDetails.module.scss";

const ExperienceDetails = (props:{role:string,
                                  assignments:Array<string>,
                                  technologies:Array<string>  }) => {
    return (
        <Container sx={{pt:1}}>
            <Typography>
                {props.role}
            </Typography>
            {props.assignments.map((a,i)=>
                <Typography key={a+i}>{a}</Typography>)}
            <div>
                {props.technologies.map((t,i)=>
                    <Chip className={`${styles.chip} chip`} label={t} key={t+i}/>)}
            </div>
        </Container>
    );

}

export default ExperienceDetails;