import React from 'react';
import Ex3AboutCatering from './Ex3AboutCatering';
import Ex3OurMenu from './Ex3OurMenu';

function Ex3(props) {
  return (
    <div>
      <h1>문제 3 화면</h1>

      <nav className={'navbar navbar-expand-lg shadow-sm'}>
        <form className={'container-fluid'}>
          <a className={'navbar-brand'} href={'#'}>Gourmet au Catering</a>
          <div className={'justify-content-end'}>
            <a className={'text-decoration-none me-3'} href={'#'}>About</a>
            <a className={'text-decoration-none me-3'} href={'#'}>Menu</a>
            <a className={'text-decoration-none me-3'} href={'#'}>Contact</a>
          </div>
        </form>
      </nav>

      <div className={'container'}>
        <div className={'row'}>
          <div className={'col'}>
            <img className={'img-fluid'} src={'https://www.w3schools.com/w3images/hamburger.jpg'} alt={''} />
          </div>
        </div>

        <Ex3AboutCatering />

        <hr />

        <Ex3OurMenu />

        <hr/>

        <div className={'row justify-content-center'}>
          <div className={'col-10'}>
            <h1 className={'fw-normal my-5'}>Contact</h1>

            <div className={'my-3'}>
              We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.
            </div>
            <div className={'my-3 fw-bold'}>
              Catering Service, 42nd Living St, 43043 New York, NY
            </div>
            <div className={'my-3'}>
              You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:
            </div>

            <form>

            </form>


          </div>
        </div>


      </div>

    </div>
  );
}

export default Ex3;