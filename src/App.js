import { UserProvider } from "./Context/ContextAPI2"
import A from "./component3/A"
import B from "./component3/B"


function App() {

  return (

    <UserProvider>
      <A/>
      <B/>
    </UserProvider>

  )

}

export default App