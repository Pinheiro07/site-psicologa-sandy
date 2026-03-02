// assets/js/phone-mask.js
(function () {
  function formatPhone(value) {
    const digits = (value || "").replace(/\D/g, "").slice(0, 11);

    // (DD) 99999-9999 ou (DD) 9999-9999
    const ddd = digits.slice(0, 2);
    const part1 = digits.slice(2, digits.length === 11 ? 7 : 6);
    const part2 = digits.slice(digits.length === 11 ? 7 : 6, 11);

    let out = "";
    if (ddd) out += `(${ddd}`;
    if (ddd.length === 2) out += ") ";
    if (part1) out += part1;
    if (part2) out += `-${part2}`;

    return out;
  }

  function applyPhoneMask(input) {
    if (!input) return;

    // evita colar texto estranho
    input.addEventListener("input", () => {
      const posEnd = input.selectionEnd || 0;
      const before = input.value;
      input.value = formatPhone(input.value);

      // tenta manter cursor estável (simples)
      if (before !== input.value) {
        input.setSelectionRange(posEnd, posEnd);
      }
    });

    input.addEventListener("blur", () => {
      // se tiver só DDD incompleto, limpa
      const digits = input.value.replace(/\D/g, "");
      if (digits.length > 0 && digits.length < 10) input.value = "";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const phone = document.getElementById("telefone");
    applyPhoneMask(phone);
  });
})();
