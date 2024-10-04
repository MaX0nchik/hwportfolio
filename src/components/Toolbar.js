import React from "react";
import styles from "./projects.module.css";

const Toolbar = ({filters, selected, onSelectFilter}) => {

    return(
        <div className={styles.toolbar}>
            {filters.map((filter)=>(
                <button key={filter} onClick={()=>onSelectFilter(filter)} style={{fontWeight:filter===selected ? "bold" : "normal"}}>
                    {filter}
                </button>
            ))}
        </div>
    )
}

export default Toolbar;