import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TablazatAgazat from "./TablazatAgazat";

function Select() {
    const { azonosito } = useParams();
    const [agazatDetails, setAgazatDetails] = useState(null);

   
    useEffect(() => {
        if (!azonosito) return;

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/felvettek/${azonosito}`);
                setAgazatDetails(response.data);
            } catch (error) {
                console.error("Hiba történt az ágazat részleteinek lekérésekor:", error);
                setAgazatDetails(null);
            }
        };

        fetchData();
    }, [azonosito]);

    return (
        <div>
            {agazatDetails ? ( <TablazatAgazat data={agazatDetails} /> ) : ( <p>Az adatok betöltése folyamatban...</p> )}
        </div>
    );
}

export default Select;
