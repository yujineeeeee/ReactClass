import React from 'react';
import Ex1Sub from './Ex1Sub';

function Ex1(props) {

  const imagesInfo = [
    { seq: 1,
      imgSrc : 'https://www.w3schools.com/w3css/img_5terre.jpg',
      imgTitle: '5 Terre',
      imgText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},

    { seq: 2,
      imgSrc : 'https://www.w3schools.com/w3css/img_monterosso.jpg',
      imgTitle: 'Monterosso',
      imgText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},

    { seq: 3,
      imgSrc : 'https://www.w3schools.com/w3css/img_vernazza.jpg',
      imgTitle: 'Vernazza',
      imgText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},

    { seq: 4,
      imgSrc : 'https://www.w3schools.com/w3css/img_manarola.jpg',
      imgTitle: 'Manarola',
      imgText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},

    { seq: 5,
      imgSrc : 'https://www.w3schools.com/w3css/img_corniglia.jpg',
      imgTitle: 'Corniglia',
      imgText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},

    { seq: 6,
      imgSrc : 'https://www.w3schools.com/w3css/img_riomaggiore.jpg',
      imgTitle: 'Riomaggiore',
      imgText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
  ]

  return (
    <div>
      <h1>문제 1 화면</h1>

      <nav className={'navbar navbar-expand-sm bg-success navbar-dark p-3'}>
        <a href={'#'} className={'navbar-brand fs-2'}>Summer Holiday</a>
      </nav>

      <div className={'container'}>
        {/*{imagesInfo.map((imageInfo) => <Ex1Sub imgSrc={imageInfo.imgSrc} imgTitle={imageInfo.imgTitle} imgText={imageInfo.imgText}/>)}*/}

        {
          imagesInfo.map(item => <Ex1Sub data={item} key={item.seq}/>)
        }
      </div>

    </div>
  );
}

export default Ex1;