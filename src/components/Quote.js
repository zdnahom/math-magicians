import { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=learning',
          {
            headers: {
              'X-Api-Key': 'G0vLSbdKOcOzDZKrzJaE8Q==3xEs9RAaVql19Lv5',
            },
          },
        );
        const data = await res.json();
        setQuote(data);
      } catch (error) {
        setHasError(error);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, []);
  return (
    <section className="quote">
      {hasError && <p className="error-message">Something went wrong!</p>}
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <p className="quote-text">
          {quote[0]?.quote}
          {' '}
          -
          <span className="author">
            {' '}
            {quote[0]?.author}
          </span>
        </p>
      )}
    </section>
  );
};
export default Quote;
