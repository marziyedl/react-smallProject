import { Adapter } from "utils/Adapter";
import { useState, useEffect } from "react";
import { APIKey, DEFAULT_PAGE_SIZE, SEARCH_URL } from "utils/Constants";

const useSearch = (offset = 0, keyword = null) => {
  const [items, setItems] = useState([]);
  const [loading, setloading] = useState(false);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    const fetchListData = async () => {
      if (keyword == null || (keyword.length < 2 && keyword !== "")) {
        return;
      }
      try {
        setloading(true);
        await Adapter.get(SEARCH_URL, {
          params: {
            api_key: APIKey,
            q: keyword,
            offset: offset,
            limit: DEFAULT_PAGE_SIZE,
          },
        }).then((response) => {
          setItems(response.data.data);
          setPagination(response.data.pagination);
        });
      } catch (err) {
      } finally {
        setloading(false);
      }
    };
    fetchListData();
  }, [offset, keyword]);

  return {items, loading, pagination};
};

export default useSearch;
