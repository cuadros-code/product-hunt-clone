// import Head from 'next/head'

import { useEffect, useState } from "react";
import { Layout } from "../components/layout/Layout";
import { DetallesProducto } from "../components/ui/DetallesProducto";
import { obtenerProductoFirebase } from "../firebase/firebase-actions";

export default function Home() {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const obtenerProductos = async () => {
      const productos = await obtenerProductoFirebase()
      setProducts(productos)
    }
    obtenerProductos()

  }, [])

  return (
    <Layout>
      <div className="listado-productos">
        <div className="contenedor">
          <ul className="bg-white">
            {
              products?.map(producto => (
                <DetallesProducto
                  producto={producto}
                  key={producto.id}
                />
              ))
            }
          </ul>
        </div>
      </div>
    </Layout>
  )
}
