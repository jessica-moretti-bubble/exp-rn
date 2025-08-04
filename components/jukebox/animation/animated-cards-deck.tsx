import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Card } from "model/jukebox.model";
import { CardsDeckActions } from "../modals/components/cards-deck-actions";
import { AnimatedCard } from "./components/animated-cards";



interface AnimatedCardsDeckProps {
  cards: Card[];
  setSellModalVisibility: (value: boolean) => void;
}

export const AnimatedCardsDeck = ({
  cards,
  setSellModalVisibility,
}: AnimatedCardsDeckProps) => {
  const [deck, setDeck] = useState(cards);
  const [cardsActionsVisibility, setCardsActionsVisibility] = useState(false);

  const handleFlipComplete = () => setCardsActionsVisibility(true);
  const handleRemoveCardAfterAction = () => {
    setDeck((prev) => prev.slice(1));
    setCardsActionsVisibility(false);
  };

  return (
    <View style={styles.container}>
      {deck.map((card, index) => (
        <AnimatedCard
          key={card.id}
          card={card}
          isTopCard={index === 0}
          positionIndex={index}
          onFlipComplete={handleFlipComplete}
        />
      ))}

      {cardsActionsVisibility && (
        <CardsDeckActions
          removeCard={handleRemoveCardAfterAction}
          setSellModalVisibility={setSellModalVisibility}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
    top: 120,
  },
});
