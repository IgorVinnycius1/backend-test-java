import { AddEditEmpresas } from 'components/empresas';
import { empresaService } from 'services';

export default AddEditEmpresas;

export async function getServerSideProps({ params }) {
    const user = await empresaService.getById(params.id);

    return {
        props: { user }
    }
}