import React from "react";
import styles from "../../styles/Detail.module.css";
import Head from "next/head";

export default function Detail({ data }) {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{`${data.title}`}</title>
        <meta name="title" content={`NextJS||${data.title}`} />
        <meta name="description" content={`${data.body}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/share.png" />
        <meta property="og:title" content={`NextJS||${data.title}`} />
        <meta
          property="og:description"
          content={`${data.body}`}
        />
        <meta
          property="og:image"
          content="/share.png" 
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="/share.png"  />
        <meta property="twitter:title" content={`NextJS||${data.title}`} />
        <meta
          property="twitter:description"
          content={`${data.body}`}
        />
        <meta
          property="twitter:image"
          content="/share.png" 
        />

        {/* Meta Tags Generated with https://metatags.io */}
      </Head>
      <main className={styles.container}>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </main>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  let paths = data.map((ins) => ({ params: { id: ins.id.toString() } }));
  return {
    paths: paths,
    fallback: false,
  };
};
