import { Avatar, Box, Container, Typography, List, Grid } from '@mui/material';
import Partials from '@partials';
import me from "@simincao/me.json";
import avatarsimin from "@assets/simincao.jpg";
import styles from "@styles/Header.module.scss"

const Header = () => {
    return (
        <>
            <Container>
                <div className={styles.top}/>
                <Grid sx={{ml:{xs:2, md:5}, pt:5, pb:3 , display:'flex'}} container spacing={1}>
                    <Grid item md={4}>
                        <Avatar 
                        variant='square'
                        className={styles.avatar}
                        src={(avatarsimin as any).src} alt='avatar'/>
                    </Grid>
                    <Grid item md={8}>
                        <Typography 
                        variant="h1" 
                        className={styles.name}>
                            {me.name}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={0}>
                    <Grid item xs={12} sx={{display:{xs:'block', md: 'none'}}}>
                        <Typography >
                            {me.bio}
                        </Typography>
                    </Grid>
                    <Grid item sm={4}>
                        <List sx={{ml:5, mr:7}}>
                            {me.personal_info.map((pi,i) => (
                                <Partials.PersonalInfo key={pi.name+i} {...pi} />
                            ))}
                        </List>
                    </Grid>
                    <Grid item sm={8} sx={{display:{xs:'none', md:'block'}}}>
                        <Typography >
                            {me.bio}
                        </Typography>
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}

export default Header;