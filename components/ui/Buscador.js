import React from 'react'

export const Buscador = () => {
    return (
        <>
            <form action="">
                <input type="text" placeholder="Buscar Productos" />
                <button>Buscar</button>
            </form>

            <style jsx>{`
                form{
                    position: relative;
                }
            input{
                border: 1px solid var(--gris3);
                padding:0.8rem;
                min-width : 300px;
            }

            button{
                height: 2.4rem;
                width: 2.4rem;
                display: block;
                background-size: 2.9rem;
                background-image: url('static/img/buscar.png');
                background-repeat: no-repeat;
                position: absolute;
                right: 0.8rem;
                top: 2px;
                background-color: white;
                border:none;
                text-indent: -9999px;
            }

             button:hover{
                cursor: pointer;
            }

        `}
            </style>
        </>
    )
}
