import React from "react";

const ListItems = (props) => {

    return (<>
        <div className="todo_style">
            <li>{props.item}
                <button onClick={()=>{
                    props.onSelect(props.id)
                }}>Remove</button>
            </li>
        </div>
    </>
    )
}

export default ListItems;