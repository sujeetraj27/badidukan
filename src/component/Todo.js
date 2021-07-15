import React, { useState } from 'react';

const Todo = () => {

    const getLocalItems = () => {
        let list = localStorage.getItem('list');


        if (list) {
            return JSON.parse(localStorage.getItem('list'))
        } else {
            return [];
        }
    }

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalItems());

    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);
    const [editText, setEditText] = useState(null);

    const addItem = (e) => {
        e.preventDefault();
        if (!inputData) {

        } else {

            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData]);
            setInputData('');
        }


    }

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


    return (
        <div className="main-div">
            <div className="child-div">
                <h2>Add Your List Here</h2>
                <div className="addItems">
                    <input
                        type="text"
                        id=""
                        placeholder="Add your list"
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}/>

                    <i class="fa fa-plus" title="Add Item" onClick={addItem}></i>

                </div>



                <div className="showItem">
                    {
                        items.map((elem) => {
                            return <>
                                {
                                    isEditItem !== elem.id && (<div className="eachItem" key={elem.id}>
                                        <h3>{elem.name}</h3>
                                        <div className="todo-btn">
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

                            </>
                        })
                    }

                </div>

                <div className="showItems">

                    <button className="btn effect04" data-sm-link-text="Remove All">
                        <span>Check List</span>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Todo;
