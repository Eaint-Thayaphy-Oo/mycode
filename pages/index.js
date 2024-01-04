import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Card from "@/components/card";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  // console.log(posts);
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>NextJS</title>
        <meta name="title" content="NextJS || Home" />
        <meta name="description" content="Hello,this is meta tags tesing" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/share.png" />
        <meta property="og:title" content="NextJS || Home" />
        <meta
          property="og:description"
          content="Hello,this is meta tags tesing"
        />
        <meta property="og:image" content="/share.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="/share.png" />
        <meta property="twitter:title" content="NextJS || Home" />
        <meta
          property="twitter:description"
          content="Hello,this is meta tags tesing"
        />
        <meta property="twitter:image" content="/share.png" />

        {/* Meta Tags Generated with https://metatags.io */}
      </Head>
      <section className={styles.Home}>
        <h1 className={styles.header}>Popular Articles</h1>
        <div className={styles.cards}>
          {posts.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();
  // console.log(data);

  return {
    props: {
      posts: data,
    },
  };
};
