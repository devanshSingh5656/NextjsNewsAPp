import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Feed.module.css";
function Feed({ pageNumber, articles }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {articles.map((res, index) => (
          <div className={styles.post} key={index}>
            <h1 onclick={() => (window.location.href = res.url)}>
              {res.title}
            </h1>
            <p>{res.description}</p>
            {!!res.urlToImage && <img src={res.urlToImage} />}
          </div>
        ))}
      </div>
      <div className={styles.paginator}>
        <div
          onClick={() => {
            if (pageNumber > 1) {
              router
                .push(`/feed/${pageNumber - 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={pageNumber === 1 ? styles.disabled : styles.active}
        >
          prev
        </div>
        <div>#{pageNumber}</div>
        <div
          onClick={() => {
            if (pageNumber < 5) {
              router
                .push(`/feed/${pageNumber + 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={pageNumber === 5 ? styles.disabled : styles.active}
        >
          next
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async (context) => {
  const pageNumber = context.query.id;
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }
  const res = await fetch(`
  https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}&apiKey=e39904db24ab4c58aaf3888a2ae3cada
  `);
  const apijson = await res.json();
  return {
    props: {
      articles: apijson.articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
