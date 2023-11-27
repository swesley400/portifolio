import Head from 'next/head'
 
function IndexPage() {
  return (
    <div>
        <Head>
        <title>Portfólio dos Wes</title>
        <meta name="description" content="Descrição do seu portfólio aqui" />
        
        <meta property="og:title" content="Portfólio dos Wes" key="og:title" />
        <meta property="og:description" content="Descrição do seu portfólio aqui" />
        <meta property="og:image" content="URL da imagem do seu portfólio" />
        <meta property="og:url" content="URL completa da sua página" />
        <meta property="og:type" content="website" />
      </Head>
    </div>
  )
}
 
export default IndexPage