import SpinnerIcon from "@/assets/images/icons/spinner-outline-circle.svg";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import IconBook from "components/svg/icon-book";
import IconCards from "components/svg/icon-cards";
import IconShoppingCart from "components/svg/icon-shopping-cart";
import IconStar from "components/svg/icon-star";

import { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const routeLabelOverrides: Record<string, string> = {
  marketplace: "Mercato",
};

const capitalize = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

const NavigationItem = ({
  Icon,
  label,
  active,
  onPress,
}: {
  Icon: any;
  label: string;
  active: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.navigationItem}>
      <Icon width={24} height={24} fill={active ? "#BAF7CD" : "#808080"} />
      <Text style={[styles.text, { color: active ? "#BAF7CD" : "#808080" }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const getIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case "quiz":
      return IconBook;
    case "major":
      return IconStar;
    case "roster":
      return IconCards;
    case "mercato":
      return IconShoppingCart;
    default:
      return IconBook;
  }
};

export const BottomBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
        isInteraction: false,
      }),
      { resetBeforeIteration: false }
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const routes = state.routes;
  const visibleRoutes = routes.filter((route) => {
    const label = (descriptors[route.key].options.tabBarLabel ?? route.name)
      .toString()
      .toLowerCase();
    return label !== "jukebox";
  });

  const midIndex = Math.ceil(visibleRoutes.length / 2);
  const leftRoutes = visibleRoutes.slice(0, midIndex);
  const rightRoutes = visibleRoutes.slice(midIndex);

  return (
    <View style={styles.container}>
      <View style={styles.navigationSection}>
        {leftRoutes.map((route) => {
          const isFocused = state.routes[state.index].key === route.key;
          const options = descriptors[route.key].options;
          const rawLabel = (options.tabBarLabel ?? route.name).toString();
          const normalizedLabel =
            routeLabelOverrides[rawLabel.toLowerCase()] ?? capitalize(rawLabel);
          const Icon = getIcon(normalizedLabel.toLowerCase());

          return (
            <NavigationItem
              key={normalizedLabel}
              Icon={Icon}
              label={normalizedLabel}
              active={isFocused}
              onPress={() => navigation.navigate(route.name)}
            />
          );
        })}
      </View>

      <View style={styles.jukeboxWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate("jukebox")}
          style={styles.jukeboxTouchable}
          activeOpacity={0.8}
        >
          <Animated.View
            style={[styles.spinnerContainer, { transform: [{ rotate: spin }] }]}
          >
            <SpinnerIcon width={48} height={48} />
          </Animated.View>
        </TouchableOpacity>
      </View>

      <View style={styles.navigationSection}>
        {rightRoutes.map((route) => {
          const isFocused = state.routes[state.index].key === route.key;
          const options = descriptors[route.key].options;
          const rawLabel = (options.tabBarLabel ?? route.name).toString();
          const normalizedLabel =
            routeLabelOverrides[rawLabel.toLowerCase()] ?? capitalize(rawLabel);
          const Icon = getIcon(normalizedLabel.toLowerCase());

          return (
            <NavigationItem
              key={normalizedLabel}
              Icon={Icon}
              label={normalizedLabel}
              active={isFocused}
              onPress={() => navigation.navigate(route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    width: 360,
    height: 64,
    backgroundColor: "#171717",
    borderRadius: 12,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 9999,
    elevation: 10,
    paddingHorizontal: 15,
    shadowColor: "#86F2A8",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16,
    borderColor: "#86F2A8",
    borderWidth: 2,
  },
  navigationSection: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 23,
  },
  jukeboxTouchable: {
    top: -2,
    position: "absolute",
    alignSelf: "center",
    zIndex: 1000,
  },

  navigationItem: {
    alignItems: "center",
    marginHorizontal: 8,
  },
  text: {
    color: "#808080",
    fontSize: 12,
  },
  jukeboxWrapper: {
    position: "absolute",
    top: -25,
    left: -20,
    right: 0,
    alignItems: "center",
    zIndex: 1000,
  },
  spinnerContainer: {
    width: 58,
    height: 58,
    borderRadius: 9999,
    backgroundColor: "#F4CEF0",
    justifyContent: "center",
    alignItems: "center",
  },
});
