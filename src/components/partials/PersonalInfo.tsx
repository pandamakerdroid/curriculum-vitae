import {ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import styles from './PersonalInfo.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhone, faPassport, faAt, faCakeCandles } from '@fortawesome/free-solid-svg-icons'

const PersonalInfo = (props:{name:string,value:string, href?:string}) => {
    return(                    
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    {props.name==='tel' && <FontAwesomeIcon className={styles.icon} icon={faSquarePhone} />}
                    {props.name==='email' && <FontAwesomeIcon className={styles.icon} icon={faAt} />}
                    {props.name==='nationality' && <FontAwesomeIcon className={styles.icon} icon={faPassport} />}
                    {props.name==='dob' && <FontAwesomeIcon className={styles.icon} icon={faCakeCandles} />}
                </ListItemIcon>
                {props.href && <a className={styles['list-item-text']} href={props.href}>{props.value}</a>}
                {!props.href &&  <ListItemText className={styles['list-item-text']} primary={props.value} />}
            </ListItemButton>
        </ListItem>
    )
}

export default PersonalInfo;