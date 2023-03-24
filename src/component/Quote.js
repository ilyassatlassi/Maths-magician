import React, { useEffect, useState } from "react";

function Quote() {
  const [initQuote, setQuote] = useState({});

  const API_KEY = "1d3V+eGyiKNzKIrm5ZX9Ig==uBvxDSWkiDzhs17K";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.api-ninjas.com/v1/quotes?category=money",
          {
            headers: { "X-Api-Key": API_KEY },
          });
          const json = await res.json();
          setQuote(json[0]);
      } catch (error){
        setQuote({ quote: `${error}` });
      }
    };
    fetchData();
  }, []);
  return !initQuote.quote ? (
    <div className="Quote">
      <div className="ring"></div>
      <span>loading...</span>
    </div>
  ) : initQuote.author ? (
    <div className="Quote-section">
      <p className="author">&quot;{initQuote.author}&quot;</p>
      <p className="Quote-phrase">{initQuote.quote}</p>
    </div>
  ) : (
    <div>
      <p className="Error">{initQuote.quote}</p>
    </div>
  );
}

export default Quote;
