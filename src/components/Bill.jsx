
function Bill({
    //Datos del hotel
    personas,
    precioDia,
    diasAlojado,
    descuentoHotel,
    costeHotel,

    //Datos del coche
    alquilaCoche,
    diasCoche,
    descuentoCoche,
    costeCoche,

    //Precios totales
    costeTotal,
    monedaSeleccionada,
    costeTotalConvertido,

    //Conversión
    simboloMoneda

}) {

     const pluralizar = (cantidad, singular, plural) =>
       Number(cantidad) === 1 ? singular : plural;


    return(
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Desglose del Coste: </h2>

            <div className="mb-4">
                <h3 className="negrita">Habitación de hotel: {costeHotel}€</h3>
                <p className="text-base text-gray-700">Para {personas} {pluralizar(personas, "persona", "personas")}, {diasAlojado} {pluralizar(diasAlojado, "noche", "noches")}.</p>
                <p className="text-base text-gray-700">El precio por persona es de: {precioDia}€</p>
                {descuentoHotel > 0 && (

                    <p className="text-base text-gray-700">Con un descuento de {descuentoHotel}%</p>

                )}
           
            </div>

            {alquilaCoche && (
                <div className="mb-4">
                    <h3 className="negrita">Alquiler del coche: {costeCoche}€</h3>
                    <p className="text-base text-gray-700">Para {diasCoche} {pluralizar(diasCoche, "día", "días")}.</p>
                    {descuentoCoche > 0 && (
                        <p className="text-base text-gray-700">Con un descuento del {descuentoCoche}%</p>
                    )}
                </div>
            )}

            <hr className="my-4 border-gray-700"/>

            <h2 className="text-2xl font-bold mb-2">Total:</h2>
            <h3 className="text-lg font-bold">Coste total en €: {costeTotal} </h3>
            {costeTotalConvertido && (
                <h3 className="text-lg font-bold">Coste total en {simboloMoneda[monedaSeleccionada]}: {costeTotalConvertido}</h3>
            )}

        </div>
    );


}

export default Bill;