import { StyleSheet } from "react-native";

/**
 * Agent Orange for Expo and React Native.
 *
 * Copy this module into an Expo app, then import `colors`, `semanticColors`,
 * or the reusable `styles` object from your screens and components.
 */
export const colors = {
  background: "#111111",
  surface: "#161616",
  selection: "#242424",
  line: "#1a1a1a",
  border: "#2a2a2a",
  muted: "#737373",
  dim: "#4a4a4a",
  foreground: "#e8e8e8",
  bright: "#f5f5f5",
  focus: "#ff6b00",
  info: "#779ecb",
  member: "#c5a1e8",
  type: "#80d1ca",
};

export const semanticColors = {
  success: {
    foreground: "#44c995",
    muted: "#10251e",
    bright: "#5de0ad",
  },
  warning: {
    foreground: "#e7b34a",
    muted: "#2b2413",
    bright: "#f2c45c",
  },
  danger: {
    foreground: "#d46a78",
    muted: "#2a151a",
    bright: "#ec8390",
  },
  info: {
    foreground: "#779ecb",
    muted: "#142132",
    bright: "#91b7e3",
  },
};

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    gap: 16,
    padding: 20,
  },
  surface: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 16,
  },
  title: {
    color: colors.bright,
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: -0.3,
  },
  body: {
    color: colors.foreground,
    fontSize: 16,
    lineHeight: 24,
  },
  mutedText: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20,
  },
  focusButton: {
    alignItems: "center",
    backgroundColor: colors.focus,
    borderRadius: 12,
    justifyContent: "center",
    minHeight: 44,
    paddingHorizontal: 16,
  },
  focusButtonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: "700",
  },
});
