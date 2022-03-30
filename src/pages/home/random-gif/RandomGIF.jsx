import ImageCard from "components/image-card/ImageCard";
import useFetchRandom from "hooks/custom/useFetchRandom";
import React, { useEffect } from "react";

function RandomGIF() {
  const { gifData, loading, getRandomGif } = useFetchRandom();
  useEffect(() => {
    // call API every 10s :
    const interval = setInterval(() => {
      getRandomGif();
    }, 10000);
    return () => clearInterval(interval);
  }, [getRandomGif]);

  return (
    <ImageCard
      data={{
        url: gifData.images?.downsized.url,
        title: gifData.title,
        rating: gifData.rating,
      }}
      loading={loading}
    />
  );
}

export default RandomGIF;
