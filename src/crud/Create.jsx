import React from "react";
import { useState } from "react";

const Create = () => {
	 const [inputText, setInputText] = useState({
	    text: "",
	    isState: false
	  });
   const [ rdList, setRdList] = useState([]);

	function TextInput(e){
		setInputText({
			...inputText,
      text: e.target.value,
		})
	};

	function AddDisplay() {
		setRdList([...rdList, inputText])
	};

	function upDateData(i) {
		var newList = [];

		for (let j = 0; j < rdList.length; j++) {
      var element = rdList[j];
			j == i ?  newList.push({ ...element, isState: !element.isState }) : newList.push(element);
		}
		setRdList(newList);
	}

	return (
    <div>
      <h1>Add New record</h1>

      <input type="text" placeholder="Enter Some Text" onChange={TextInput} />
      <button onClick={AddDisplay}>Add</button>
      <h3>You typed : {inputText.text}</h3>

      <h1>Display List</h1>
      <ul>
	      {rdList.map((item, i) => {
	        return ( <div><li>{item.text}</li>
	          <a href="javascript:void(0)" onClick={() => {upDateData(i);}} > {item.isState ? "Accessed" : "Denied"}</a>
	        </div>
	        );
	      })}
      </ul>
    </div>
  );
};

export default Create;