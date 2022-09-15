import { Grid } from "@mui/material"
import CompanyInfo from "@partials/CompanyInfo";
import ExperienceDetails from "@partials/ExperienceDetails";
import TimePeriod from "@partials/TimePeriod";
import Timeline from "@partials/Timeline";
import Location from "@partials/Location";
import styles from "@styles/ExperienceItem.module.scss";
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
    return(
        <Grid container spacing={1}>
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