import { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({});
  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=failure', {
        headers: {
          'X-Api-Key': 'G0vLSbdKOcOzDZKrzJaE8Q==3xEs9RAaVql19Lv5',
        },
      });
      const data = await res.json();
      setQuote(data[0]);
    };
    fetchQuote();
  }, []);

  return (
    <section className="quote">
      <p className="quote-text">
        {quote.quote}
        {' '}
        -
        <span className="author">
          {' '}
          {quote.author}
        </span>
      </p>
    </section>
  );
};
export default Quote;
