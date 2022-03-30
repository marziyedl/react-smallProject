import { renderHook, act } from "@testing-library/react-hooks";
import { Adapter } from "utils/Adapter";
import { APIKey, DEFAULT_PAGE_SIZE, SEARCH_URL } from "utils/Constants";
import useSearch from "./useSearch";
jest.mock("utils/Adapter");

test("Should Api with data", () => {
  const { items } = renderHook(() => useSearch(0, "people"));

  expect(Adapter.get).toHaveBeenCalledWith(SEARCH_URL, {
    params: {
      api_key: APIKey,
      q: "people",
      offset: 0,
      limit: DEFAULT_PAGE_SIZE,
    },
  });
});

test("data is fetched", async () => {
  const fakeSWData = { items: [], loading: false, pagination: null };
  Adapter.get.mockResolvedValue(fakeSWData);
  const { result, waitForNextUpdate } = renderHook(() =>
    useSearch(0, "people"),
  );
  await waitForNextUpdate();
  expect(Adapter.get).toBeCalledWith(SEARCH_URL, {
    params: {
      api_key: APIKey,
      q: "people",
      offset: 0,
      limit: DEFAULT_PAGE_SIZE,
    },
  });
  expect(result.current).toStrictEqual(fakeSWData);
});
