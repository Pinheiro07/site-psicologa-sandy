// ===============================
// CONFIGURAÇÕES
// ===============================
const WHATSAPP_NUMBER = "5528999080175";
const WHATSAPP_MSG = "Oi! Vim pelo site e quero agendar uma consulta.";

const APPS_SCRIPT_WEBAPP_URL =
  "https://script.google.com/macros/s/AKfycbw_5NRy0ZzSlGLYO5tNSYTgMvb5fIM5zDDoH1JIvgW0CSZHwL2l2wTSUJ3mOBL-NJyNQw/exec";

// ===============================
// WHATSAPP LINKS
// ===============================
(function setupWhatsApp() {
  const wppLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

  const btnTop = document.getElementById("btnWppTop");
  const btnFloat = document.getElementById("btnWppFloat");
  const wppText = document.getElementById("wppText");

  if (btnTop) btnTop.href = wppLink;
  if (btnFloat) btnFloat.href = wppLink;
  if (wppText) wppText.textContent = "+" + WHATSAPP_NUMBER;
})();

// ===============================
// ANO AUTOMÁTICO
// ===============================
(function setupYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// ===============================
// FORMULÁRIO -> GOOGLE SHEETS
// ===============================
(function setupForm() {
  const form = document.getElementById("formAgendamento");
  const msg = document.getElementById("msg");
  const btnEnviar = document.getElementById("btnEnviar");

  if (!form) return;

  function normalizePhone(v) {
    return (v || "").replace(/\D/g, "");
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (msg) {
      msg.className = "msg";
      msg.textContent = "";
    }

    const nome = document.getElementById("nome")?.value.trim() || "";
    const telefone = normalizePhone(document.getElementById("telefone")?.value || "");
    const relato = document.getElementById("relato")?.value.trim() || "";

    // Validações
    if (nome.length < 3) {
      if (msg) {
        msg.className = "msg err";
        msg.textContent = "Por favor, preencha seu nome completo.";
      }
      return;
    }

    // Telefone BR celular: 11 dígitos (DDD + 9 dígitos)
    if (telefone.length !== 11) {
      if (msg) {
        msg.className = "msg err";
        msg.textContent = "Digite um telefone válido (DDD + 9 dígitos). Ex: (28)99937-6500";
      }
      return;
    }

    if (relato.length < 10) {
      if (msg) {
        msg.className = "msg err";
        msg.textContent = "Conte um pouco mais sobre sua situação (mínimo 10 caracteres).";
      }
      return;
    }

    if (!APPS_SCRIPT_WEBAPP_URL) {
      if (msg) {
        msg.className = "msg err";
        msg.textContent = "A URL do Google Apps Script não está configurada.";
      }
      return;
    }

    if (btnEnviar) {
      btnEnviar.disabled = true;
      btnEnviar.textContent = "Enviando...";
    }

    try {
      const params = new URLSearchParams();
      params.append("nome", nome);
      params.append("telefone", telefone);
      params.append("relato", relato);
      params.append("origem", "site");

      await fetch(APPS_SCRIPT_WEBAPP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: params.toString(),
      });

      if (msg) {
        msg.className = "msg ok";
        msg.textContent = "Recebido! Vou te responder em breve pelo WhatsApp.";
      }

      form.reset();
    } catch (err) {
      if (msg) {
        msg.className = "msg err";
        msg.textContent = "Erro ao enviar. Tente novamente ou chame no WhatsApp.";
      }
    } finally {
      if (btnEnviar) {
        btnEnviar.disabled = false;
        btnEnviar.textContent = "Enviar";
      }
    }
  });
})();
