export const Button = ({ array, nextPage }) => {
  if (array.length !== 0) {
    const handleClick = () => {
      nextPage();
    };
    return ( 
      <button type="button" onClick={handleClick}>
        Load more
      </button>
    );
  } else {
    return null;
  }
};