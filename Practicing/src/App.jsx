import React from "react";
import {RecoilRoot ,useSetRecoilState, useRecoilValue } from "recoil";
import { countAtom, selectorEvenOdd } from "./store/atom/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
    {count}
    </b>
    <EvenCountOrOdd/>
    </div>;
}

function EvenCountOrOdd(){

  // UGLY WAY OF SOLVING THE PROBLEM

  // const count = useRecoilValue(countAtom);
  // return <div>
  //    {(count % 2 === 0) ? "!! It is even !!" : "!! It is odd !!"}
  // </div>

  const isEven = useRecoilValue(selectorEvenOdd);

  return <div>
    {!isEven? "!! It is Even !!" : "!! It is Odd  !!" }
  </div>

}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <br />
      <button
        onClick={function () {
          setCount(count => count + 1);
        }}
      >
        Increase
      </button>
      <br />
      <br />
      <button
        onClick={function () {
          setCount(count => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
