import React, { useState } from 'react';

const TodoList = ({ elem, setItems, items }) => {

    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);
    const [editText, setEditText] = useState(null);
    const [line, setLine] = useState(false)


    const deleteItem = (index) => {

        const updatedItem = items.filter((elem) => {
            return index !== elem.id;
        });

        setItems(updatedItem)
    }

    const editItem = (id) => {
        const newEditItem = items.find((elem) => {
            return elem.id === id;
        });

        setToggleSubmit(false)
        setEditText(newEditItem.name)

        setIsEditItem(id)
    }

    const editAddItem = (id) => {
        console.log(id)
        const newSddItem = items.filter((elem) => {
            return elem.id === id;
        })
        if (newSddItem.length != 0) {
            newSddItem[0].name = editText
        }
        console.log(newSddItem)
        setItems(items)
        setIsEditItem(null)
        setEditText('')
        console.log("gfhjk")
    }

    const deleteEditItem = () => {
        setIsEditItem('')
    }

    const cutIt = () => {

        setLine(true)
    }

    return (
        <div>
            {
                isEditItem !== elem.id && (<div className="eachItem" key={elem.id}>
                    <h3 style={{ textDecoration: line ? "line-through" : "none" }}>{elem.name}</h3>
                    <div className="todo-btn">
                        <i className="fa fa-cut" onClick={cutIt}></i>
                        <i className="fa fa-edit" onClick={() => editItem(elem.id)}></i>
                        <i className="fa fa-trash" onClick={() => deleteItem(elem.id)}></i>
                    </div>
                </div>)
                
            }

            {
                isEditItem === elem.id && (
                    <>
                        <div className="showItem">
                            <input type="text" defaultValue={elem.name} value={editText} onChange={(e) => setEditText(e.target.value)}></input>
                            <div className="todo-btn-edit">

                                <i className="fa fa-remove" onClick={() => deleteEditItem()} ></i>
                                <i className="fa fa-save" onClick={() => editAddItem(elem.id)}></i>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default TodoList;
