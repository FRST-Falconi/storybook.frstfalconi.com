export const colors = {
  dark: {
    background: '#1E1E1E',
    surface: '#2A2A2A',
    surfaceHover: '#333333',
    text: '#FFFFFF',
    textSecondary: '#999999',
    textMuted: '#666666',
    accent: '#FF6B2C',
    accentHover: '#E55B1C',
    border: '#333333',
  },
  light: {
    background: '#FFFFFF',
    surface: '#F5F5F5',
    surfaceHover: '#EEEEEE',
    text: '#333333',
    textSecondary: '#666666',
    textMuted: '#999999',
    accent: '#FF6B2C',
    accentHover: '#E55B1C',
    border: '#EEEEEE',
  }
};

export type ThemeType = typeof colors.dark;

export const getThemeColors = (isDark: boolean) => isDark ? colors.dark : colors.light; 