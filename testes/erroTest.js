const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("file:///C:/Users/Elis/jogoNumeroSecreto/index.html");

  const title = await page.title();
  console.log("Título da página:", title);

  await page.waitForTimeout(2000);

  await page.fill('input[type="number"]', "15");
  await page.click('button:has-text("Chutar")');

  await page.waitForTimeout(2000);

  const errorMessage = await page.locator(".texto__paragrafo").innerText();
  if (errorMessage.includes("Por favor, insira um número entre 1 e 10.")) {
    console.log("Mensagem de erro exibida corretamente:", errorMessage);
  } else {
    console.log("Erro: A mensagem de erro não foi exibida.");
  }

  await page.waitForTimeout(2000);

  await browser.close();
})();
