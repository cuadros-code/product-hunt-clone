// import Head from 'next/head'

import { Layout } from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div >
        <h1>Inicio</h1>
        <style jsx>{`
        h1{
          color: red;
        }
        `}
        </style>
      </div>
    </Layout>
  )
}
