import { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
 
function Tablazat() {
    const [data, setData] = useState([]);
 
    useEffect(() => {
        axios.get("http://localhost:3001/rangsor")
            .then(response => setData(response.data))
            .catch(error => console.error("Hiba az adatok lekérésénél:", error));
    }, []);
 
    return (
        <div>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Tanuló neve</th>
                        <th>Ágazat</th>
                        <th>Összes pontszám</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.nev}</td>
                            <td>{row.agazat}</td>
                            <td>{row.osszes_pont}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
 
export default Tablazat;