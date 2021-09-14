import { SalePage } from "types/sale";

type Props = {
    page: SalePage
    onPageChange: Function;
}

const Pagination = ( { page, onPageChange } : Props) => {
    /*Explicação do primeiro <li>:
        se o page.first for true coloca disable desabilitando o botão, caso contrátio coloca vazio e 
        habilita o botão
    */ 
    return (
        <div className="row d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? 'disabled' : ''} `}>
                        <button className="page-link"  onClick={() => onPageChange(page.number - 1)}>Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{ page.number + 1 }</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''} `}>
                        <button className="page-link" onClick={() => onPageChange(page.number + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;