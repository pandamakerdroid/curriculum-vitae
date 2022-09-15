import {Tooltip, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import styles from '@styles/PersonalInfo.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhone, faPassport, faAt, faCakeCandles } from '@fortawesome/free-solid-svg-icons'

const PersonalInfo = (props:{name:string,value:string, href?:string}) => {
    return(                    
        <ListItem disablePadding>
            <ListItemButton>
                    <ListItemIcon>
                        {props.name==='tel' && <Tooltip title="call me"><FontAwesomeIcon className={styles.icon} icon={faSquarePhone} /></Tooltip>}
                        {props.name==='email' && <Tooltip title="write to me"><FontAwesomeIcon className={styles.icon} icon={faAt} /></Tooltip>}
                        {props.name==='nationality' && <Tooltip title="no visa needed in the EU"><FontAwesomeIcon className={styles.icon} icon={faPassport} /></Tooltip>}
                        {props.name==='dob' && <FontAwesomeIcon className={styles.icon} icon={faCakeCandles} />}
                    </ListItemIcon>
                    {props.href && 
                        <Tooltip title="write to me">
                            <a className={styles['list-item-text']} href={props.href}>{props.value}</a>
                        </Tooltip>}
                    {!props.href &&  <Tooltip title={props.name==='nationality' ? "no visa needed in the EU":''}><ListItemText className={styles['list-item-text']} primary={props.value} /></Tooltip>}
            </ListItemButton>
        </ListItem>
    )
}

export default PersonalInfo;