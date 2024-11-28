import "./NotFoundPage.scss";
import errorImage from "../../assets/images/not-found.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="error-container">
      <img
        className="error-container__img"
        src={errorImage}
        alt="404 error image"
      />
      <div className="error-container__button">
        <Link to="/">
          <Button>Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
