import React from 'react';

function SummerHolidaySub(props) {

  const imgSrc = props.imgSrc;
  const imgName = props.imgName;

  return (
    <div className={'card'}>
      <img className={'card-img-top'} src={imgSrc} alt={imgName} />
      <div className={'card-body'}>
        <h4 className={'card-title'}>{imgName}</h4>
      </div>
    </div>
  );
}

export default SummerHolidaySub;