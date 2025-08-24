import './App.css';
import { useState, useEffect } from 'react';
import HotelForm from './components/HotelForm';
import CarForm from './components/CarForm';
import Bill from './components/Bill';



function App() {
    
    const [hotelesGuardados, setHotelesGuardados] = useState([]);  

    const [nombreHotel, setNombreHotel] = useState("");

    const [personas, setPersonas] = useState(0);
  
    const [precioDia, setPrecioDia] = useState(0);
  
    const [diasAlojado, setDiasAlojado] = useState(0);
  
    const [descuentoHotel, setDescuentoHotel] = useState(0);

    const [alquilaCoche, setAlquilaCoche] = useState(false);

    const [precioCoche, setPrecioCoche] = useState(0);

    const [diasCoche, setDiasCoche] = useState(0);

    const [descuentoCoche, setDescuentoCoche] = useState(0);

    const [costeHotel, setCosteHotel] = useState(0);

    const [costeCoche, setCosteCoche] = useState(0);

    const [costeTotal, setCosteTotal] = useState(0);

    const [monedaSeleccionada, setMonedaSeleccionada] = useState("EUR");

    const [costeTotalConvertido, setCosteTotalConvertido] = useState(0);

    const [mostrarFactura, setMostrarFactura] = useState(false);

    const [viajeExtranjero, setViajeExtranjero] = useState(false);

    const [hotelSeleccionado, setHotelSeleccionado] = useState(null);

    const nombreHotelInvalido = nombreHotel.trim() === "";

    const personasInvalido = personas <= 0;

    const precioDiaInvalido = precioDia <= 0;

    const diasAlojadoInvalido = diasAlojado <= 0;

    const apikey = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

    const simboloMoneda = {
      EUR: "€",
      USD: "$",
      GBP: "£",
      JPY: "¥",
      CHF: "Fr",
      CAD: "C$",
      AUD: "A$",
      CNY: "¥",
      MXN: "Mex$",
      BRL: "R$",
      THB: "฿",
      PHP: "₱",
    };

   

    const handleSubmit = (e) => {
      e.preventDefault();

      setHotelSeleccionado(null);

      if (
      nombreHotel.trim() === "" ||
      personas <= 0 ||
      precioDia <= 0 ||
      diasAlojado <= 0
    ) {
   
      return;
    }


      const costeBrutoHotel = (precioDia * personas * diasAlojado);

      const totalHotel = costeBrutoHotel * (1 - descuentoHotel / 100);

      setCosteHotel(totalHotel);
      
      let totalCoche = 0;

      if(alquilaCoche) {

        const costeBrutoCoche = (precioCoche * diasCoche);
  
        totalCoche = costeBrutoCoche * (1 - descuentoCoche / 100);
  
        setCosteCoche(totalCoche);

      }

      const nuevoHotel = {
          nombre: nombreHotel,
          coste: totalHotel,
            personas,
            precioDia,
            diasAlojado,
            descuentoHotel,
            alquilaCoche,
            precioCoche,
            diasCoche,
            descuentoCoche,
            costeCoche: alquilaCoche ? totalCoche : 0,
            costeTotal: totalHotel + totalCoche,
            monedaSeleccionada,
            viajeExtranjero
                };

      setHotelesGuardados([...hotelesGuardados, nuevoHotel]);


      const total = totalHotel + totalCoche;

      setCosteTotal(total);

      setMostrarFactura(true);

    }

    useEffect(() => {

      if(mostrarFactura && monedaSeleccionada !== "EUR") {
        fetch(`https://v6.exchangerate-api.com/v6/${apikey}/latest/EUR`)
        .then(res => res.json())
        .then(data => {
          const rate = data.conversion_rates[monedaSeleccionada];
          setCosteTotalConvertido((costeTotal * rate).toFixed(2));
        });
        
      } else if (monedaSeleccionada === "EUR") {
        setCosteTotalConvertido(null);
      }

    }, [costeTotal, monedaSeleccionada, mostrarFactura, apikey]);




    return (

      <div>

      <div className="hidden max-[900px]:block bg-red-100 text-red-700 text-center p-2 text-base font-bold rounded-lg m-3">
          ⚠️ Esta aplicación está optimizada solo para escritorio.
        </div>

      <div className="separacion_lista_hotel">

        {mostrarFactura && 
          nombreHotel.trim() !== "" &&
          precioDia > 0 &&
          personas > 0 &&
          diasAlojado > 0 && (

        <div className="Fondo_formulario estructura_fondo">
                <h2 className="nombre_lista_hoteles">Hoteles Guardados</h2>
                    <ul>
                      {hotelesGuardados.map((hotel, index) => (
                        <li key={index} className="hoteles cursor-pointer hover:underline"
                          onClick={() => setHotelSeleccionado(hotel)}
                        >
                          <span>{hotel.nombre}: {hotel.coste + hotel.costeCoche}€</span>
                        </li>
                      ))}
                    </ul>
          </div>

          )}

         

        <div className="Fondo_formulario estructura_fondo">

          <form className=" border-yellow-800" onSubmit={handleSubmit}>
              <h1 className="separacion titulo"> Tu Mejor Reserva </h1>

              <HotelForm 
                personas={personas}
                setPersonas={setPersonas}
                precioDia={precioDia}
                setPrecioDia={setPrecioDia}
                diasAlojado={diasAlojado}
                setDiasAlojado={setDiasAlojado}
                descuentoHotel={descuentoHotel}
                setDescuentoHotel={setDescuentoHotel} 
                nombreHotel={nombreHotel}
                setNombreHotel={setNombreHotel}
                nombreHotelInvalido={nombreHotelInvalido}
                personasInvalido={personasInvalido}
                precioDiaInvalido={precioDiaInvalido}
                diasAlojadoInvalido={diasAlojadoInvalido}        
              />

              <div className="separacion centrar_checkbox_pregunta">
                <label className="flex alinear_pregunta_checkbox negrita" htmlFor="alquilaCoche">¿Vas a alquilar un coche?
                <input
                  className="checkbox"
                  id="alquilaCoche"
                  type="checkbox"
                  value={alquilaCoche}
                  onChange={(e) => setAlquilaCoche(e.target.checked)}           
                />

                </label>

              </div>

                {alquilaCoche && (

                  <CarForm
                    precioCoche={precioCoche}
                    setPrecioCoche={setPrecioCoche}
                    diasCoche={diasCoche}
                    setDiasCoche={setDiasCoche}
                    descuentoCoche={descuentoCoche}
                    setDescuentoCoche={setDescuentoCoche}
                  />
                )
  
              }

              <div className="separacion centrar_checkbox_pregunta">
                <label className="alinear_pregunta_checkbox negrita" htmlFor="viajeExtranjero">¿Vas a viajar a otro país?
                <input
                  className="checkbox"
                  id="viajeExtranjero"
                  type="checkbox"
                  value={viajeExtranjero}
                  onChange={(e)=> setViajeExtranjero(e.target.checked)}
                />
                </label>
              </div>

              {viajeExtranjero && (

                <div className="separacion">
                  <label className="separacion_pregunta negrita" htmlFor="monedaSeleccionada">¿A que moneda quieres hacer la conversión?</label>
                  <select 
                    className="configuracion_inputs"
                    id="monedaSeleccionada"
                    value={monedaSeleccionada}
                    onChange={(e) => setMonedaSeleccionada(e.target.value)}
                  
                  >
                    <option value="EUR">Euro (EUR)</option>
                    <option value="USD">Dólar USA (USD)</option>
                    <option value="GBP">Libra esterlina (GBP)</option>
                    <option value="JPY">Yen japonés (JPY)</option>
                    <option value="CHF">Franco suizo (CHF)</option>
                    <option value="CAD">Dólar canadiense (CAD)</option>
                    <option value="AUD">Dólar australiano (AUD)</option>
                    <option value="CNY">Yuan chino (CNY)</option>
                    <option value="MXN">Peso mexicano (MXN)</option>
                    <option value="BRL">Real brasileño (BRL)</option>
                    <option value="THB">Baht tailandés (THB)</option>
                    <option value="PHP">Peso filipino (PHP)</option>
                  </select>
                </div>

              )}


              <button className="separacion boton mt-3 hover_boton" type="submit">Calcular el total</button>

          </form>

           


           

        </div>

              {mostrarFactura &&
                nombreHotel.trim() !== "" &&
                precioDia > 0 &&
                personas > 0 &&
                diasAlojado > 0 &&  (
              
              <div className="Fondo_formulario estructura_fondo">
                <Bill
                  costeHotel={hotelSeleccionado ? hotelSeleccionado.coste : costeHotel}
                  personas={hotelSeleccionado ? hotelSeleccionado.personas : personas}
                  diasAlojado={hotelSeleccionado ? hotelSeleccionado.diasAlojado : diasAlojado}
                  descuentoHotel={hotelSeleccionado ? hotelSeleccionado.descuentoHotel : descuentoHotel}
                  alquilaCoche={hotelSeleccionado ? hotelSeleccionado.alquilaCoche : alquilaCoche}
                  costeCoche={hotelSeleccionado ? hotelSeleccionado.costeCoche : costeCoche}
                  diasCoche={hotelSeleccionado ? hotelSeleccionado.diasCoche : diasCoche}
                  descuentoCoche={hotelSeleccionado ? hotelSeleccionado.descuentoCoche : descuentoCoche}
                  costeTotal={hotelSeleccionado ? hotelSeleccionado.costeTotal : costeTotal}
                  costeTotalConvertido={hotelSeleccionado ? null : costeTotalConvertido}
                  monedaSeleccionada={hotelSeleccionado ? hotelSeleccionado.monedaSeleccionada : monedaSeleccionada}
                  simboloMoneda={simboloMoneda}

                />

              </div>

            )}

      </div>  

      </div>

    )


}


export default App;
