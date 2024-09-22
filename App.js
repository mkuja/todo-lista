import React from 'react';
import {PaperProvider} from "react-native-paper";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import AsyncStorageNative from "@react-native-async-storage/async-storage/src/AsyncStorage.native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
    const [todos, setTodos] = React.useState([])

    const markDoneOrRemove = (todo) => {
        if (!todo.completed) { // Complete it
            const ndx = todos.findIndex(a => a.desc === todo.desc)
            const desc = todo.desc
            const completed = true
            setTodos(todos.with(ndx, {completed, desc}))
        } else { // Else remove it
            const ndx = todos.findIndex(a => a.desc === todo.desc)
            let copy = [...todos]
            copy.splice(ndx, 1)
            setTodos(copy)
        }
    }

    const addTodo = (todo) => {
        if (todos.findIndex(a => a.desc === todo) === -1) {
            setTodos([...todos, {key: todo, desc: todo, completed: false}])
        }
    }

    const storeData = (value) => {
        const jsonValue = JSON.stringify(value);
        AsyncStorage.setItem('todos', jsonValue)
            .then(r => {});
    };

    const updateData = () => {
        AsyncStorage.getItem('todos')
            .then(a => {
                setTodos(JSON.parse(a || "[]"))
            })
    };

    // Get data from storage on initial render
    React.useEffect(
        updateData,
        []
    )

    // Save data when todos change
    React.useEffect(
        () => storeData(todos),
        [todos]
    )

    return (
        <PaperProvider>
            <Header/>
            <AddTodo addButtonCb={addTodo}/>
            <TodoList todos={todos} todoAction={markDoneOrRemove}/>
        </PaperProvider>
    );
};

export default App;