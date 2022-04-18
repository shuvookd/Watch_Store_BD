import img from './Home.jpg'
import './Home.css'
import HomeReview from '../HomeReview/HomeReview';
import { Link } from 'react-router-dom';
import useData from '../hooks/useData';
const Home = () => {
    const [information]=useData([]);
    return (
        <div>
            <section className='section-css'>
            <div className='row  m-0 p-0  '>
              <div className='col-6 px-5  sm:col-12'>
                <h1 className='text-center testcss'>
                Best Watch Shop in BD
                <br /> Chose and Buy

                </h1>
                <br />
                <p><small>Established in the year 2019 at Pune, Maharashtra,
                     we “Kanifa Technology” are a 
                    Sole Proprietorship based firm, engaged as the foremost 
                    Wholesaler and Trader of Bullet Camera, Dome Camera and much more. 
                    Our products are high in demand due to their premium quality and affordable prices.
                     Furthermore, we ensure to timely deliver these products to our clients, through this we have gained a huge clients base in the market.</small></p>

                <br />
                <button className='btn bg-primary text-white fw-bold'>Read More </button>
               
              </div>
              <div className='col-6 newcss2  '>               
                <img src={img} alt="img" />
              </div>
            </div>

            {/* Reviews section................... */}

            
            </section> 
            <section className='bg-light py-4 my-5'>
              <h1 className='test'>Customer Reviews</h1>
              <div className='card-css my-4'>

              {
                information.slice(0,3).map(info=><HomeReview key={info.id} data={info} ></HomeReview>)
              }
             
              </div>
              <Link to="/Review"  className='btn  bg-primary text-white fw-bold text-center'>More Reviews</Link>

            </section>
        </div>
    );
};

export default Home;