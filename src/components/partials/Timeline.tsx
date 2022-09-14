import styles from "./Timeline.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
const Timeline = () => {
    return (
    <div className={styles.timeline}>
        <FontAwesomeIcon className={styles.icon} icon={faCircleDot}/>
    </div>);
}
export default Timeline;