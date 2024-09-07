import './NotFoundPage.scss';

export const NotFoundPage = () => {
  return (
    <div className="notFoundPage">
      <h2>Page not found</h2>
      <img
        src="./img/page-not-found.png"
        alt="page not found"
        className="notFoundPage__image"
      />
    </div>
  );
};
