import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      surface: string;
      border: string;
      textPrimary: string;
      textSecondary: string;
      textLight: string;
      success: string;
      warning: string;
      error: string;
    };
  }
}
