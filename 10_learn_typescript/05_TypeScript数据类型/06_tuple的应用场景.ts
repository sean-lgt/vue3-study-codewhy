// hooks  react中的 useState
// const [counter,setCounter] = useState('100')  //return {counter: , setCounter:}

function useState(state: any) {
  let currentState = state  //暂存一份
  const changeState = (newState: any) => {
    console.log(newState);
    currentState = newState
    console.log('🚀【】',currentState);
  }
  // 返回一个元组
  const tuple:[any, (newState: any) => void] = [currentState, changeState]
  return tuple
}

let [counter, setCounter] = useState(10);
console.log('🚀【counter】',counter);
setCounter(1000)
console.log('🚀【更改 counter】',counter);


const [title, setTitle] = useState("abc")
console.log('🚀【title】',counter);



export{}