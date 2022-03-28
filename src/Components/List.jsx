import React from "react";
import { useState } from "react";
import ListItems from "./ListItems";

const List = () => {
    const [item, setItem] = useState("");
    const [itemArr, setItemArr] = useState([]);
    const inputChange = (event) => {
        setItem(event.target.value);
    };
    const addInput = () => {
        setItemArr((prevVal) => {
            return [...prevVal, item]
        });
        setItem("");
    };
    const deleteItem = (id) => {
        console.log("Clicked.");
        setItemArr((prevVal) => {
            return prevVal.filter((arrEle,inde)=>{
                return inde !==id;
            });
        });
    };
    return <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDoList</h1>
                <br />
                <input type="text" placeholder="Add Items" onChange={inputChange} value={item} />
                <button onClick={addInput}>+</button>

                <ol>
                    {
                        itemArr.map((itemVal, index) => {
                            return <ListItems item={itemVal}
                                id={index}
                                key={index}
                                onSelect={deleteItem}
                            />
                        })
                    }
                </ol>
            </div>
        </div>
    </>
}

export default List;