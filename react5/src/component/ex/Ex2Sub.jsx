import React, { useState } from 'react';

function Ex2Sub(props) {
  const divTitleClassName = props.data.divTitleClassName;
  const divTitle = props.data.divTitle;
  const divStorage = props.data.divStorage;
  const divEmails = props.data.divEmails;
  const divDomains = props.data.divDomains;
  const divSupport = props.data.divSupport;
  const divPrice = props.data.divPrice;

  // 마우스 상태 체크를 위한 state 변수
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={'col-sm'}>
      <div className={'card border-light text-center ' + (isHover ? 'shadow' : 'shadow-none')} onMouseOver={() => setIsHover(true)}
           onMouseLeave={() => setIsHover(false)}>
        <div className={divTitleClassName}>
          <h2 className={'card-title text-white fw-normal'}>{divTitle}</h2>
        </div>
        <ul className={'list-group list-group-flush'}>
          <li className={'list-group-item'}><span className={'fw-bold'}>{divStorage}GB</span> Storage</li>
          <li className={'list-group-item'}><span className={'fw-bold'}>{divEmails}</span> Emails</li>
          <li className={'list-group-item'}><span className={'fw-bold'}>{divDomains}</span> Domains</li>
          <li className={'list-group-item'}><span className={'fw-bold'}>{divSupport}</span> Support</li>
        </ul>
        <div className={'card-body'}>
          <p className={'fs-2'}>$ {divPrice}</p>
          <p className={'text-body-tertiary'}>per month</p>
        </div>
        <div className={'card-body bg-dark-subtle'}>
          <button className={'btn btn-success'}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Ex2Sub;