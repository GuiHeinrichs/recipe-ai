import puppeteer from 'puppeteer';

export async function POST(req) {
  try {
    const { html } = await req.json();

    // Inicializa o Puppeteer no modo headless
    const browser = await puppeteer.launch({
      headless: 'new', // Para evitar warnings no Puppeteer 20+
    });
    const page = await browser.newPage();

    // Define o HTML da página
    await page.setContent(html, { waitUntil: 'networkidle0' });

    // Gera o PDF
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
    });

    await browser.close();

    return new Response(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=documento.pdf',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Erro ao gerar PDF' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
