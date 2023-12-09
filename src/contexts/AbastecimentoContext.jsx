import Storage from '@/services/supabase'

async function getProducts() {
    return await Storage.read('combustivel');
}

export const AbastecimentoContext = createContext({});

export const AbastecimentoProvider = ({ children }) => {
    const [valorTotal, setValorTotal] = useState(0);
    const [CCTotal, setCCTotal] = useState(0);
    const [products, setProducts] = useState([]);

    const onChangeCard = (oldValorCard, oldCCCard, newValorCard = 0, newCCCard = 0) => {
        const newValorTotal = (valorTotal - Number(oldValorCard) + Number(newValorCard)).toFixed(2);
        const newCCTotal = (CCTotal - Number(oldCCCard) + Number(newCCCard)).toFixed(2);
        setValorTotal(newValorTotal);
        setCCTotal(newCCTotal);
    }
    const loadProducts = async () => {
        const products = await getProducts();
        console.log(products);
        setProducts(products);
    }

    // useEffect(() => {
    //     loadProducts();
    // }, []);

    return (
        <AbastecimentoContext.Provider value={{ valorTotal, CCTotal, products, onChangeCard, loadProducts }}>
            {children}
        </AbastecimentoContext.Provider>
    );
}