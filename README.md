# 🧪 UI Testing – Selenium + WebdriverIO + Allure (❌ Pipeline Rojo con Evidencias)

![CI](https://github.com/FernandoQuintela/selenium-wdio-fail/actions/workflows/ui-tests.yml/badge.svg)
[![Allure Report](https://img.shields.io/badge/Allure-Report-red)](https://fernandoquintela.github.io/selenium-wdio-fail/)

Proyecto demostrativo de **automatización E2E (End-to-End)** con **Selenium (WebDriver)**, **WebdriverIO**, **Mocha** y reportería **Allure**, ejecutado de forma continua en **GitHub Actions**.

Esta versión está diseñada para **mostrar el manejo de errores y generación de evidencia visual automática**: los tests fallan a propósito y el pipeline publica el reporte Allure con screenshots adjuntos.

> 🔗 También podés ver la versión “verde” (pipeline estable, 100 % passed):  
> 👉 [selenium-wdio](https://github.com/FernandoQuintela/selenium-wdio)

---

## 📂 Estructura

| Carpeta / Archivo | Descripción |
|--------------------|-------------|
| `test/specs/demo-fail.spec.js` | Test que falla intencionalmente y captura evidencia |
| `test/specs/` | Casos de prueba E2E (`busqueda.spec.js`, `login.spec.js`, etc.) |
| `test/pageobjects/` | Clases POM con lógica de interacción |
| `wdio.conf.js` | Configuración principal con hook `afterTest` para screenshots |
| `.github/workflows/ui-tests.yml` | Pipeline CI/CD que ejecuta y publica Allure |
| `/allure-results/` → `/allure-report/` | Resultados y reporte HTML generado |

---

## 🚀 Ejecución local

```bash
npm ci
npx wdio run wdio.conf.js
```

El test `demo-fail.spec.js` fallará intencionalmente.
El reporte mostrará la captura y el stacktrace.

---

## 📊 Reporte Allure con evidencia

Incluye:

Capturas automáticas al momento del fallo

Logs de error y stacktrace

Métricas y suites completas (aunque haya fallas)

### 📄 Reporte en vivo (pipeline rojo):

👉 https://fernandoquintela.github.io/selenium-wdio-fail/

---

## 🧩 Tecnologías

| Componente         | Rol                                         |
| ---------------    | --------------------------------------------|
| **WebdriverIO**    | Framework UI (wrapper de Selenium WebDriver)| 
| **Mocha + Expect** | Testing framework                           |
| **Allure Reporter**| Reportes HTML con evidencias                |
| **Node.js**        | Entorno de ejecución                        |
| **GitHub Actions** | CI/CD (ejecuta y publica aunque los tests fallen) |
| **GitHub Pages**   | Hosting del reporte                         |

---

## ⚙️ CI/CD

Cada push ejecuta:

WebdriverIO en Chrome Headless

Captura screenshots ante fallas

Genera resultados Allure

Publica reporte incluso si el pipeline termina en rojo (gracias al if: always())

### 📄 Ejecución manual:

Actions → “UI Tests (Fail)” → Re-run all jobs

---

## ⚙️ Hook de Screenshots

```bash
afterTest: async function (test, context, { error, passed }) {
  if (!passed) {
    const png = await browser.takeScreenshot();
    allure.addAttachment('screenshot', Buffer.from(png, 'base64'), 'image/png');
    allure.addAttachment('test error', String(error || 'unknown error'), 'text/plain');
  }
}
```

---

## 🧠 Autor

Fernando Quintela
QA Automation Engineer / Selenium–WebdriverIO Enthusiast

📍 Buenos Aires, Argentina

📧 fernand.quintela@gmail.com

---

