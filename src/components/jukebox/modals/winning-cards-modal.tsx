import { BlurView } from "expo-blur";
import React, { useState } from "react";

import { Card, CardRarity } from "@/types/model/jukebox.model";
import { Modal, StyleSheet, View } from "react-native";
import { GenericModal } from "../../common/modal/generic-modal";
import {
    AnimatedCardsDeck,
} from "../animation/animated-cards-deck";
import { SellCardModalContent } from "./components/sell-cards-modal-content";

interface WinningCardsModalProperties {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}
export const WinningCardsModal = ({
  modalVisible,
  setModalVisible,
}: WinningCardsModalProperties) => {
  const [sellModalVisibility, setSellModalVisibility] = useState(false);
  const cards: Card[] = [
    { id: "card-1", rarity: CardRarity.PLATINUM },
    { id: "card-2", rarity: CardRarity.GOLD },
    { id: "card-3", rarity: CardRarity.PLATINUM },
  ];

  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <BlurView intensity={80} tint="dark" style={styles.blurContainer}>
        <View style={styles.modalContent}>
          <AnimatedCardsDeck
            cards={cards}
            setSellModalVisibility={setSellModalVisibility}
          />

           <GenericModal visible={sellModalVisibility} handleCloseButton={() => setSellModalVisibility(false)}>
            <SellCardModalContent/> 
           </GenericModal>
          
        </View>
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    padding: 24,
    borderRadius: 20,
    alignItems: "center",
    position: "relative", 
  },

});
