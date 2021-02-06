import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [error, setError] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  // debounce action
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      try {
        const { data } = await axios.post(
          'https://translation.googleapis.com/language/translate/v2',
          {},
          {
            params: {
              q: debouncedText,
              target: language.value,
              key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
            },
          }
        );

        setTranslated(data.data.translations[0].translatedText);
      } catch (error) {
        setError(error.message);
      }
    };

    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <p>{error ? error : translated}</p>
    </div>
  );
};

export default Convert;
