import * as image from './images'

export default function Divulgacao (){
    return (
    <>
            <div className="scale-90"></div>
            <header className="bg-white content-center max-w-[100vw] flex rounded-3xl justify-between mx-12 mt-12 mb-6 p-4 shadow-md">
                <div id="gasify-logo" className="flex content-center items-center space-x-2">
                    <image.GasifyLogo />
                    <image.Gasify />
                </div>
            </header>
            <main>
                <section id="dados" className="flex gap-x-16 justify-center items-center h-[300px]">
                    <div className="flex flex-col gap-y-4 text-center">
                        <p className="text-gray-800 text-5xl font-semibold font-['Poppins']">+50</p>
                        <p className="text-gray-800 text-[28px] font-semibold font-['Poppins']">Parceiros</p>
                    </div>
                    <div className="flex flex-col gap-y-4 text-center">
                        <p className="text-gray-800 text-5xl font-semibold font-['Poppins']">Até +20%*</p>
                        <p className="text-gray-800 text-[28px] font-semibold font-['Poppins']">Aumento de receita</p>
                    </div>
                    <div className="flex flex-col gap-y-4 text-center">
                        <p className="text-gray-800 text-5xl font-semibold font-['Poppins']">+1500</p>
                        <p className="text-gray-800 text-[28px] font-semibold font-['Poppins']">kgCO2 evitados</p>
                    </div>
                </section>
                <section id="divulgacao" className="flex flex-col justify-center items-center h-[300px]">
                    <p className="text-gray-800 text-4xl font-semibold font-['Poppins']">Expanda seu posto de combustível com sustentabilidade!</p>
                </section>
                <section className="flex justify-center items-end mb-[10rem]">
                    <div id="cards-divulgacao" className="grid grid-cols-2">
                        <div id="card" className="w-[20rem] h-[20rem] flex flex-col shadow-2xl  justify-center m-[3rem]">
                            <div className="flex-col flex justify-center items-center  gap-8 content-center">
                                <image.Card1 />
                                <div className="txt-center">
                                    <h2 className="w-[248px] text-zinc-700 text-xl font-semibold font-['Poppins']">Fidelização dos clientes</h2>
                                    <p className="w-[231px] h-[78px] text-center text-zinc-700 text-base font-normal font-['Poppins']">Com os créditos de carbono, você e seu cliente tem mais uma relação em comum!</p>
                                </div>
                            </div>
                        </div>
                        <div id="card" className="w-[20rem] h-[20rem] flex flex-col shadow-2xl  justify-center m-[3rem]">
                            <div className="flex-col flex justify-center items-center  gap-8 content-center">
                                <image.Card2 />
                                <div className="txt-center">
                                    <h2 className="w-[248px] text-zinc-700 text-xl font-semibold font-['Poppins']">Fidelização dos clientes</h2>
                                    <p className="w-[231px] h-[78px] text-center text-zinc-700 text-base font-normal font-['Poppins']">Com os créditos de carbono, você e seu cliente tem mais uma relação em comum!</p>
                                </div>
                            </div>
                        </div>
                        <div id="card" className="w-[20rem] h-[20rem] flex flex-col shadow-2xl  justify-center m-[3rem]">
                            <div className="flex-col flex justify-center items-center  gap-8 content-center">
                                <image.Card3 />
                                <div className="txt-center">
                                    <h2 className="w-[248px] text-zinc-700 text-xl font-semibold font-['Poppins']">Fidelização dos clientes</h2>
                                    <p className="w-[231px] h-[78px] text-center text-zinc-700 text-base font-normal font-['Poppins']">Com os créditos de carbono, você e seu cliente tem mais uma relação em comum!</p>
                                </div>
                            </div>
                        </div>
                        <div id="card" className="w-[20rem] h-[20rem] flex flex-col shadow-2xl  justify-center m-[3rem]">
                            <div className="flex-col flex justify-center items-center  gap-8 content-center">
                                <image.Lucro />
                                <div className="txt-center">
                                    <h2 className="w-[248px] text-zinc-700 text-xl font-semibold font-['Poppins']">Fidelização dos clientes</h2>
                                    <p className="w-[231px] h-[78px] text-center text-zinc-700 text-base font-normal font-['Poppins']">Com os créditos de carbono, você e seu cliente tem mais uma relação em comum!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <image.GarotoDivulgacao />
                </section>
                <section id="esg" className="flex flex-col text-center scale-75 gap-y-8 max-w-[1200px] m-auto">
                    <h2 className="text-black text-5xl font-semibold font-['Poppins'] m-8">ESG: o que significa e benefícios ao adequar o seu negócio</h2>
                    <p className=" text-black text-2xl font-medium font-['Poppins']">
                        A sigla inclui um conjunto de práticas ambientais, sociais e de governança que uma empresa deve adotar em seus projetos, com os seus funcionários, clientes e possíveis investidores.
                    </p>
                    <p className=" text-black text-2xl font-medium font-['Poppins']">
                        A sigla ESG significa Environmental, Social and Governance (Ambiental, Social e Governança) ou ASG em português.
                    </p>
                    <p className=" text-black text-2xl font-medium font-['Poppins']">
                        Empresas que usam os padrões ESG possuem maior probabilidade de sucesso no longo prazo.
                    </p>
                </section>
            </main>
            <footer className="relative">
                <image.Planta />
                <image.Footer/>
            </footer>

        </>
    )
}