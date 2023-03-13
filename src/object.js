import { useState } from "react";

const Object = () =>{

    let [mtr, setMtr] = useState({
        merek: "Yamaha",
        jenis: "Vixion New 2018",
        warna: "Biru",
        bensin: 20,
        harga: 27000000,
        plat: "DN2716LF",
        status: "OFF",
        // method

        start: () => {
            setMtr(data => {
                return{
                    ...data,
                    status: "ON",
                    bensin: data.bensin - 5,
                }
            })
        },
        stop: () => {
            setMtr((data) => {
              return {
                ...data,
                status: "OFF",
              };
            });
        },
        isiBensin: () => {
            setMtr((data) => {
              return {
                ...data,
                bensin : data.bensin + 5,
              };
            });
        }
    });
    return (
      <>
        <div>
            <h1>Motor</h1>
          <ul>
            <li>Merek : {mtr.merek}</li>
            <li>Type : {mtr.jenis}</li>
            <li>Warna : {mtr.warna}</li>
            <li>Bahan Bakar : {mtr.bensin} L</li>
            <li>No Polisi : {mtr.plat}</li>
            <li>Status : {mtr.status}</li>
          </ul>
          <button onClick={() => mtr.start()}>Start Mesin</button>
          <button onClick={() => mtr.stop()}>Stop Mesin</button>
          <button onClick={() => mtr.isiBensin()}>Isi Bensin</button>
        </div>
      </>
    );
}
export default Object;