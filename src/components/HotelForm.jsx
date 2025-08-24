import React from "react";

function HotelForm ({
    nombreHotel,
    setNombreHotel,
    personas,
    setPersonas,
    precioDia,
    setPrecioDia,
    diasAlojado,
    setDiasAlojado,
    descuentoHotel,
    setDescuentoHotel,
   nombreHotelInvalido,
   personasInvalido,
   precioDiaInvalido,
   diasAlojadoInvalido
}) {

    return (
        <div>
            <h2 className="separacion subtitulo negrita">Información del Hotel</h2>

            <div className="separacion">
                <label htmlFor="nombreHotel" className="separacion_pregunta negrita">¿Cuál es el nombre del hotel?</label>
                <input
                    className={`configuracion_inputs ${nombreHotelInvalido ? "invalido" : "valido"}`}
                    id="nombreHotel"
                    type="text"
                    value={nombreHotel}
                    onChange={(e) => setNombreHotel(e.target.value)}
                />
            </div>



            <div>
                <label className="separacion_pregunta negrita" htmlFor="personas">¿Habitación para cuantas personas?</label>
                <input
                    className={`configuracion_inputs ${personasInvalido ? "invalido" : "valido"}`}
                    id="personas"
                    type="number"
                    min="0"
                    value={personas}
                    onChange={(e) => setPersonas(e.target.value)}
                />
            </div>

            <div className="p-4">
                <label className="separacion_pregunta negrita" htmlFor="precioDia">Precio por día: </label>
                <input
                    className={`configuracion_inputs ${precioDiaInvalido ? "invalido" : "valido"}`}
                    id="precioDia"
                    type="number"
                    min="0"
                    value={precioDia}
                    onChange={(e) => setPrecioDia(e.target.value)}
                />
            </div>

            <div className="separacion">
                <label className="separacion_pregunta negrita" htmlFor="diasAlojado">Nº de días que se aloja en el hotel:</label>
                <input
                    className={`configuracion_inputs ${diasAlojadoInvalido ? "invalido" : "valido"}`}
                    id="diasAlojado"
                    type="number"
                    min="0"
                    value={diasAlojado}
                    onChange={(e) => setDiasAlojado(e.target.value)}
                />
            </div>

            <div className="separacion">
                <label className="separacion_pregunta negrita" htmlFor="descuento">Si se aplica un descuento, ¿qué porcentaje es?</label>
                <input
                    className="configuracion_inputs"
                    id="descuento"
                    type="number"
                    min="0"
                    value={descuentoHotel}
                    onChange={(e) => setDescuentoHotel(e.target.value)}         
                />
            </div>


        </div>
    )

};

export default HotelForm;