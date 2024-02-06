import Profile from './Profile';

const Car = props => (
  <div>
    {/* 자식 컴포넌트인 Profile을 3번 호출 */}
    {/* 각 컴포넌트마다 속성값을 4개 전달 */}
    {/* 속성명은 name, type, price, ele 로 사용자가 직접 설정 */}
    <Profile name={'토레스'} type={'SUV'} price={3000} ele={false} />
    <Profile name='EV6' type='세단' price={6000} ele={true} />
    <Profile name={'그랜저'} type={'세단'} price={6000} ele={false} />
  </div>
);

export default Car;