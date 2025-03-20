import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/felveteli.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TablazatAgazat from './TablazatAgazat';

function Home(){
    const [selectedAgazat, setSelectedAgazat] = useState('');
    const navigate = useNavigate();

   
    const handleSelectChange = (p) => {
        setSelectedAgazat(p.target.value);
    };

    const handleDataClick = () => {
        if (selectedAgazat) {
            navigate(`/felvettek/${selectedAgazat}`);
        } else {
            alert('Kérlek válassz egy ágazatot!');
        }
    };
    return(
        <>
        <div className="container-fluid main">
                <div className="row">
                    <div className="col-md-4 bg-torzs">
                        <h1 className='text-dark'>Központi felvételi tájékoztató</h1>
                        <p>
                        A középiskolákba történő jelentkezés során az iskolák határozzák meg, hogy a felvételi rangsort mi alapján döntik el. A Jószakma Szakgimnázium a felvételi során az általános iskolából hozott és a központi felvételin szerzett pontok alapján rangsorolja az iskolába jelentkezőket. <a href="https://www.oktatas.hu/kozneveles/kozepfoku_felveteli_eljaras/kozepfoku_felveteli_eljaras_informacioi" target='_blank'>Tájákoztató oldal</a><br/>
                        <img src="logo.png"/></p>
                    </div>
                    <div className="col-md-4">
                        <h1>Tájékoztatás</h1> 
                        <h4>Jószakma Szakgimnázium </h4>
                        <p>A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. A felvételiző hozott pontjait az általános iskolai év végi eredményei alapján számolják, ez a pontszám legfeljebb 50 pont lehet. A hozott pontokat duplázzák. A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.</p><br/>
                        <p><img src="e-mail-marketing-2745489__340.jpg" className='img-thumbnail'/></p>
                    </div>
                    <div className="col-md-4 bg-torzs">
                    <h1>Az oldal használatáról</h1>
                    <h6>Ön az oldal használatával a következő információkhoz juthat hozzá</h6>
                    <ul>
                    <li>Előzetes rangsor: </li>
                      <ul>
                          <li>Nevek</li>
                          <li>Ágazat</li>
                          <li>Összes pontszám</li>
                      </ul>
                    <li>Előzetes rangsor nyelvi előkészítő</li>
                    <li>A felvettek névsora</li>
                    </ul>  
                    </div>
                </div>
                <div className='row bg-tablazat'>
                    <div className="col-md-6">
                        <h3>A felvételt nyert tanulók névsora a nyelvi előkészítőre</h3>
                        <p>Válassza ki melyik ágazat adatait szeretné látni:</p>
                        <select className="form-control" onChange={handleSelectChange}>
                            <option value="">-- Válasszon --</option>
                            <option value="elektronika">Elektronika</option>
                            <option value="informatika">Informatika</option>
                        </select>
                        <br />
                        <button onClick={handleDataClick}>Adatok</button>       
                    </div>
                    <div className="col-md-6">
                        <TablazatAgazat/>
                    </div>       
                </div>
            </div>
        </>
    )
}

export default Home;