import { useEffect, useState } from "react"
import axios from "axios"

function App () {

  /* 
  npm install axios 설치

  */

  const [data, setData] = useState({});
  const [list, setList] = useState([]);

  const handleClick = () => {

    //fetch의 반환 promise
    //axios의 반환 promise
    //결론 == 문법이 똑같다.
    axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then(response => setData(response.data) )
      
    
    
  }
  
  //이 데이터를 화면에 로드될 때 axios로 쳐리하세요
  //https://raw.githubusercontent.com/yopy0817/data_example/master/by.json
  useEffect( () => {

    axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    .then(response => setList(response.data))
    
  }, [] ) 
    
  const result = list.map((item, index) => <option key={index}>{item.value}</option>);
  

  return(

    <div>
      <h3>엑시오스 사용하기</h3>
  
      <button onClick={handleClick}>데이터가져오기</button>

      <p>
        {data.userId} <br/>
        {data.userPw} <br/>
        {data.userName} <br/>
      </p>

      <hr/>

     <select>
      {result}
    </select> 
      
    </div>


  )


}

export default App