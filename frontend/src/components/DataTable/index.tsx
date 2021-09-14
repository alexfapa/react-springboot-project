import axios from "axios";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";
import Pagination from "components/Pagination"

const DataTable = () => {

    const [activePage, setActivePage] = useState(0);
    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    //neste caso o colchetes do final do useEffect indica o observer para a variável activePage
    //Toda vez que esta variável mudar sera executado o get novamente.
    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
            .then(response => {
                setPage(response.data);
            });
    }, [activePage]);

    const changePage = (index: number) => {
        setActivePage(index);
    }

    return (
        /*O valor page ao lado do Pagination é o argumento que é enviado para ser recebido no 
        arquivo index do compoente Pagination*/
        <>            
            <Pagination page={page} onPageChange={changePage}/>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>

                        { //<!--o interrogação na frente do content indica que só irá trazer algo se ele estiver preenchido-->
                            page.content?.map(item => (
                                //o key abaixo determina um id para as interações do react.
                                <tr key={item.id}>
                                    <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                                    <td>{item.seller.name}</td>
                                    <td>{item.visited}</td>
                                    <td>{item.deals}</td>
                                    <td>{item.amount.toFixed(2)}</td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </>
    );
}
export default DataTable;