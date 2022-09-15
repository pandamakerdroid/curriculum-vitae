import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import styles from "@styles/ExperienceContainer.module.scss";
import education from "@simincao/education.json";
import EducationItem from "@partials/EducationItem";

const ExperienceContainer = (props:{title:string}) => {
    return (
        <>
            <Container sx={{pl:{xs:0, sm:3},pr:{xs:0, sm:3}, mt:5}} className={styles['experience-container']}>
                <Typography variant="h2" className={styles['experience-title']}>
                    {props.title}
                </Typography>
                <div className={styles.decoration} />
            </Container>
            <div className={styles.divider}/>
            <Container sx={{pl:{xs:0, sm:3},pr:{xs:0, sm:3}, mt:5}}>
                {education.items.map((item, i)=>
                <EducationItem key={item.name+i} item={item}/>)}
            </Container>
        </>


    )

}

export default ExperienceContainer;