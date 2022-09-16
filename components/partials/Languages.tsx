import Language from "@partials/Language";
import styles from "@styles/Languages.module.scss"
const Languages = (props:{languages:Array<{
    name:string,
    code:string,
    proficiency:number,
    evaluation:string
    }>})=>{
    return (
        <div className={styles.languages}>
            {props.languages.map(l=>{
                return <Language key={l.code} name={l.name} code={l.code} proficiency={l.proficiency} evaluation={l.evaluation} />
            })}
        </div>
    )
}
export default Languages