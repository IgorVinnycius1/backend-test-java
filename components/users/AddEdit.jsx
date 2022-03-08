import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from 'components';
import { userService, alertService } from 'services';

export { AddEdit };

function AddEdit(props) {
    const user = props?.user;
    const isAddMode = !user;
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    
    // form validation rules 
    const validationSchema = Yup.object().shape({
        tipo: Yup.string()
            .required('O campo tipo é obrigatório'),
        placa: Yup.string()
            .required('O campo placa é obrigatório'),
        marca: Yup.string()
            .required('O campo marca é obrigatório'),
        modelo: Yup.string()
            .required('O campo modelo é obrigatório'),
        cor: Yup.string()
            .required('O campo cor é obrigatório'),
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
        return userService.create(data)
            .then(() => {
                alertService.success('Veículo Adicionado :)', { keepAfterRouteChange: true });
                router.push('.');
            })
            .catch(alertService.error);
    }

    function updateUser(id, data) {
        return userService.update(id, data)
            .then(() => {
                alertService.success('Informações Atualizadas ;)', { keepAfterRouteChange: true });
                router.push('..');
            })
            .catch(alertService.error);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>{isAddMode ? 'Adicionar Veículo' : 'Editar Veículo'}</h1>
            <div className="form-row">
                <div className="form-group col-3">
                    <label>Tipo</label>
                    <select name="tipo" {...register('tipo')} className={`form-control ${errors.tipo ? 'is-invalid' : ''}`}>
                        <option disabled value="">Escolha</option>
                        <option value="Carro">Carro</option>
                        <option value="Moto">Moto</option>
                    </select>
                    <div className="invalid-feedback">{errors.tipo?.message}</div>
                </div>

                <div className="form-group col-3">
                    <label>Placa</label>
                    <input name="placa" type="text" {...register('placa')} className={`form-control ${errors.placa ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.placa?.message}</div>
                </div>
               
                <div className="form-group col-5">
                    <label>Marca</label>
                    <input name="marca" type="text" {...register('marca')} className={`form-control ${errors.marca ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.marca?.message}</div>
                </div>
                </div>
                <div className="form-row">
                <div className="form-group col-5">
                    <label>Modelo</label>
                    <input name="modelo" type="text" {...register('modelo')} className={`form-control ${errors.modelo ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.modelo?.message}</div>
                </div>

                <div className="form-group col-5">
                    <label>Cor</label>
                    <input name="cor" type="text" {...register('cor')} className={`form-control ${errors.cor ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.cor?.message}</div>
                </div>
                
             </div>
            <div className="form-group">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary mr-2">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Salvar
                </button>
                <button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={formState.isSubmitting} className="btn btn-secondary">Resetar</button>
                <Link href="/users" className="btn btn-link">Cancelar</Link>
            </div>
        </form>
    );
}