import { useState, useEffect } from "react";
import axios from "axios";
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tachyons";

function TablazatElozetes() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3001/elozetes-rangsor')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Hiba történt az adatok lekérésekor:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Előzetes névsor:</th>
                    </tr>
                    <tr>
                        <th scope="col">Tanuló neve</th>
                        <th scope="col">Ágazat</th>
                        <th scope="col">Összes pontszám</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((diak, index) => (
                        <tr key={index}>
                            <td scope="row">{diak['Tanuló neve']}</td>
                            <td scope="row">{diak['Ágazat']}</td>
                            <td scope="row">{diak['osszpont']}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TablazatElozetes;