import { Grid } from "@mui/material"
import CompanyInfo from "@partials/CompanyInfo";
import TimePeriod from "@partials/TimePeriod";
import Timeline from "@partials/Timeline";
import Location from "@partials/Location";
import EducationDetails from "@partials/EducationDetails";
import styles from "@styles/ExperienceItem.module.scss";
import {createRef, useState,useEffect} from 'react';
import useOnScreen from "@hooks/useOnScreen";
const EducationItem = (props:{item:{ short_name: string,
                                name: string,
                                website:string,
                                study_name:string,
                                degree:string,
                                description:string,
                                start:string,
                                end:string,
                                city:string,
                                country:string}}) => {
    const ref=createRef<HTMLDivElement>();
    const newVal = useOnScreen(ref)
    const [isVisible, setIsVisible]=useState(false);
    useEffect(()=>{
        isVisible?true:setIsVisible(newVal);
    },[newVal, isVisible])
    return(
        <>
            <Grid ref={ref} className={`${styles.item} ${isVisible?styles.itemappear:''}`} container spacing={2}>
                <Grid className={styles.left} item xs={3} sx={{ml:{xs:1,sm:1, md:10}, mt:2.5}}>
                    <TimePeriod start={props.item.start} end={props.item.end}/>
                    <Location city={props.item.city} country={props.item.country}/>
                </Grid>
                <Grid item xs={1}>
                    <Timeline />
                </Grid>
                <Grid item sx={{pl:{xs:0},pr:{xs:0},mt:2}} xs={7} sm={6} lg={7}>
                    <CompanyInfo employerName={props.item.name}
                                 employerShortName={props.item.short_name}
                                 employerWebsite={props.item.website}/>
                    <EducationDetails studyName={props.item.study_name}
                                      degree={props.item.degree}/>
                </Grid>
            </Grid>
        </>
    )
}

export default EducationItem;