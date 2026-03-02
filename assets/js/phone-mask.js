(function () {
  const input = document.getElementById("telefone");
  if (!input) return;

  function onlyDigits(v) {
    return (v || "").replace(/\D/g, "");
  }

  function formatPhoneBR(digits) {
    // Aceita até 11 dígitos: DDD + 9 dígitos (celular)
    digits = digits.slice(0, 11);

    const ddd = digits.slice(0, 2);
    const p1 = digits.slice(2, 7);
    const p2 = digits.slice(7, 11);

    let out = "";
    if (ddd.length) out += `(${ddd}`;
    if (ddd.length === 2) out += `)`;
    if (p1.length) out += `${p1}`;
    if (p2.length) out += `-${p2}`;

    return out;
  }

  function applyMask() {
    const digits = onlyDigits(input.value);
    input.value = formatPhoneBR(digits);
  }

  input.addEventListener("input", applyMask);
  input.addEventListener("blur", applyMask);
})();
