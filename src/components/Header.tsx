import { Avatar, Box, Container, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Grid } from '@mui/material';
import Partials from '@partials';
import me from "@simincao/me.json";
import avatarsimin from "@assets/simincao.jpg";
import styles from "./Header.module.scss"
import { isNumberObject } from 'util/types';
const Header = () => {
    interface avatarPic {
        blurDataURL:string,
        blurHeight: number, 
        blurWidth: number,
        height:number,
        src:string,
        width:number
    }
    avatarsimin as {}
    return (
        <>
            <Container>
                <Box sx={{ml:5, pt:5, pb:3 , display:'flex'}}>
                    <Avatar 
                    variant='square'
                    className={styles.avatar}
                    src={(avatarsimin as any).src} alt='avatar'/>
                    <Typography 
                    variant="h1" 
                    className={styles.name}
                    >
                        {me.name}
                    </Typography>
                </Box>
                <Grid container spacing={0}>
                    <Grid item xs={4}>
                        <List sx={{ml:5, mr:7}}>
                            {me.personal_info.map((pi,i) => (
                                <Partials.PersonalInfo key={pi.name+i} {...pi} />
                            ))}
                        </List>
                    </Grid>
                    <Grid item xs={8}>
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