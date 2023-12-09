'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
export default function NavAbastecimento() {
    const pathName = usePathname();
    const caminhoAtual = pathName.split("/")[2];

    const menu = [
        {title: "Abastecimento",
        link: "escolhaproduto"},
        {title: "Use seu Carbon Cash para resgatar!",
        link: "usocc"},
        {title: "Pagamento",
        link: "pagamento"}
    ]

    const posicaoPaginaAtual = menu.findIndex(item => item.link == caminhoAtual);

    return (
    <nav className="justify-around space-x-8 mx-4 my-14 text-center hidden md:flex">
            {menu.map((item, index) => 
            posicaoPaginaAtual >= index
            ? <Link key={item.title} className={`w-[100%] font-medium ${caminhoAtual == item.link ? "border-[--gasify-preto] text-[--gasify-preto]" : "border-[--gasify-verde] text-[--gasify-verde]"} border-b-2 cursor-pointer  transition-all hover:border-b-[--gasify-cinza] hover:text-[--gasify-cinza]`}
            id="nav-escolha-produto" href={`/abastecimento/${item.link}`}>{item.title}</Link>
            : <p key={item.title} className={`w-[100%] font-medium border-[--gasify-preto-claro] text-[--gasify-preto-claro] border-b-2 transition-all hover:border-b-[--gasify-cinza] hover:text-[--gasify-cinza]`}
            id="nav-escolha-produto">{item.title}</p>)}
        </nav>
    )
}