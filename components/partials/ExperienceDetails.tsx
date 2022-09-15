import { Chip, Typography } from "@mui/material";
import { Container } from "@mui/system";
import styles from "@styles/ExperienceDetails.module.scss";

const ExperienceDetails = (props:{role:string,
                                  assignments:Array<string>,
                                  technologies:Array<string>  }) => {
    return (
        <Container sx={{pl:{xs:0,sm:0,md:3}, pr:{xs:0,sm:0,md:3}}}>
            <Typography sx={{pl:0,pr:0,pb:1}}>
                {props.role}
            </Typography>
            {props.assignments.map((a,i)=>
                <Typography sx={{pl:0,pr:0,pb:1}} key={a+i}>
                   {i>0 && <span style={{fontWeight:600}}>{i}. </span>}{a}
                </Typography>)}
            {props.technologies.map((t,i)=>
                <Chip className={`${styles.chip} ${styles[t]}`} label={t} key={t+i}/>)}
        </Container>
    );

}

export default ExperienceDetails;