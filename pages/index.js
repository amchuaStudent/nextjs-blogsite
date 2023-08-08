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
        <p>Hello there, I am Angelo Miguel the owner of this blog, and currently
          a computer engineering student. My hobbies are playing card games like
          Legends of runterra and yugioh with a fascination around lore and art 
          of the cards themselves. Of course when it comes to how to play one I 
          prefer a longer games with more back and fort.
          </p> 

        <p>In terms of music I don't necessarily have a favorite I usually find
          something when going through youtube and eventually like it. In terms
          of favorite it would have to be Will wood's song titled "kitchen floor".
        </p>

        <p>My favorite food would have to be buttered shrimp because it could be
          paired up with a lot of things. Most of my favorites would have to be 
          seafood related may it be lobster, crab or shrimp.
        </p>

        <p>2. Why did I take up Computer Engineering ?</p>

        <p>I took up Computer Engineering because I wanted to make videogames 
          someday. Of course many other professions would make that dream a reality
          but I also wanter more flexibility in what I can do with computers, in a 
          sense I wanted to be overly prepared for this.
        </p>

        <p>3. What career do I see myself in after graduation ?</p>

        <p>I see myself being part of a game development team working in rig modeling
          or animation and logic functions. I would prefer to have a job where I get 
          to see and interact with what I am making and due to the nature of game 
          development this task is a combination of front and back end programming.
        </p>
        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}