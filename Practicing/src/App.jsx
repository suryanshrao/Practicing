import React from "react";
import {RecoilRoot ,useSetRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atom/count";

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
    {count}
    </div>;
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
