import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../css/felveteli.css';

function Felvettek() {
    const { agazat } = useParams();
    const [felvettek, setFelvettek] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/felvettek/${agazat}`)
            .then(response => {
                console.log(response.data);
                setFelvettek(response.data);
            })
            .catch(error => console.error("Hiba a felvettek lekérdezésekor:", error));
    }, [agazat]);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 bg-torzs">
                        <h3 className='text-dark'>Központi felvételi tájékoztató</h3>
                        <p>
                            A középiskolákba történő jelentkezés során az iskolák határozzák meg, hogy a felvételi rangsort mi alapján döntik el. A Jószakma Szakgimnázium a felvételi során az általános iskolából hozott és a központi felvételin szerzett pontok alapján rangsorolja az iskolába jelentkezőket.<a href="https://www.oktatas.hu/kozneveles/kozepfoku_felveteli_eljaras/kozepfoku_felveteli_eljaras_informacioi" target='_blank'>Tájákoztató oldal</a> <br/>
                            <img src="/logo.png"/>
                        </p>
                    </div>
                    <div className="col-md-6 bg-white p-3">
                        <h3>Tájékoztatás</h3>
                        <h3>Jószakma Szakgimnázium </h3>
                        <p>A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. A felvételiző hozott pontjait az általános iskolai év végi eredményei alapján számolják, ez a pontszám legfeljebb 50 pont lehet. A hozott pontokat duplázzák. A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.</p><br/>
                        <p><img src="/e-mail-marketing-2745489__340.jpg" className="img-thumbnail" alt="marketing" title="marketing" /></p>
                    </div>
                    <h3>A Felvettek rangsora, nyelvi előkészítő. A maximálisan felvehető tanulók száma 32 fő.</h3>
                    
                </div>
            </div>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Tanuló neve</th>
                            <th scope="col">Ágazat</th>
                            <th scope="col">Összes pontszám</th>
                        </tr>
                    </thead>
                    <tbody>
                        {felvettek.map((tanulo, index) => (
                            <tr key={index}>
                                <td scope="row">{tanulo.nev}</td>
                                <td scope="row">{tanulo.agazat}</td>
                                <td scope="row">{tanulo.osszpont} pont</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Felvettek;