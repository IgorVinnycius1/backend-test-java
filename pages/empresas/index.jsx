import { useState, useEffect } from 'react';

import { Link } from 'components';
import { empresaService } from 'services';

export default Index;

function Index() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        empresaService.getAll().then(x => setUsers(x));
    }, []);

    function deleteUser(id) {
        setUsers(users.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        empresaService.delete(id).then(() => {
            setUsers(users => users.filter(x => x.id !== id));
        });
    }

    return (
        <div>
            <h1>Empresas</h1>
            <Link href="/empresas/add" className="btn btn-sm btn-success mb-2">Adicionar Empresa</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '20%' }}>Nome</th>
                        <th style={{ width: '15%' }}>CNPJ</th>
                        <th style={{ width: '15%' }}>Telefone</th>
                        <th style={{ width: '25%' }}>Quantidade de vagas p/ carro</th>
                        <th style={{ width: '25%' }}>Quantidade de vagas p/ moto</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.id}>
                            <td>{user.nome}</td>
                            <td>{user.cnpj}</td>
                            <td>{user.telefone}</td>
                            <td>{user.qtdvgcarro}</td>
                            <td>{user.qtdvgmoto}</td>
                            
                            <td style={{ whiteSpace: 'nowrap' }}>
                            </td>
                        </tr>
                    )}
                    {!users &&
                        <tr>
                            <td colSpan="7" className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {users && !users.length &&
                        <tr>
                            <td colSpan="7" className="text-center">
                                <div className="p-2">Sem empresas cadastrados :(</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}
