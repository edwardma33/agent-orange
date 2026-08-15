import { StyleSheet } from "react-native";

/**
 * Agent Orange Light for Expo and React Native.
 *
 * Copy this module into an Expo app, then import `colors`, `semanticColors`,
 * or the reusable `styles` object from your screens and components.
 */
export const colors = {
  background: "#f8f7f5",
  surface: "#ffffff",
  selection: "#f1e8df",
  line: "#e6e1db",
  border: "#e6e1db",
  muted: "#716b64",
  dim: "#a59e96",
  foreground: "#25221f",
  bright: "#111111",
  focus: "#ff6b00",
  focusText: "#a94200",
  info: "#3b6399",
  member: "#7953a3",
  type: "#197b75",
};

export const semanticColors = {
  success: {
    foreground: "#197a55",
    muted: "#e1f1e9",
    bright: "#126442",
  },
  warning: {
    foreground: "#9a6500",
    muted: "#f9eed8",
    bright: "#7a5100",
  },
  danger: {
    foreground: "#b94d60",
    muted: "#f8e5e8",
    bright: "#9f374a",
  },
  info: {
    foreground: "#3b6399",
    muted: "#e6eef8",
    bright: "#2c4f80",
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
    backgroundColor: colors.focusText,
    borderRadius: 12,
    justifyContent: "center",
    minHeight: 44,
    paddingHorizontal: 16,
  },
  focusButtonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: "700",
  },
});
