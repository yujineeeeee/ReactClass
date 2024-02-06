import React from 'react';
import SummerHolidaySub from './SummerHolidaySub';

// https://www.w3schools.com/w3css/img_5terre.jpg
// https://www.w3schools.com/w3css/img_monterosso.jpg
// https://www.w3schools.com/w3css/img_vernazza.jpg
// https://www.w3schools.com/w3css/img_manarola.jpg
// https://www.w3schools.com/w3css/img_corniglia.jpg
// https://www.w3schools.com/w3css/img_riomaggiore.jpg

function SummerHoliday(props) {
  return (
    <div>
      <nav className={'navbar navbar-expand-sm bg-success navbar-dark p-3'}>
        <a href={'#'} className={'navbar-brand fs-2'}>Summer Holiday</a>
      </nav>

      <div className={'container-fluid mt-4'}>
        <div className={'row'}>
          <div className={'col-sm'}>
            <SummerHolidaySub imgSrc={'https://www.w3schools.com/w3css/img_5terre.jpg'} imgName={'5 Terre'}/>
          </div>
          <div className={'col-sm'}>
            <SummerHolidaySub imgSrc={'https://www.w3schools.com/w3css/img_monterosso.jpg'} imgName={'Monterosso'}/>
          </div>
          <div className={'col-sm'}>
            <SummerHolidaySub imgSrc={'https://www.w3schools.com/w3css/img_vernazza.jpg'} imgName={'Vernazza'}/>
          </div>
        </div>

        <div className={'row mt-3'}>
          <div className={'col-sm'}>
            <SummerHolidaySub imgSrc={'https://www.w3schools.com/w3css/img_manarola.jpg'} imgName={'Manarola'}/>
          </div>
          <div className={'col-sm'}>
            <SummerHolidaySub imgSrc={'https://www.w3schools.com/w3css/img_corniglia.jpg'} imgName={'Corniglia'}/>
          </div>
          <div className={'col-sm'}>
            <SummerHolidaySub imgSrc={'https://www.w3schools.com/w3css/img_riomaggiore.jpg'} imgName={'Riomaggiore'}/>
          </div>
        </div>


      </div>
    </div>
  );
}

export default SummerHoliday;