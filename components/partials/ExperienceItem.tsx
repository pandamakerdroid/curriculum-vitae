import { Grid } from "@mui/material"
import CompanyInfo from "@partials/CompanyInfo";
import ExperienceDetails from "@partials/ExperienceDetails";
import TimePeriod from "@partials/TimePeriod";
import Timeline from "@partials/Timeline";
import Location from "@partials/Location";
import styles from "@styles/ExperienceItem.module.scss";
import {createRef, useState,useEffect} from 'react';
import useOnScreen from "@hooks/useOnScreen";
const ExperienceItem = (props:{item:{ employer_short_name: string,
                                employer_name: string,
                                employer_type:string,
                                employer_size:string,
                                employer_website?:string,
                                employer_icon?:string,
                                role:string,
                                description:string,
                                assignments:Array<string>,
                                technologies:Array<string>,
                                start:string,
                                end:string,
                                city:string,
                                country:string}}) => {
    const ref = createRef<HTMLDivElement>();
    const newVal = useOnScreen(ref)
    const [isVisible, setIsVisible]=useState(false);
    useEffect(()=>{
        isVisible?true:setIsVisible(newVal);
    },[newVal, isVisible])
    return(
        <Grid ref={ref} className={`${styles.item} ${isVisible?styles.itemappear:''}`} container spacing={1}>
            <Grid className={styles.left} item xs={3} sx={{ml:{xs:1,sm:1, md:10}, mt:2.5}}>
                <TimePeriod start={props.item.start} end={props.item.end}/>
                <Location city={props.item.city} country={props.item.country}/>
            </Grid>
            <Grid item xs={1}>
                <Timeline />
            </Grid>
            <Grid item sx={{pl:{xs:0},pr:{xs:0},mt:2}} xs={7} sm={6} lg={7}>
                <CompanyInfo employerName={props.item.employer_name}
                                employerShortName={props.item.employer_short_name}
                                employerType={props.item.employer_type}
                                employerSize={props.item.employer_size}
                                employerWebsite={props.item.employer_website}/>
                <ExperienceDetails role={props.item.role}
                                    assignments={props.item.assignments}
                                    technologies={props.item.technologies}  />
            </Grid>
        </Grid>
    )
}

export default ExperienceItem;