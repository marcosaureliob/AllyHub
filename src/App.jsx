import React from 'react'
import api from './services/axios'

function App() {

    const [paises, setPaises] = React.useState([]);
    const [cidades, setCidades] = React.useState([]);

    React.useEffect(() => {
        api.get("/country")
            .then((response) => {
                setPaises(response.data)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro : " + err);
            });
        api.get("/city")
            .then((response) => {
                setCidades(response.data)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro : " + err);
            });
    }, []);

    return (
        <div className="App">
            
       <section className="max-w-10/12 h-screen m-auto bg-[#dfe9f5] mt-3">
           <div className="text-center">
               <h1 className=" mx-auto sm:text-3xl font-semibold px-2 py-1 5 whitespace-pre-wrap">AllyHub</h1>
               <form action="#" class="w-11/12 mx-auto border-2 border-gray-900 rounded-md p-16 flex flex-col sm:flex-row sm:justify-evenly">
                    <div className="p-16 flex flex-col border-2 bg-white rounded-lg  border-red-50">
                        <h1 className="text-lg sm:text-4xl font-semibold tracking-wide mb-2">Dados Pessoais</h1>
                        <div className="p-2 border-[0.75px] border-gray-800 rounded">
                            <input type="text" placeholder="Nome" className=" rounded-sm border-[0.5px] border-red-100 placeholder:text-center placeholder:text-lg focus:outline-none p-1" required/>
                        </div>
                        <div className="p-2 border-[0.75px] border-gray-800 rounded mt-3">
                            <input type="email" placeholder="Email" className=" rounded-sm border-[0.5px] border-red-100 placeholder:text-center placeholder:text-lg focus:outline-none p-1" required/>
                        </div>
                        <input type="number" placeholder="(xx) xxxxx-xxxx" className="border-[0.5px] border-gray-800 rounded placeholder:text-center focus:outline-none p-2 mt-3" required/>
                        <input type="number" placeholder="CPF" className="border-[0.5px] border-gray-800 rounded placeholder:text-center placeholder:text-lg focus:outline-none p-2 mt-3" required/>
                    </div>

                    
                    <div className="p-16 flex flex-col border-2 bg-white rounded-lg  border-red-50">
                        <h1 className="text-lg sm:text-4xl font-semibold tracking-wide mb-2">Destinos de Interesse</h1>
                        <div className="p-2 border-[0.75px] border-gray-800 rounded">
                            <select name="pais" id="pais" className=" rounded-sm border-[0.5px] border-red-100 placeholder:text-center placeholder:text-lg focus:outline-none p-1">
                                {paises.map((pais) => {
                                    return (
                                <option className="rounded-sm border-[0.5px] border-red-100 placeholder:text-center placeholder:text-lg focus:outline-none p-1" key={pais.code} value={pais.code}>{pais.name_ptbr}</option>
                                    )})
                                }
                            </select>
                        </div>
                        <div className="p-2 border-[0.75px] border-gray-800 rounded mt-3">
                        <select name="pais" id="pais" className=" rounded-sm border-[0.5px] border-red-100 placeholder:text-center placeholder:text-lg focus:outline-none p-1">
                            {cidades.map((cidade) => {
                                return (
                                <option className=" rounded-sm border-[0.5px] border-red-100 placeholder:text-center placeholder:text-lg focus:outline-none p-1" key={cidade.id} value={cidade.name_ptbr}>{cidade.name_ptbr}</option>
                                )})
                            }
                        </select>
                        </div>
                    
                        <button type="submit" className="w-full bg-[#0100fe] hover:bg-emerald-600 text-white text-2xl p-2 rounded-xl mt-3">Enviar</button>
                    </div>
               </form>
           </div>
       </section>
    </div>
         
  


    )


}

export default App