import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Ex1 from './ex/Ex1';
import Ex2 from './ex/Ex2';
import Ex3 from './ex/Ex3';
import Ex4 from './ex/Ex4';

function Exercise(props) {
  const [viewState1, setViewState1] = useState(true);
  const [viewState2, setViewState2] = useState(false);
  const [viewState3, setViewState3] = useState(false);
  const [viewState4, setViewState4] = useState(false);

  const btn1Click = e => {
    setViewState1(true);
    setViewState2(false);
    setViewState3(false);
    setViewState4(false);
  }

  const btn2Click = e => {
    setViewState1(false);
    setViewState2(true);
    setViewState3(false);
    setViewState4(false);
  }

  const btn3Click = e => {
    setViewState1(false);
    setViewState2(false);
    setViewState3(true);
    setViewState4(false);
  }

  const btn4Click = e => {
    setViewState1(false);
    setViewState2(false);
    setViewState3(false);
    setViewState4(true);
  }

  let view = <Ex1/>

  if (viewState1){
    view = <Ex1 />
  }
  else if(viewState2){
    view = <Ex2 />
  }
  else if(viewState3){
    view = <Ex3 />
  }
  else if(viewState4){
    view = <Ex4 />
  }

  return (
    <div className={'mt-3'}>
      <div className={'container mb-4'}>
        <div className={'btn-group'}>
          <button type={'button'} className={'btn btn-primary'} onClick={btn1Click}>문제 1</button>
          <Button type={'button'} variant={'info'} onClick={btn2Click}>문제 2</Button>
          <Button type={'button'} variant={'primary'} onClick={btn3Click}>문제 3</Button>
          <Button type={'button'} variant={'info'} onClick={btn4Click}>문제 4</Button>
        </div>
      </div>
      <hr/>
      <div>
        {view}
      </div>
    </div>
  );
}

export default Exercise;