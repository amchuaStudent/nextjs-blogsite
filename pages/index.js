import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>1. Introduction:</p>
        <p>
         Manifesto for Agile Software Development
        </p>
    
        <p>
          We are uncovering better ways of developing 
          by doing it and helping others do it.
          Through this work we have come to value:
        </p>
        <p>
          <span style= "font-size: 120% "> Indivuals and interactions </span> over processes and tools
          Working software over complrehensive documentation
          Customer collaboration over contract negotiantion
          Responding to change over following a plan
        </p>
        <p>
          That is, while there is value in the items on
          the right, we value the items on the left more.

        </p>
      
        

        
        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
