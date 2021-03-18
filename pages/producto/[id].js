import { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Loader from 'react-loader-spinner';

import { Layout } from "../../components/layout/Layout";
import { obtenerProductoById } from "../../firebase/firebase-actions";

import { formarDate } from "../../helpers/formatDate";
import { contextFirebase } from "../../firebase/contextFirebase";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Producto() {

    const [producto, setProducto] = useState([])

    const { userAuth } = useContext(contextFirebase)

    const router = useRouter()
    const { query } = router


    useEffect(async () => {
        if (query.id) {
            const data = await obtenerProductoById(query.id)
            if (data) {

                return setProducto(data)
            }
            router.push('/404')
        }
    }, [query.id])

    console.log(producto);
    const fechaFormateada = formarDate(producto.creado)


    return (
        <>
            <Layout>
                {producto.length === 0 &&
                    <div className="loader">
                        <Loader type="Rings" color="#00BFFF" height={80} width={80} />
                    </div>
                }

                <div className="contenedor">
                    <h1>{producto.nombre}</h1>

                    <div className="contenedor-prod">
                        <div>
                            <p>Publicado el: {fechaFormateada}</p>
                            <p>Publicado por: {producto?.creador?.nombre} de {producto?.empresa}</p>


                            <img src={producto.urlImagen} alt="" />
                            <p>{producto.descripcion}</p>

                            <div className="formulario">
                                {
                                    userAuth

                                    &&
                                    <>
                                        <label htmlFor="comentario">Agrega tu comentario</label>
                                        <form>
                                            <input
                                                type="text"
                                                id="comentario"
                                                name="comentario"
                                            />
                                            <button
                                                className="boton bg-color"
                                                type="submit"
                                            >
                                                Agregar
                                            </button>
                                        </form>
                                    </>
                                }
                                <h2>Comentarios</h2>
                                {
                                    producto.comentarios &&
                                    producto?.comentarios.map(comentario => (
                                        <li>
                                            <p>{comentario.nombre}</p>
                                            <p>EScrito por: {comentario.nombreUsuario}</p>
                                        </li>
                                    ))
                                }


                            </div>


                        </div>
                        <aside className="aside">
                            <a
                                className="boton bg-color url"
                                target="_blank"
                                href={producto.url}
                            >
                                Visitar URL
                            </a>


                            <p className="votos">{producto.votos} Votos</p>
                            {
                                userAuth
                                &&
                                <button
                                    className="boton"
                                >
                                    Votar
                                </button>
                            }
                        </aside>
                    </div>
                </div>
            </Layout>

            <style jsx>{`

                .votos{
                    text-align: center;
                }
                .url{
                    margin-bottom: 3rem;
                }
                .aside{
                    padding: 0 1.3rem 0 1.3rem;
                }
                .boton{
                    display: block;
                    width: 100%;
                    text-align: center;
                }
                label{
                    font-size:1.5rem;
                    margin-bottom: 1rem;
                }

                input{
                    height: 35px;
                    margin-bottom: 1rem;
                    width: 100%;

                }
                button{
                    width: 100%;
                    font-size:1rem;
                }

                .formulario{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
                .loader{
                    text-align: center;
                    margin-top: 4rem;
                }
                h1{
                    text-align: center;
                }
                h2{
                    margin-top: 2rem;
                }

                @media (min-width: 768px){
                    .contenedor-prod{
                        display: grid;
                        grid-template-columns: 2fr 1fr;
                        column-gap: 1.5rem;
                    }
                }
                `}
            </style>
        </>

    )
}