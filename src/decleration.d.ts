// src/declarations.d.ts

declare module 'html2pdf.js' {
    export default function html2pdf(): {
      from: (element: HTMLElement) => {
        save: (filename?: string) => void;
      };
    };
  }
  
  declare module 'file-saver' {
    export function saveAs(blob: Blob, filename: string): void;
  }
  