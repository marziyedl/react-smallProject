import ImageCard from "components/image-card/ImageCard";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import backIcon from "assets/images/back.svg";

function Detail() {
  const [search] = useSearchParams();
  const navigate = useNavigate();

  // get required data from url:
  const data = {
    url: [search.get("url")],
    title: [search.get("title")],
    rating: [search.get("rating")],
  };

  return (
    <section>
      <nav onClick={() => navigate(-1, { replace: true })}>
        <img src={backIcon} width="20" alt="back" />
      </nav>
      <ImageCard data={data} loading={false} />
    </section>
  );
}

export default Detail;
