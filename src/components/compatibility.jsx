import * as image from '@/components/images'

export default function CompatibilityComponent() {
    return (
        <div id="compatibility" className="md:hidden flex flex-col justify-center items-center text-center h-[70vh] my-auto">
            <image.Compatibility />
            <p className="text-[--gasify-preto-claro] ml-2 font-bold font-2xl">
                Seu dispositivo não é compatível com o Gasify
            </p>
            <div className="flex justify-center items-center">
                <p className="text-[--gasify-preto-claro]">
                Por favor, acesse o Gasify em um dispositivo com tela maior
                </p>
            </div>
        </div>
    )
}