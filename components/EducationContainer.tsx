import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import styles from "@styles/ExperienceContainer.module.scss";
import education from "@simincao/education.json";
import EducationItem from "@partials/EducationItem";

const ExperienceContainer = (props:{title:string}) => {
    return (
        <>
            <Container sx={{mt:5}} className={styles['experience-container']}>
                <Typography variant="h2" className={styles['experience-title']}>
                    {props.title}
                </Typography>
            </Container>
            <div className={styles.divider}/>
            <Container sx={{mt:5}}>
                {education.items.map((item, i)=>
                <EducationItem key={item.name+i} item={item}/>)}
            </Container>
        </>


    )

}

export default ExperienceContainer;