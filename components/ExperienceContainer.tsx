import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import styles from "@styles/ExperienceContainer.module.scss";
import experiences from "@simincao/experiences.json";
import ExperienceItem from "@partials/ExperienceItem";

const ExperienceContainer = (props:{title:string}) => {
    return (
        <>
            <Container className={styles['experience-container']}>
                <Typography variant="h2" className={styles['experience-title']}>
                    {props.title}
                </Typography>
            </Container>
            <div className={styles.divider}/>
            <Container sx={{mt:5}}>
                {experiences.items.map((item, i)=>
                <ExperienceItem key={item.employer_name+i} item={item}/>)}
            </Container>
        </>


    )

}

export default ExperienceContainer;