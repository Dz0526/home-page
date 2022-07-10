import type { AppProps } from 'next/app';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from 'theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <Component {...pageProps} />;
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
