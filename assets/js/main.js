// assets/js/main.js
(function () {
  // ====== CONFIGURAÇÕES ======
  const WHATSAPP_NUMBER = "5528999080175";
  const WHATSAPP_MSG = "Oi! Vim pelo site e quero agendar uma consulta.";
  const APPS_SCRIPT_WEBAPP_URL =
    "https://script.google.com/macros/s/AKfycbw_5NRy0ZzSlGLYO5tNSYTgMvb5fIM5zDDoH1JIvgW0CSZHwL2l2wTSUJ3mOBL-NJyNQw/exec";

  function normalizePhone(v) {
    return (v || "").replace(/\D/g, "");
  }

  document.addEventListener("DOMContentLoaded", () => {
    // ===== WhatsApp Links =====
    const btnWppTop = document.getElementById("btnWppTop");
    const btnWppFloat = document.getElementById("btnWppFloat");
    const wppText = document.getElementById("wppText");

    const wppLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      WHATSAPP_MSG
    )}`;

    if (btnWppTop) btnWppTop.href = wppLink;
    if (btnWppFloat) btnWppFloat.href = wppLink;
    if (wppText) wppText.textContent = "+" + WHATSAPP_NUMBER;

    // ===== Ano =====
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    // ===== Form -> Google Sheets =====
    const form = document.getElementById("formAgendamento");
    const msg = document.getElementById("msg");
    const btnEnviar = document.getElementById("btnEnviar");

    if (!form || !msg || !btnEnviar) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      msg.className = "msg";
      msg.textContent = "";

      const nome = (document.getElementById("nome")?.value || "").trim();
      const telefoneDigits = normalizePhone(
        document.getElementById("telefone")?.value
      );
      const relato = (document.getElementById("relato")?.value || "").trim();

      if (!APPS_SCRIPT_WEBAPP_URL) {
        msg.className = "msg err";
        msg.textContent = "Falta configurar a URL do Google Apps Script (Web App).";
        return;
      }

      if (nome.length < 3 || relato.length < 10 || telefoneDigits.length < 10) {
        msg.className = "msg err";
        msg.textContent =
          "Confere se você preencheu nome, telefone com DDD e um relato válido.";
        return;
      }

      btnEnviar.disabled = true;
      btnEnviar.textContent = "Enviando...";

      try {
        const params = new URLSearchParams();
        params.append("nome", nome);
        params.append("telefone", telefoneDigits);
        params.append("relato", relato);
        params.append("origem", "site");

        await fetch(APPS_SCRIPT_WEBAPP_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: params.toString(),
        });

        msg.className = "msg ok";
        msg.textContent = "Recebido! Vou te responder em breve pelo WhatsApp.";
        form.reset();
      } catch (err) {
        msg.className = "msg err";
        msg.textContent = "Erro ao enviar. Tente novamente ou chame no WhatsApp.";
      } finally {
        btnEnviar.disabled = false;
        btnEnviar.textContent = "Enviar";
      }
    });
  });
})();
