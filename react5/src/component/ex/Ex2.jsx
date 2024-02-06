import React from 'react';
import Ex2Sub from './Ex2Sub';

function Ex2(props) {
  const divInformation = [
    {
      seq:1,
      divTitleClassName: 'card-body bg-dark',
      divTitle: 'Basic',
      divStorage: 10,
      divEmails: 10,
      divDomains: 10,
      divSupport: 'Endless',
      divPrice: 10 },
    {
      seq:2,
      divTitleClassName: 'card-body bg-success',
      divTitle: 'Pro',
      divStorage: 25,
      divEmails: 25,
      divDomains: 25,
      divSupport: 'Endless',
      divPrice: 25 },
    {
      seq:3,
      divTitleClassName: 'card-body bg-dark',
      divTitle: 'Premium',
      divStorage: 50,
      divEmails: 50,
      divDomains: 50,
      divSupport: 'Endless',
      divPrice: 50 },
  ];


  return (
    <div>
      <h1>문제 2 화면</h1>

      <nav className={'navbar navbar-expand-sm p-3'}>
        <a href={'#'} className={'navbar-brand fs-2'}>Responsive Pricing Tables</a>
      </nav>

      <div className={'row mx-2'}>
        {/*{divInformation.map((div) =>*/}
        {/*  <Ex2Sub divTitleClassName={div.divTitleClassName} divTitle={div.divTitle} divStorage={div.divStorage}*/}
        {/*          divEmails={div.divEmails} divDomains={div.divDomains} divSupport={div.divSupport} divPrice={div.divPrice} />)}*/}

        {
          divInformation.map(item => <Ex2Sub data={item} key={item.seq}/>)
        }
      </div>


    </div>
  );
}

export default Ex2;