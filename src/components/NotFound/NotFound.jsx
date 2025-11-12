import { Link } from "react-router-dom";
import "./NotFound.css";
import Button from "../Button/Button";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__content">
        <h2 className="not-found__heading">404</h2>
        <p className="not-found__message">Page not found</p>
        <p className="not-found__description">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link to="/" className="not-found__link">
          <Button buttonText="Go back home" isSecondary={true} />
        </Link>
      </div>
    </section>
  );
}
