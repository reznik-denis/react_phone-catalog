import './ErrorPage.scss';

export const ErrorPage = () => {
  return (
    <div className="errorPage">
      <h2>Something went wrong</h2>
      <img
        src="./img/product-not-found.png"
        alt="error page"
        className="errorPage__image"
      />
    </div>
  );
};
