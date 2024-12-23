'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '@/styles';
import StyledComponentsRegistry from '@/lib/registry';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}