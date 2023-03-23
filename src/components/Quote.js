import { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=learning',
          {
            method: 'GET',
            headers: {
              'X-Api-Key': 'G0vLSbdKOcOzDZKrzJaE8Q==3xEs9RAaVql19Lv5',
            },
            contentType: 'application/json',
          },
        );
        const data = await res.json();
        setQuote(data[0]);
      } catch (error) {
        setHasError(error.name);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setQuote]);
  if (hasError) return <div>Something went wrong!</div>;
  return (
    <section className="quote">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p className="quote-text">
          {quote.quote}
          {' '}
          -
          <span className="author">
            {' '}
            {quote.author}
          </span>
        </p>
      )}
    </section>
  );
};
export default Quote;
