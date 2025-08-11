import { useEffect, useState, useContext } from "react";
import { Menu_API } from "../utils/constants";
import MockContext from "../utils/MockContext";
import mockResMenu from "../components/mocks/mockResMenu.json";

/**
 * Normalize: always return the INNER object that has `.cards`
 * Works for both API (json.data) and mock ({ data: {...} } or already {...})
 */
const useRestaurantMenu = (resId, forceMock) => {
  const [resInfo, setResInfo] = useState(null);
  const ctx = useContext(MockContext);
  const ctxMock = ctx?.useMock ?? false;
  const useMock = forceMock ?? ctxMock;

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();

    // if resId is missing (shouldn’t happen often), bail early
    if (!resId) {
      setResInfo(null);
      return () => controller.abort();
    }

    // show Shimmer while switching restaurants (prevents stale menu flash)
    setResInfo(null);

    async function fetchData() {
      // ---- MOCK PATH ----
      if (useMock) {
        console.warn("⚠️ Using mockResMenu.json (mock enabled)");
        const normalized = mockResMenu?.data ?? mockResMenu;
        if (!ignore) setResInfo(normalized);
        return;
      }

      // ---- API PATH ----
      try {
        const resp = await fetch(Menu_API + resId, { signal: controller.signal });
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const json = await resp.json();

        if (!ignore) {
          const payload = json?.data ?? json; // normalize API too
          if (payload?.cards) {
            setResInfo(payload);
          } else {
            console.warn("⚠️ Menu API empty — falling back to mock once");
            const normalized = mockResMenu?.data ?? mockResMenu;
            setResInfo(normalized);
          }
        }
      } catch (err) {
        if (!ignore) {
          console.warn("⚠️ Menu API failed — falling back to mock once:", err?.message || err);
          const normalized = mockResMenu?.data ?? mockResMenu;
          setResInfo(normalized);
        }
      }
    }

    fetchData();
    return () => {
      ignore = true;
      controller.abort();
    };
  }, [resId, useMock]);

  return resInfo; // always an object with .cards (or null while loading)
};

export default useRestaurantMenu;
