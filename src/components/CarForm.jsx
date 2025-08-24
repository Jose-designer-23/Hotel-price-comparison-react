import React from "react";

function CarForm ({
   precioCoche,
   setPrecioCoche,
    diasCoche,
   setDiasCoche,
   descuentoCoche, 
   setDescuentoCoche
}) {

    return (

        <div>

            <div className="separacion">
                <label className="separacion_pregunta negrita" htmlFor="precioCoche">Precio del coche: </label>
                <input
                    className="configuracion_inputs"
                    id="precioCoche"
                    type="number"
                    min="0"
                    value={precioCoche}
                    onChange={(e) => setPrecioCoche(e.target.value)}                
                />
            </div>


            <div className="separacion">
                <label className="separacion_pregunta negrita" htmlFor="diasCoche">¿Cuántos días alquilas el coche</label>
                <input
                    className="configuracion_inputs"
                    id="diasCoche"
                    type="number"
                    min="0"
                    value={diasCoche}
                    onChange={(e) => setDiasCoche (e.target.value)}           
                />
            </div>

            <div className="separacion">
                <label className="separacion_pregunta negrita" htmlFor="descuento">Si se aplica un descuento, ¿qué porcentaje es?</label>
                <input
                    className="configuracion_inputs"
                    id="descuento"
                    type="number"
                    min="0"
                    value={descuentoCoche}
                    onChange={(e) => setDescuentoCoche(e.target.value)}                
                />
            </div>


        </div>

    )


}

export default CarForm;