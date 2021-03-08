import React, { useState } from 'react'
import { Layout } from '../../components/layout/Layout'
import { useForm } from '../../hooks/useForm'
import { validationNewProduct } from '../../validation/validationNewProduct'

const initialState = {
    nombre: '',
    empresa: '',
    url: '',
    imagen: '',
    descripcion: '',
}

export default function NuevoProducto() {

    const [errorState, setError] = useState(null)

    const addProduct = () => {

    }

    const {
        valueForm,
        error,
        handleSubmit,
        handleChange } = useForm(initialState, validationNewProduct, addProduct)

    const { nombre, empresa, url, imagen, descripcion } = valueForm

    return (
        <Layout>
            <div >
                <h1>Agregar Producto</h1>
                <form
                    className="formulario"
                    onSubmit={handleSubmit}
                    autoComplete="off"
                >
                    <fieldset>
                        <legend>Información general</legend>

                        <div
                            className="campo-formulario"
                        >
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                name="nombre"
                                id="nombre"
                                placeholder="Nombre del producto"
                                onChange={handleChange}
                                value={nombre}
                            />
                        </div>
                        {error.nombre && <p className="alerta-error" >{error.nombre}</p>}

                        <div
                            className="campo-formulario"
                        >
                            <label htmlFor="empresa">Empresa</label>
                            <input
                                type="text"
                                name="empresa"
                                id="empresa"
                                placeholder="Empresa del producto"
                                onChange={handleChange}
                                value={empresa}
                            />
                        </div>
                        {error.empresa && <p className="alerta-error" >{error.empresa}</p>}

                        <div
                            className="campo-formulario"
                        >
                            <label htmlFor="imagen">Imagen</label>
                            <input
                                type="file"
                                name="imagen"
                                id="imagen"
                                onChange={handleChange}
                                value={imagen}
                            />
                        </div>
                        {error.imagen && <p className="alerta-error" >{error.imagen}</p>}

                        <div
                            className="campo-formulario"
                        >
                            <label htmlFor="url">Url del producto</label>
                            <input
                                type="url"
                                name="url"
                                id="url"
                                placeholder="Url del producto"
                                onChange={handleChange}
                                value={url}
                            />
                        </div>
                        {error.url && <p className="alerta-error" >{error.url}</p>}

                    </fieldset>

                    <fieldset>
                        <legend>Sobre tu producto</legend>

                        <div
                            className="campo-formulario"
                        >
                            <label htmlFor="descripcion">Descripción</label>
                            <textarea
                                name="descripcion"
                                id="descripcion"
                                placeholder="Descripcion del producto"
                                onChange={handleChange}
                                value={descripcion}
                            />
                        </div>
                        {error.descripcion && <p className="alerta-error" >{error.descripcion}</p>}

                    </fieldset>


                    {errorState && <p className="alerta-error" >{errorState}</p>}

                    <button
                        type="submit"
                        className="btn-registro mb-5"
                    >
                        Agregar Producto
                    </button>
                </form>
            </div>
            <style jsx>{`
                h1{
                    text-align: center;
                    margin-top: 3rem;
                }
                .alerta-error{
                    background-color: #FD6A72;
                    text-align: center;
                    color: white;
                    height: 30px;
                    line-height: 30px;
                    border-radius: 15px;
                    margin: 1.5rem 0 1.5rem 0;
                }
                
                textarea{
                    width: 100%;
                    height: 90px;
                    resize: none;
                }

                .mb-5{
                    margin-bottom: 3rem;
                    margin-top: 2rem;
                }
                `}
            </style>
        </Layout>
    )
}