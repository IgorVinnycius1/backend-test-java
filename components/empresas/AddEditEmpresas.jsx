import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from 'components';
import { empresaService, alertService } from 'services';

export { AddEditEmpresas };

function AddEditEmpresas(props) {
    const user = props?.user;
    const isAddMode = !user;
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    
    // form validation rules 
    const validationSchema = Yup.object().shape({
        nome: Yup.string()
            .required('O campo nome é obrigatório'),
        cnpj: Yup.string()
            .required('O campo cnpj é obrigatório'),
        endereco: Yup.string()
            .required('O campo endereco é obrigatório'),
        telefone: Yup.string()
            .required('O campo telefone é obrigatório'),
        qtdvgcarro: Yup.string()
            .required('O campo quantidade é obrigatório'),
        qtdvgmoto: Yup.string()
            .required('O campo quantidade é obrigatório'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // set default form values if in edit mode

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        return isAddMode
            ? createUser(data)
            : updateUser(user.id, data);
    }

    function createUser(data) {
        return empresaService.create(data)
            .then(() => {
                alertService.success('Empresa Adicionado :)', { keepAfterRouteChange: true });
                router.push('.');
            })
            .catch(alertService.error);
    }

    function updateUser(id, data) {
        return empresaService.update(id, data)
            .then(() => {
                alertService.success('Informações Atualizadas ;)', { keepAfterRouteChange: true });
                router.push('..');
            })
            .catch(alertService.error);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>{isAddMode ? 'Adicionar Empresa' : 'Editar Empresa'}</h1>
            <div className="form-row">
                <div className="form-group col-3">
                    <label>Nome</label>
                    <input name="nome" type="text" {...register('nome')} className={`form-control ${errors.nome ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.nome?.message}</div>
                </div>

                <div className="form-group col-3">
                    <label>CNPJ</label>
                    <input name="cnpj" type="text" {...register('cnpj')} className={`form-control ${errors.cnpj ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.cnpj?.message}</div>
                </div>
               
                <div className="form-group col-5">
                    <label>Endereço</label>
                    <input name="endereco" type="text" {...register('endereco')} className={`form-control ${errors.endereco ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.endereco?.message}</div>
                </div>
                </div>
                <div className="form-row">
                <div className="form-group col-3">
                    <label>Telefone</label>
                    <input name="telefone" type="text" {...register('telefone')} className={`form-control ${errors.telefone ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.telefone?.message}</div>
                </div>

                <div className="form-group col-3">
                    <label>Quantidade de vagas p/ carro</label>
                    <input name="qtdvgcarro" type="text" {...register('qtdvgcarro')} className={`form-control ${errors.qtdvgcarro ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.qtdvgcarro?.message}</div>
                </div>

                <div className="form-group col-3">
                    <label>Quantidade de vagas p/ moto</label>
                    <input name="qtdvgmoto" type="text" {...register('qtdvgmoto')} className={`form-control ${errors.qtdvgmoto ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.qtdvgmoto?.message}</div>
                </div>
                
             </div>
            <div className="form-group">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary mr-2">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Salvar
                </button>
                <button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={formState.isSubmitting} className="btn btn-secondary">Resetar</button>
                <Link href="/empresas" className="btn btn-link">Cancelar</Link>
            </div>
        </form>
    );
}