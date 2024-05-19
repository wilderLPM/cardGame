import {createContext, useContext} from 'react';
import deck from "../data/deck.json";

const DeckContext = createContext();

export function DeckProvider({ children }) {
  return <DeckContext.Provider value={deck}>{children}</DeckContext.Provider>;
}

export const useDeckContext = () => useContext(DeckContext);
  