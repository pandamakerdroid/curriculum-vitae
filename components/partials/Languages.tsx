import Language from "@partials/Language";
const Languages = (props:{languages:Array<{
    name:string,
    code:string,
    proficiency:number,
    evaluation:string
    }>})=>{
    return (
        props.languages.map(l=>{
            return <Language name={l.name} code={l.code} proficiency={l.proficiency} evaluation={l.evaluation} />
        })
    )
}
export default Languages