import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import styles from "@styles/ExperienceContainer.module.scss";
import experiences from "@simincao/experiences.json";
import ExperienceItem from "@partials/ExperienceItem";
import {createRef, useState, useEffect} from 'react';
import useOnScreen from '@hooks/useOnScreen'
const ExperienceContainer = (props:{title:string}) => {
    const ref = createRef<HTMLDivElement>()
    const newVal = useOnScreen(ref)
    const [isVisible, setIsVisible]=useState(false);
    useEffect(()=>{
        isVisible?true:setIsVisible(newVal);
    },[newVal, isVisible])

    return (
        <>
            <Container sx={{pl:{xs:0, sm:3},pr:{xs:0, sm:3}, mt:5, w:100}} className={styles['experience-container']}>
                <Typography variant="h2" className={`${styles['experience-title']} ${isVisible?styles.titleappear:''}`}>
                    {props.title}
                </Typography>
                <div ref={ref} className={`${styles.decoration} ${isVisible?styles.decorationappear:''}`} />
            </Container>
            <div className={styles.divider}/>
            <Container className={styles.item} sx={{pl:{xs:0, sm:3},pr:{xs:0, sm:3},mt:5}}>
                {experiences.items.map((item, i)=>
                <ExperienceItem key={item.employer_name+i} item={item}/>)}
            </Container>
        </>


    )

}

export default ExperienceContainer;