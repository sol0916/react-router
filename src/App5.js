import ColorContext from "./Context/ContextAPI"
import ColorComponent from "./component3/ColorComponent"


function App() {

  return(

    /* provider 하위컴포넌트에 전달할 props값을 제공하는 역할 */
    <div>

    <ColorContext.Provider value={ {color: 'green'} }>
      <ColorComponent/>
    </ColorContext.Provider>

    </div>
  )
  
}

export default App