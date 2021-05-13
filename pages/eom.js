import styles from "../styles/eom.module.css";
export default function Eom({ data }) {
  console.log(data);

  return (
    <div className="page-container">
      <div className={styles.container}>
        <h1>Employee of the month</h1>
        <img src="" />
        <h1>name:{data.name}</h1>
        <p>email:{data.email}</p>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
