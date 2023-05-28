import React, { useReducer } from 'react'

const ReducerHookExample = () => {
    const initialState = 0;
    
    // 2 create a reducer function
    const reducer = (state,action)=>{
        console.log(state,action);
        switch (action.type) {
            case "INCREMENT":
                return state + 1;
                break;
            case "DECREMENT":
                return state - 1;
                break;
        
            default:
                return state;
        }
        return state;
    }
    
    const [state,dispatch] = useReducer(reducer,initialState); // 1 create a state 
    
  return (
    <div style={{textAlign:'center'}}>
        <h1>Use Reducer Hook Example</h1>
        <p>{state}</p>
        {/* 3. dispatch action to update an existing state */}
        <button onClick={()=> dispatch({type:"INCREMENT"})}>Increment</button>
        <button onClick={()=> dispatch({type:"DECREMENT"})}>Decrement</button>
    </div>
  )
}

export default ReducerHookExample