import React, { useState, useEffect } from "react";
//import logo from "./logo.svg";
import Todo from "./Todo";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";

function App() {
    const  [todos, setTodos] = useState([]);
    const  [input, setInput] = useState("");

    // when the app loads we need to listen to the database and fetch new todos as they get added/removed (refreshed)
    useEffect(() => {
        // this code here fires when the app.js loads
        db.collection("todos").orderBy("timestamp","desc").onSnapshot(snapshot => {
            //console.log(snapshot.docs.map(doc => doc.data().todo));
            setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})));
        })
    }, []);
    
    const addTodo = (event) => {
        // this will fire off when we click the button
        event.preventDefault(); //will stop the refresh

        db.collection("todos").add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput(""); //clear up input after clicking add todo button
    }

    return (
        <div className="App">
            <h1>Hello World!</h1>
            <form>
                <FormControl>
                    <InputLabel>- Write a todo</InputLabel>
                    <Input value={input} onChange={event => setInput(event.target.value)} />
                </FormControl>

                <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
                    Add Todo
                </Button>
            </form>

            <ul>
                {todos.map(todo => (
                    <Todo todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default App;
