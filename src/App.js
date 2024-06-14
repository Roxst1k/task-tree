import './App.css';
import {useReducer} from "react";
import Node from "./components/node/Node";
import {initialData, reducer} from "./context/context";
import MyContext from "./context/context";

function App() {
    const [state, dispatch] = useReducer(reducer, initialData)

    return (
        <MyContext.Provider value={{state,dispatch}}>
            <div className='container'>
                <Node/>
            </div>
        </MyContext.Provider>
    );
}

export default App;
