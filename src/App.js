import React, {useState} from "react";

function App() {

  const onBtnIncreaseClicked = () => {setNum(num + 1 );};

  const onBtnDecreaseClicked = () => {setNum(num - 1 );};

  const onBtnIncreaseTenClicked = () => {setNum(num + 10 );};

  const onBtnDecreaseTenClicked = () => {setNum(num - 10 );};

  const [num, setNum] = useState(0);

  return (
    <>
      NUM : {num}, <button onClick={onBtnIncreaseClicked}> +1 증가 </button>
      <button onClick={onBtnDecreaseClicked}> -1 감소 </button>
      <button onClick={onBtnIncreaseTenClicked}> +10 증가 </button>
      <button onClick={onBtnDecreaseTenClicked}> -10 감소 </button>
    </>
  );

}



export default App;
