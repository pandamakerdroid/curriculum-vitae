import { Avatar, Container, Typography, List, Grid, Fab, Tooltip } from '@mui/material';
import Partials from '@partials';
import me from "@simincao/me.json";
import avatarsimin from "@assets/simincao.jpg";
import styles from "@styles/Header.module.scss"
import useOnScreen from "@hooks/useOnScreen";
import { createRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const ref = createRef<HTMLDivElement>();

    const isVisible = useOnScreen(ref);
    const [isFirstLoad,setIsFirstLoad] = useState(true);
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
            {
                if(window.scrollY>document.getElementById('main-header')!.scrollHeight){
                    setIsFirstLoad(false);
                }
            });
        }
      }, [isVisible]);


    return (
        <>
            <Container ref={ref} id='main-header'>
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
                        <Typography className={styles.bio}>
                            {me.bio}
                        </Typography>
                    </Grid>
                    <Grid item sm={4}>
                        <List sx={{ml:5, mr:7}} className={styles.pi}>
                            {me.personal_info.map((pi,i) => (
                                <Partials.PersonalInfo key={pi.name+i} {...pi} />
                            ))}
                        </List>
                        <Partials.Languages languages={me.languages}/>
                    </Grid>
                    <Grid item sm={8} sx={{display:{xs:'none', md:'block'}}}>
                        <Typography className={styles.bio}>
                            {me.bio}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Grid className={`${styles['header-sm']} ${isVisible?styles['header-sm-disappear']:styles['header-sm-appear']}`} 
                    sx={{pt:2,w:100, position:'fixed', top:0, ml:0, mr:0, display:(!isFirstLoad?'flex':'none'), justifyContent: 'center'}} 
                    container 
                    spacing={2}>
                <Grid item md={2}>
                    <Avatar 
                    variant='square'
                    className={styles['avatar-sm']}
                    src={(avatarsimin as any).src} alt='avatar'/>
                </Grid>
                <Grid item md={3}>
                    <Typography 
                    variant="h2" 
                    className={styles['name-sm']}>
                        {me.name}
                    </Typography>
                </Grid>
                <Grid item md={1} className={styles['pi-small']}>
                {me.personal_info.map((pi,i) => (
                    (pi.name==='email'|| pi.name==='tel')?
                        <Typography key={pi.name+i}> {pi.value}</Typography>
                        :''
                ))}
                </Grid>
            </Grid>
            <Tooltip title="email me">
                <Fab className={styles['email-fab']} href={me.personal_info.filter(pi=>pi.name==='email')[0]['href']}>
                    <FontAwesomeIcon icon={faAt} />
                    <FontAwesomeIcon icon={faAt} className={styles['email-effect']} />
                </Fab>
            </Tooltip>
        </>
    )
}

export default Header;