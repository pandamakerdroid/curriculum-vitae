import { Avatar, Box, Container, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Grid } from '@mui/material';
import Partials from '@partials';
import me from "@simincao/me.json";
import avatarsimin from "@assets/simincao.jpg";
import styles from "./Header.module.scss"
const Header = () => {
    return (
        <>
            <Container>
                <Box sx={{pt:5, pb:3 , display:'flex'}}>
                    <Avatar 
                    variant='square'
                    className={styles.avatar}
                    src={avatarsimin.src} alt='avatar'/>
                    <Typography 
                    variant="h1" 
                    className={styles.name}
                    >
                        {me.name}
                    </Typography>
                </Box>
                <Grid container spacing={0}>
                    <Grid item xs={4}>
                        <List>
                            {me.personal_info.map((pi) => (
                                <Partials.PersonalInfo {...pi} />
                            ))}
                        </List>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography sx={{ml:6}} >
                            {me.bio}
                        </Typography>
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}

export default Header;