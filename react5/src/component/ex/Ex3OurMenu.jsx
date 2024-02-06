import React from 'react';

function Ex3OurMenu(props) {
  return (
    <div className={'row justify-content-center my-5'}>
      <div className={'col-5'}>
        <h1 className={'fw-normal text-center my-5'}>Our Menu</h1>

        <div className={'mt-5'}>
          <h4 className={'fw-normal'}>Bread Basket</h4>
          <div className={'mt-2 text-body-secondary'}>Assortment of fresh baked fruit breads and muffins 5.50</div>
        </div>

        <div className={'mt-5'}>
          <h4 className={'fw-normal'}>Honey Almond Granola with Fruits</h4>
          <div className={'mt-2 text-body-secondary'}>Assortment of fresh baked fruit breads and muffins 5.50</div>
        </div>

        <div className={'mt-5'}>
          <h4 className={'fw-normal'}>Bread Basket</h4>
          <div className={'mt-2 text-body-secondary'}>Assortment of fresh baked fruit breads and muffins 5.50</div>
        </div>

        <div className={'mt-5'}>
          <h4 className={'fw-normal'}>Bread Basket</h4>
          <div className={'mt-2 text-body-secondary'}>Assortment of fresh baked fruit breads and muffins 5.50</div>
        </div>
      </div>

      <div className={'col-5'}>
        <img className={'img-fluid'} src={'https://www.w3schools.com/w3images/tablesetting.jpg'} alt={''} />
      </div>
    </div>

  );
}

export default Ex3OurMenu;