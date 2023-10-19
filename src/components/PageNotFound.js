import "./../styles/404.css";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <>
      <main style={{ background: "#313942" }}>
        <h1>404</h1>
        <h2>Error: 404 page not found</h2>
        <p>Sorry, the page you're looking for cannot be accessed</p>
        <div>
          <p>Go Back by clicking in </p>
          <button
            className="b404"
            onClick={() => {
              navigate(-1);
            }}
          >
            here
          </button>
        </div>
      </main>
    </>
  );
}
