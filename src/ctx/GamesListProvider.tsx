import { createContext, useEffect, useState } from "react";

export type GameData = {
    title: string;
    thumb: string;
    normalPrice: string;
    salePrice: string;
    metacriticScore: string;
    metacriticLink: string;
    storeID: string;
  };

export const GamesListContext = createContext<GameData[]>([]);

export default function GamesListProvider(props: { children: React.ReactNode }) {}