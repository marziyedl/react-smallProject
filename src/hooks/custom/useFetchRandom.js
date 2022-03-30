import { Adapter } from "utils/Adapter";
import { useState, useEffect } from "react";
import { APIKey, RANDOM_URL } from "utils/Constants";

const useFetchRandom = () => {
  const [gifData, setGifData] = useState({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getRandomGif();
  }, []);
  const getRandomGif = async () => {
    try {
      setloading(true);
      await Adapter.get(RANDOM_URL, {
        params: {
          api_key: APIKey,
        },
      }).then((response) => {
        setGifData(response.data.data);
      });
    } catch (err) {
    } finally {
      setloading(false);
    }
  };
  return { gifData, loading, getRandomGif };
  // return getRandomGif function for call in set interval
};

export default useFetchRandom;
