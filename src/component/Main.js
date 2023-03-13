import Hero from './Hero';
import CardService from './CardService';
import Service1 from "./../assets/gb3.png";
import Service2 from "./../assets/gb4.jpg";
import Service3 from "./../assets/gb5.jpg";
import CardShop from './CardShop';

const MainContent = ()=>{
    return (
      <>
        <Hero />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center my-5">
              <h1>Service</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-12">
              <CardService
                image={Service1}
                service="Servide Laptop"
                deskripsi="ok"
              />
            </div>
            <div className="col-lg-3 col-12">
              <CardService image={Service2} service="Cleaning" deskripsi="ok" />
            </div>
            <div className="col-lg-3 col-12">
              <CardService
                image={Service3}
                service="Installing"
                deskripsi="ok"
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 text-center my-5'>
                <h1>Contact</h1>
            </div>
            <div className='col-12 my-3'>
                <CardShop  image={Service1} deskripsi="lorem ajshhfgaujjsgfd"/>
            </div>
            <div className='col-12 my-3'>
                <CardShop  image={Service2} deskripsi="lorem ajshhfgaujjsgfd"/>
            </div>
            <div className='col-12 my-3'>
                <CardShop  image={Service3} deskripsi="lorem ajshhfgaujjsgfd"/>
            </div>

          </div>
        </div>
      </>
    );
}
export default MainContent;