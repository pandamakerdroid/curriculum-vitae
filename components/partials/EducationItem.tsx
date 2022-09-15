import { Grid } from "@mui/material"
import CompanyInfo from "@partials/CompanyInfo";
import TimePeriod from "@partials/TimePeriod";
import Timeline from "@partials/Timeline";
import Location from "@partials/Location";
import EducationDetails from "@partials/EducationDetails";

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
    return(
        <>
            <Grid container spacing={2}>
                <Grid item xs={3} sx={{ml:{xs:1,sm:1, md:10}, mt:2.5}}>
                    <TimePeriod start={props.item.start} end={props.item.end}/>
                    <Location city={props.item.city} country={props.item.country}/>
                </Grid>
                <Grid item xs={1}>
                    <Timeline />
                </Grid>
                <Grid item sx={{mt:2}} xs={7} sm={6} lg={7}>
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