'use client';
import { useState } from 'react';

export default function PdfGenerator() {
  const [loading, setLoading] = useState(false);

  const generatePDF = async () => {
    setLoading(true);

    const htmlContent = `<h1>Meu PDF</h1><p>Conteúdo gerado com Puppeteer no Next.js App Router.</p>`;

    const response = await fetch('/api/generatePDF', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ html: htmlContent }),
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'meu-documento.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      alert('Erro ao gerar PDF');
    }

    setLoading(false);
  };

  return (
    <button onClick={generatePDF} disabled={loading}>
      {loading ? 'Gerando...' : 'Gerar PDF'}
    </button>
  );
}
