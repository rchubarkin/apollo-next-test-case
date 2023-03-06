import { Launch } from "@/gql";
import { makeVar, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";

const FAVORITES_KEY = "_spacex_favorites";

export const favoritesVar = makeVar<Launch[]>([]);

let _favoritesInitialized = false;

export function useFavorites() {
  /**
   * prevent hydration errors
   */
  useEffect(() => {
    if (_favoritesInitialized) return;

    favoritesVar(loadFavorites());

    _favoritesInitialized = true;
  }, []);
  return useReactiveVar(favoritesVar);
}

export function toggleFavorite(launch: Launch) {
  const favorites = favoritesVar().slice();
  const idx = favorites.findIndex((l) => l.id === launch.id);

  if (idx === -1) {
    favorites.push(launch);
  } else {
    favorites.splice(idx, 1);
  }

  favoritesVar(favorites);
  persistFavorites(favorites);
}

function loadFavorites(): Launch[] {
  if (typeof window === "undefined") {
    return [];
  }

  return JSON.parse(window.localStorage.getItem(FAVORITES_KEY) || "[]");
}

function persistFavorites(favorites: Launch[]) {
  window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}
