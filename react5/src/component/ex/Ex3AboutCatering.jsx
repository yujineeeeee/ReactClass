import React from 'react';

function Ex3AboutCatering(props) {
  return (
    <div className={'row justify-content-center my-5 '}>
      <div className={'col-5'}>
        <img className={'img-fluid'} src={'https://www.w3schools.com/w3images/tablesetting2.jpg'} alt={''} />
      </div>
      <div className={'col-5 text-center'}>
        <h1 className={'fw-normal p-3'}>About Catering</h1>
        <h4 className={'fw-normal p-3'}>Tradition since 1889</h4>
        <div className={'text-start'}>
          The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span
          className={'bg-dark-subtle'}> seasonal</span> ingredients.
        </div>
        <div className={'mt-3 text-body-secondary text-start'}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  );
}

export default Ex3AboutCatering;