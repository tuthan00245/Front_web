import './Home.scss';
import HomeSlider from './HomeSlider/HomeSlider';
import HomeDeals from './HomeDeals/HomeDeals';
// import HomeCategory from './HomeCategory/HomeCategory';
// import HomeNews from './HomeNews/HomeNews';

type Props = {};

const Home = (props: Props) => {
    return (
        <div className="home-page">
            <HomeSlider />
            <HomeDeals />
            {/* <HomeCategory />
            <HomeNews /> */}
        </div>
    );
};

export default Home;
