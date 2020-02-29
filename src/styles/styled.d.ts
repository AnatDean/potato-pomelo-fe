import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      highlighted: string;
      shadowed: string;
      primary:string;
      secondary:string;
      primary_light:string;
      secondary_light:string;
      neutral:string
    };

    opacity: {
      highlighted: string;
      shadowed: string;
    };
  }
}
