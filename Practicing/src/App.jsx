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
    {count % 2 === 0 && <div> <br /> It is Even</div>}
    {count % 2 === 1 && <div> <br /> It is Odd</div>}
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
