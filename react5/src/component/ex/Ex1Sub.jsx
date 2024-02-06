import React from 'react';

function Ex1Sub(props) {

  const imgSrc = props.data.imgSrc;
  const imgTitle = props.data.imgTitle;
  const imgText = props.data.imgText;

  return (
    <div className={'row mt-4'}>
      <div className={'col-md-auto'}>
        <img src={imgSrc} alt={imgTitle} />
      </div>
      <div className={'col-7'}>
        <h2>{imgTitle}</h2>
        <div>{imgText}</div>
      </div>
    </div>
  );
}

export default Ex1Sub;