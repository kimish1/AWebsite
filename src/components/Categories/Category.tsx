import type {Category} from "../../types/types.tsx"

const Category = (props:Category) =>{
    return (
        <div className="checkbox-wrapper-4">
            <input className="inp-cbx" id={props.name} type="checkbox"/>
            <label className="cbx" htmlFor={props.name}><span>
                            <svg width="12px" height="10px">

                    </svg></span><span>
                {props.name}
            </span></label>
            <svg className="inline-svg">
                <symbol id="check-4" viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </symbol>
            </svg>
        </div>
    )
}

export default Category