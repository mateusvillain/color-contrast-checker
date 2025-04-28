document.addEventListener("DOMContentLoaded", () => {
  // Elementos do DOM - Seletores de cores
  const backgroundColorInput = document.getElementById("background-color")
  const textColorInput = document.getElementById("text-color")
  const backgroundHexInput = document.getElementById("background-hex")
  const textHexInput = document.getElementById("text-hex")
  const previewElement = document.getElementById("preview")
  const contrastRatioElement = document.getElementById("contrast-ratio")
  const aaNormalElement = document.getElementById("aa-normal")
  const aaLargeElement = document.getElementById("aa-large")
  const aaaNormalElement = document.getElementById("aaa-normal")
  const aaaLargeElement = document.getElementById("aaa-large")

  // Elementos para os formatos de cor adicionais
  const backgroundRgbInput = document.getElementById("background-rgb")
  const backgroundHslInput = document.getElementById("background-hsl")
  const backgroundLchInput = document.getElementById("background-lch")
  const textRgbInput = document.getElementById("text-rgb")
  const textHslInput = document.getElementById("text-hsl")
  const textLchInput = document.getElementById("text-lch")

  // Elementos para os sliders RGB
  const bgRSlider = document.getElementById("bg-r-slider")
  const bgGSlider = document.getElementById("bg-g-slider")
  const bgBSlider = document.getElementById("bg-b-slider")
  const textRSlider = document.getElementById("text-r-slider")
  const textGSlider = document.getElementById("text-g-slider")
  const textBSlider = document.getElementById("text-b-slider")

  // Elementos para os valores RGB
  const bgRValue = document.getElementById("bg-r-value")
  const bgGValue = document.getElementById("bg-g-value")
  const bgBValue = document.getElementById("bg-b-value")
  const textRValue = document.getElementById("text-r-value")
  const textGValue = document.getElementById("text-g-value")
  const textBValue = document.getElementById("text-b-value")

  // Elementos para os sliders HSL
  const bgHSlider = document.getElementById("bg-h-slider")
  const bgSSlider = document.getElementById("bg-s-slider")
  const bgLSlider = document.getElementById("bg-l-slider")
  const textHSlider = document.getElementById("text-h-slider")
  const textSSlider = document.getElementById("text-s-slider")
  const textLSlider = document.getElementById("text-l-slider")

  // Elementos para os valores HSL
  const bgHValue = document.getElementById("bg-h-value")
  const bgSValue = document.getElementById("bg-s-value")
  const bgLValue = document.getElementById("bg-l-value")
  const textHValue = document.getElementById("text-h-value")
  const textSValue = document.getElementById("text-s-value")
  const textLValue = document.getElementById("text-l-value")

  // Elementos para os sliders LCH
  const bgLchLSlider = document.getElementById("bg-lch-l-slider")
  const bgLchCSlider = document.getElementById("bg-lch-c-slider")
  const bgLchHSlider = document.getElementById("bg-lch-h-slider")
  const textLchLSlider = document.getElementById("text-lch-l-slider")
  const textLchCSlider = document.getElementById("text-lch-c-slider")
  const textLchHSlider = document.getElementById("text-lch-h-slider")

  // Elementos para os valores LCH
  const bgLchLValue = document.getElementById("bg-lch-l-value")
  const bgLchCValue = document.getElementById("bg-lch-c-value")
  const bgLchHValue = document.getElementById("bg-lch-h-value")
  const textLchLValue = document.getElementById("text-lch-l-value")
  const textLchCValue = document.getElementById("text-lch-c-value")
  const textLchHValue = document.getElementById("text-lch-h-value")

  // Elementos para as previsualizações de cores
  const bgRgbPreview = document.getElementById("bg-rgb-preview")
  const textRgbPreview = document.getElementById("text-rgb-preview")
  const bgHslPreview = document.getElementById("bg-hsl-preview")
  const textHslPreview = document.getElementById("text-hsl-preview")
  const bgLchPreview = document.getElementById("bg-lch-preview")
  const textLchPreview = document.getElementById("text-lch-preview")

  // Verificar se todos os elementos foram encontrados
  const checkElements = () => {
    const elements = [
      { name: "previewElement", element: previewElement },
      { name: "backgroundColorInput", element: backgroundColorInput },
      { name: "textColorInput", element: textColorInput },
      // Adicione outros elementos críticos aqui
    ]

    const missingElements = elements.filter((item) => !item.element)

    if (missingElements.length > 0) {
      console.error("Elementos não encontrados:", missingElements.map((item) => item.name).join(", "))
      return false
    }

    return true
  }

  // Se algum elemento crítico estiver faltando, não continue
  if (!checkElements()) {
    console.error("Inicialização abortada devido a elementos ausentes no DOM")
    return
  }

  // Configuração das abas para cor de fundo
  const bgTabButtons = document.querySelectorAll(".bg-tabs .tab-button")
  const bgTabContents = document.querySelectorAll("[id^='bg-'][id$='-tab']")

  bgTabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remover classe active de todos os botões e conteúdos
      bgTabButtons.forEach((btn) => btn.classList.remove("active"))
      bgTabContents.forEach((content) => content.classList.remove("active"))

      // Adicionar classe active ao botão clicado e ao conteúdo correspondente
      button.classList.add("active")
      const tabId = button.getAttribute("data-tab") + "-tab"
      document.getElementById(tabId).classList.add("active")
    })
  })

  // Configuração das abas para cor de texto
  const textTabButtons = document.querySelectorAll(".text-tabs .tab-button")
  const textTabContents = document.querySelectorAll("[id^='text-'][id$='-tab']")

  textTabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remover classe active de todos os botões e conteúdos
      textTabButtons.forEach((btn) => btn.classList.remove("active"))
      textTabContents.forEach((content) => content.classList.remove("active"))

      // Adicionar classe active ao botão clicado e ao conteúdo correspondente
      button.classList.add("active")
      const tabId = button.getAttribute("data-tab") + "-tab"
      document.getElementById(tabId).classList.add("active")
    })
  })

  // Função para converter hex para RGB
  function hexToRgb(hex) {
    // Remover o "#" se presente
    hex = hex.replace("#", "")

    // Converter para short form para long form (e.g., "abc" -> "aabbcc")
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
    }

    // Parse valores R, G, B
    const r = Number.parseInt(hex.substring(0, 2), 16)
    const g = Number.parseInt(hex.substring(2, 4), 16)
    const b = Number.parseInt(hex.substring(4, 6), 16)

    return { r, g, b }
  }

  // Função para converter RGB para hex
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }

  // Função para calcular a Luminância Relativa
  function relativeLuminance(r, g, b) {
    const a = [r, g, b].map((v) => {
      v /= 255
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    })
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
  }

  // Função para calcular a relação de contraste
  function getContrastRatio(hexcolor1, hexcolor2) {
    const rgb1 = hexToRgb(hexcolor1)
    const rgb2 = hexToRgb(hexcolor2)
    const l1 = relativeLuminance(rgb1.r, rgb1.g, rgb1.b)
    const l2 = relativeLuminance(rgb2.r, rgb2.g, rgb2.b)
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
  }

  // Função para atualizar o elemento de resultado
  function updateResultElement(element, passes) {
    element.textContent = passes ? "Success" : "Fail"
    element.className = passes ? "pass" : "fail"
  }

  // Função para converter hex para string RGB
  function hexToRgbString(hex) {
    const rgb = hexToRgb(hex)
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
  }

  // Função para converter RGB para HSL
  function rgbToHsl(r, g, b) {
    r /= 255
    g /= 255
    b /= 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h,
      s,
      l = (max + min) / 2

    if (max === min) {
      h = s = 0 // acromático
    } else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }

      h /= 6
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    }
  }

  // Função para converter HSL para RGB
  function hslToRgb(h, s, l) {
    h /= 360
    s /= 100
    l /= 100

    let r, g, b

    if (s === 0) {
      r = g = b = l // acromático
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1 / 6) return p + (q - p) * 6 * t
        if (t < 1 / 2) return q
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
        return p
      }

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q

      r = hue2rgb(p, q, h + 1 / 3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1 / 3)
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
    }
  }

  // Função para converter hex para string HSL
  function hexToHslString(hex) {
    const rgb = hexToRgb(hex)
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)
    return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
  }

  // Função para converter HSL para hex
  function hslToHex(h, s, l) {
    const rgb = hslToRgb(h, s, l)
    return rgbToHex(rgb.r, rgb.g, rgb.b)
  }

  // Função para converter RGB para LCH (aproximação)
  function rgbToLch(r, g, b) {
    // Converter para sRGB normalizado
    r /= 255
    g /= 255
    b /= 255

    // Converter para XYZ
    // Matriz de transformação sRGB para XYZ
    const linearR = r <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)
    const linearG = g <= 0.04045 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4)
    const linearB = b <= 0.04045 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)

    const x = linearR * 0.4124 + linearG * 0.3576 + linearB * 0.1805
    const y = linearR * 0.2126 + linearG * 0.7152 + linearB * 0.0722
    const z = linearR * 0.0193 + linearG * 0.1192 + linearB * 0.9505

    // Converter para Lab (aproximação)
    const xn = 0.95047
    const yn = 1.0
    const zn = 1.08883

    const fx = x / xn > 0.008856 ? Math.pow(x / xn, 1 / 3) : (7.787 * x) / xn + 16 / 116
    const fy = y / yn > 0.008856 ? Math.pow(y / yn, 1 / 3) : (7.787 * y) / yn + 16 / 116
    const fz = z / zn > 0.008856 ? Math.pow(z / zn, 1 / 3) : (7.787 * z) / zn + 16 / 116

    const l = 116 * fy - 16
    const a = 500 * (fx - fy)
    const b_lab = 200 * (fy - fz)

    // Converter para LCH
    const c = Math.sqrt(a * a + b_lab * b_lab)
    let h = (Math.atan2(b_lab, a) * 180) / Math.PI

    if (h < 0) {
      h += 360
    }

    return {
      l: Math.round(l),
      c: Math.round(c),
      h: Math.round(h),
    }
  }

  // Função para converter LCH para RGB (aproximação)
  function lchToRgb(l, c, h) {
    // Converter LCH para Lab
    const a = c * Math.cos((h * Math.PI) / 180)
    const b_lab = c * Math.sin((h * Math.PI) / 180)

    // Converter Lab para XYZ
    const fy = (l + 16) / 116
    const fx = a / 500 + fy
    const fz = fy - b_lab / 200

    const xn = 0.95047
    const yn = 1.0
    const zn = 1.08883

    const x = xn * (fx > 0.206893 ? Math.pow(fx, 3) : (fx - 16 / 116) / 7.787)
    const y = yn * (fy > 0.206893 ? Math.pow(fy, 3) : (fy - 16 / 116) / 7.787)
    const z = zn * (fz > 0.206893 ? Math.pow(fz, 3) : (fz - 16 / 116) / 7.787)

    // Converter XYZ para RGB
    let r = x * 3.2406 + y * -1.5372 + z * -0.4986
    let g = x * -0.9689 + y * 1.8758 + z * 0.0415
    let b = x * 0.0557 + y * -0.204 + z * 1.057

    // Aplicar correção gama
    r = r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r
    g = g > 0.0031308 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : 12.92 * g
    b = b > 0.0031308 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : 12.92 * b

    // Limitar valores entre 0 e 1
    r = Math.max(0, Math.min(1, r))
    g = Math.max(0, Math.min(1, g))
    b = Math.max(0, Math.min(1, b))

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
    }
  }

  // Função para converter hex para string LCH
  function hexToLchString(hex) {
    const rgb = hexToRgb(hex)
    const lch = rgbToLch(rgb.r, rgb.g, rgb.b)
    return `lch(${lch.l}% ${lch.c} ${lch.h})`
  }

  // Função para converter LCH para hex
  function lchToHex(l, c, h) {
    const rgb = lchToRgb(l, c, h)
    return rgbToHex(rgb.r, rgb.g, rgb.b)
  }

  // Função para validar entrada hexadecimal
  function validateHex(hex) {
    // Adicionar # se não estiver presente
    if (hex.charAt(0) !== "#") {
      hex = "#" + hex
    }

    // Verificar se é um valor hex válido
    const regex = /^#([A-Fa-f0-9]{3}){1,2}$/
    if (!regex.test(hex)) {
      return null
    }

    return hex
  }

  // Função para atualizar todos os controles e visualizações
  function updateAllControls(bgColor, textColor) {
    // Verificar se os elementos existem antes de acessar suas propriedades
    if (!previewElement || !backgroundColorInput || !textColorInput) {
      console.error("Elementos críticos não encontrados no DOM")
      return
    }

    // Atualizar inputs de cor
    backgroundColorInput.value = bgColor
    textColorInput.value = textColor
    backgroundHexInput.value = bgColor
    textHexInput.value = textColor

    // Atualizar a visualização principal
    previewElement.style.backgroundColor = bgColor
    previewElement.style.color = textColor

    // Atualizar os campos de formato de cor para o fundo
    const bgRgb = hexToRgb(bgColor)
    const bgHsl = rgbToHsl(bgRgb.r, bgRgb.g, bgRgb.b)
    const bgLch = rgbToLch(bgRgb.r, bgRgb.g, bgRgb.b)

    if (backgroundRgbInput) backgroundRgbInput.value = `rgb(${bgRgb.r}, ${bgRgb.g}, ${bgRgb.b})`
    if (backgroundHslInput) backgroundHslInput.value = `hsl(${bgHsl.h}, ${bgHsl.s}%, ${bgHsl.l}%)`
    if (backgroundLchInput) backgroundLchInput.value = `lch(${bgLch.l}% ${bgLch.c} ${bgLch.h})`

    // Atualizar os campos de formato de cor para o texto
    const textRgb = hexToRgb(textColor)
    const textHsl = rgbToHsl(textRgb.r, textRgb.g, textRgb.b)
    const textLch = rgbToLch(textRgb.r, textRgb.g, textRgb.b)

    if (textRgbInput) textRgbInput.value = `rgb(${textRgb.r}, ${textRgb.g}, ${textRgb.b})`
    if (textHslInput) textHslInput.value = `hsl(${textHsl.h}, ${textHsl.s}%, ${textHsl.l}%)`
    if (textLchInput) textLchInput.value = `lch(${textLch.l}% ${textLch.c} ${textLch.h})`

    // Atualizar sliders RGB com verificação de null
    if (bgRSlider) bgRSlider.value = bgRgb.r.toString()
    if (bgGSlider) bgGSlider.value = bgRgb.g.toString()
    if (bgBSlider) bgBSlider.value = bgRgb.b.toString()
    if (textRSlider) textRSlider.value = textRgb.r.toString()
    if (textGSlider) textGSlider.value = textRgb.g.toString()
    if (textBSlider) textBSlider.value = textRgb.b.toString()

    // Atualizar valores RGB com verificação de null
    if (bgRValue) bgRValue.textContent = bgRgb.r.toString()
    if (bgGValue) bgGValue.textContent = bgRgb.g.toString()
    if (bgBValue) bgBValue.textContent = bgRgb.b.toString()
    if (textRValue) textRValue.textContent = textRgb.r.toString()
    if (textGValue) textGValue.textContent = textRgb.g.toString()
    if (textBValue) textBValue.textContent = textRgb.b.toString()

    // Atualizar sliders HSL com verificação de null
    if (bgHSlider) bgHSlider.value = bgHsl.h.toString()
    if (bgSSlider) bgSSlider.value = bgHsl.s.toString()
    if (bgLSlider) bgLSlider.value = bgHsl.l.toString()
    if (textHSlider) textHSlider.value = textHsl.h.toString()
    if (textSSlider) textSSlider.value = textHsl.s.toString()
    if (textLSlider) textLSlider.value = textHsl.l.toString()

    // Atualizar valores HSL com verificação de null
    if (bgHValue) bgHValue.textContent = bgHsl.h.toString()
    if (bgSValue) bgSValue.textContent = bgHsl.s.toString()
    if (bgLValue) bgLValue.textContent = bgHsl.l.toString()
    if (textHValue) textHValue.textContent = textHsl.h.toString()
    if (textSValue) textSValue.textContent = textHsl.s.toString()
    if (textLValue) textLValue.textContent = textHsl.l.toString()

    // Atualizar sliders LCH com verificação de null
    if (bgLchLSlider) bgLchLSlider.value = bgLch.l.toString()
    if (bgLchCSlider) bgLchCSlider.value = bgLch.c.toString()
    if (bgLchHSlider) bgLchHSlider.value = bgLch.h.toString()
    if (textLchLSlider) textLchLSlider.value = textLch.l.toString()
    if (textLchCSlider) textLchCSlider.value = textLch.c.toString()
    if (textLchHSlider) textLchHSlider.value = textLch.h.toString()

    // Atualizar valores LCH com verificação de null
    if (bgLchLValue) bgLchLValue.textContent = bgLch.l.toString()
    if (bgLchCValue) bgLchCValue.textContent = bgLch.c.toString()
    if (bgLchHValue) bgLchHValue.textContent = bgLch.h.toString()
    if (textLchLValue) textLchLValue.textContent = textLch.l.toString()
    if (textLchCValue) textLchCValue.textContent = textLch.c.toString()
    if (textLchHValue) textLchHValue.textContent = textLch.h.toString()

    // Atualizar previsualizações de cores com verificação de null
    if (bgRgbPreview) bgRgbPreview.style.backgroundColor = bgColor
    if (textRgbPreview) textRgbPreview.style.backgroundColor = textColor
    if (bgHslPreview) bgHslPreview.style.backgroundColor = bgColor
    if (textHslPreview) textHslPreview.style.backgroundColor = textColor
    if (bgLchPreview) bgLchPreview.style.backgroundColor = bgColor
    if (textLchPreview) textLchPreview.style.backgroundColor = textColor

    // Calcular a relação de contraste
    const contrastRatio = getContrastRatio(bgColor, textColor)

    // Atualizar o valor da relação de contraste
    if (contrastRatioElement) contrastRatioElement.textContent = contrastRatio.toFixed(2)

    // Verificar conformidade com WCAG
    const passesAA_Normal = contrastRatio >= 4.5
    const passesAA_Large = contrastRatio >= 3
    const passesAAA_Normal = contrastRatio >= 7
    const passesAAA_Large = contrastRatio >= 4.5

    // Atualizar os resultados com verificação de null
    if (aaNormalElement) updateResultElement(aaNormalElement, passesAA_Normal)
    if (aaLargeElement) updateResultElement(aaLargeElement, passesAA_Large)
    if (aaaNormalElement) updateResultElement(aaaNormalElement, passesAAA_Normal)
    if (aaaLargeElement) updateResultElement(aaaLargeElement, passesAAA_Large)
  }

  // Event listeners para inputs de cor
  if (backgroundColorInput) {
    backgroundColorInput.addEventListener("input", function () {
      updateAllControls(this.value, textColorInput.value)
    })
  }

  if (textColorInput) {
    textColorInput.addEventListener("input", function () {
      updateAllControls(backgroundColorInput.value, this.value)
    })
  }

  // Event listeners para inputs de texto hex
  if (backgroundHexInput) {
    backgroundHexInput.addEventListener("input", function () {
      const validHex = validateHex(this.value)
      if (validHex) {
        updateAllControls(validHex, textColorInput.value)
      }
    })
  }

  if (textHexInput) {
    textHexInput.addEventListener("input", function () {
      const validHex = validateHex(this.value)
      if (validHex) {
        updateAllControls(backgroundColorInput.value, validHex)
      }
    })
  }

  // Event listeners para sliders RGB
  if (bgRSlider) {
    bgRSlider.addEventListener("input", function () {
      const r = Number.parseInt(this.value)
      const g = Number.parseInt(bgGSlider.value)
      const b = Number.parseInt(bgBSlider.value)
      const newColor = rgbToHex(r, g, b)
      updateAllControls(newColor, textColorInput.value)
    })
  }

  if (bgGSlider) {
    bgGSlider.addEventListener("input", function () {
      const r = Number.parseInt(bgRSlider.value)
      const g = Number.parseInt(this.value)
      const b = Number.parseInt(bgBSlider.value)
      const newColor = rgbToHex(r, g, b)
      updateAllControls(newColor, textColorInput.value)
    })
  }

  if (bgBSlider) {
    bgBSlider.addEventListener("input", function () {
      const r = Number.parseInt(bgRSlider.value)
      const g = Number.parseInt(bgGSlider.value)
      const b = Number.parseInt(this.value)
      const newColor = rgbToHex(r, g, b)
      updateAllControls(newColor, textColorInput.value)
    })
  }

  if (textRSlider) {
    textRSlider.addEventListener("input", function () {
      const r = Number.parseInt(this.value)
      const g = Number.parseInt(textGSlider.value)
      const b = Number.parseInt(textBSlider.value)
      const newColor = rgbToHex(r, g, b)
      updateAllControls(backgroundColorInput.value, newColor)
    })
  }

  if (textGSlider) {
    textGSlider.addEventListener("input", function () {
      const r = Number.parseInt(textRSlider.value)
      const g = Number.parseInt(this.value)
      const b = Number.parseInt(textBSlider.value)
      const newColor = rgbToHex(r, g, b)
      updateAllControls(backgroundColorInput.value, newColor)
    })
  }

  if (textBSlider) {
    textBSlider.addEventListener("input", function () {
      const r = Number.parseInt(textRSlider.value)
      const g = Number.parseInt(textGSlider.value)
      const b = Number.parseInt(this.value)
      const newColor = rgbToHex(r, g, b)
      updateAllControls(backgroundColorInput.value, newColor)
    })
  }

  // Event listeners para sliders HSL
  if (bgHSlider) {
    bgHSlider.addEventListener("input", function () {
      const h = Number.parseInt(this.value)
      const s = Number.parseInt(bgSSlider.value)
      const l = Number.parseInt(bgLSlider.value)
      const newColor = hslToHex(h, s, l)
      updateAllControls(newColor, textColorInput.value)
    })
  }

  if (bgSSlider) {
    bgSSlider.addEventListener("input", function () {
      const h = Number.parseInt(bgHSlider.value)
      const s = Number.parseInt(this.value)
      const l = Number.parseInt(bgLSlider.value)
      const newColor = hslToHex(h, s, l)
      updateAllControls(newColor, textColorInput.value)
    })
  }

  if (bgLSlider) {
    bgLSlider.addEventListener("input", function () {
      const h = Number.parseInt(bgHSlider.value)
      const s = Number.parseInt(bgSSlider.value)
      const l = Number.parseInt(this.value)
      const newColor = hslToHex(h, s, l)
      updateAllControls(newColor, textColorInput.value)
    })
  }

  if (textHSlider) {
    textHSlider.addEventListener("input", function () {
      const h = Number.parseInt(this.value)
      const s = Number.parseInt(textSSlider.value)
      const l = Number.parseInt(textLSlider.value)
      const newColor = hslToHex(h, s, l)
      updateAllControls(backgroundColorInput.value, newColor)
    })
  }

  if (textSSlider) {
    textSSlider.addEventListener("input", function () {
      const h = Number.parseInt(textHSlider.value)
      const s = Number.parseInt(this.value)
      const l = Number.parseInt(textLSlider.value)
      const newColor = hslToHex(h, s, l)
      updateAllControls(backgroundColorInput.value, newColor)
    })
  }

  if (textLSlider) {
    textLSlider.addEventListener("input", function () {
      const h = Number.parseInt(textHSlider.value)
      const s = Number.parseInt(textSSlider.value)
      const l = Number.parseInt(this.value)
      const newColor = hslToHex(h, s, l)
      updateAllControls(backgroundColorInput.value, newColor)
    })
  }

  // Event listeners para sliders LCH
  if (bgLchLSlider) {
    bgLchLSlider.addEventListener("input", function () {
      const l = Number.parseInt(this.value)
      const c = Number.parseInt(bgLchCSlider.value)
      const h = Number.parseInt(bgLchHSlider.value)
      const newColor = lchToHex(l, c, h)
      updateAllControls(newColor, textColorInput.value)
    })
  }

  if (bgLchCSlider) {
    bgLchCSlider.addEventListener("input", function () {
      const l = Number.parseInt(bgLchLSlider.value)
      const c = Number.parseInt(this.value)
      const h = Number.parseInt(bgLchHSlider.value)
      const newColor = lchToHex(l, c, h)
      updateAllControls(newColor, textColorInput.value)
    })
  }

  if (bgLchHSlider) {
    bgLchHSlider.addEventListener("input", function () {
      const l = Number.parseInt(bgLchLSlider.value)
      const c = Number.parseInt(bgLchCSlider.value)
      const h = Number.parseInt(this.value)
      const newColor = lchToHex(l, c, h)
      updateAllControls(newColor, textColorInput.value)
    })
  }

  if (textLchLSlider) {
    textLchLSlider.addEventListener("input", function () {
      const l = Number.parseInt(this.value)
      const c = Number.parseInt(textLchCSlider.value)
      const h = Number.parseInt(textLchHSlider.value)
      const newColor = lchToHex(l, c, h)
      updateAllControls(backgroundColorInput.value, newColor)
    })
  }

  if (textLchCSlider) {
    textLchCSlider.addEventListener("input", function () {
      const l = Number.parseInt(textLchLSlider.value)
      const c = Number.parseInt(this.value)
      const h = Number.parseInt(textLchHSlider.value)
      const newColor = lchToHex(l, c, h)
      updateAllControls(backgroundColorInput.value, newColor)
    })
  }

  if (textLchHSlider) {
    textLchHSlider.addEventListener("input", function () {
      const l = Number.parseInt(textLchLSlider.value)
      const c = Number.parseInt(textLchCSlider.value)
      const h = Number.parseInt(this.value)
      const newColor = lchToHex(l, c, h)
      updateAllControls(backgroundColorInput.value, newColor)
    })
  }

  // Funcionalidade para copiar valores hexadecimais
  const copyButtons = document.querySelectorAll(".copy-button")

  copyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Obter o ID do campo alvo
      const targetId = this.getAttribute("data-target")
      const targetInput = document.getElementById(targetId)

      if (!targetInput) {
        console.error(`Elemento com ID ${targetId} não encontrado`)
        return
      }

      // Selecionar o texto
      targetInput.select()
      targetInput.setSelectionRange(0, 99999) // Para dispositivos móveis

      // Copiar para a área de transferência
      navigator.clipboard
        .writeText(targetInput.value)
        .then(() => {
          // Feedback visual
          this.classList.add("copied")

          // Criar tooltip temporário
          const tooltip = document.createElement("span")
          tooltip.className = "tooltip"
          tooltip.textContent = "Copied!"
          this.appendChild(tooltip)

          // Mostrar tooltip
          setTimeout(() => {
            this.classList.add("show-tooltip")
          }, 10)

          // Remover classes e tooltip após um tempo
          setTimeout(() => {
            this.classList.remove("copied", "show-tooltip")
            setTimeout(() => {
              tooltip.remove()
            }, 300)
          }, 1500)
        })
        .catch((err) => {
          console.error("Erro ao copiar texto: ", err)

          // Método alternativo para navegadores que não suportam clipboard API
          const textArea = document.createElement("textarea")
          textArea.value = targetInput.value
          textArea.style.position = "fixed"
          textArea.style.left = "-999999px"
          textArea.style.top = "-999999px"
          document.body.appendChild(textArea)
          textArea.focus()
          textArea.select()

          try {
            const successful = document.execCommand("copy")
            if (successful) {
              // Feedback visual
              this.classList.add("copied")

              // Criar tooltip temporário
              const tooltip = document.createElement("span")
              tooltip.className = "tooltip"
              tooltip.textContent = "Copiado!"
              this.appendChild(tooltip)

              // Mostrar tooltip
              setTimeout(() => {
                this.classList.add("show-tooltip")
              }, 10)

              // Remover classes e tooltip após um tempo
              setTimeout(() => {
                this.classList.remove("copied", "show-tooltip")
                setTimeout(() => {
                  tooltip.remove()
                }, 300)
              }, 1500)
            }
          } catch (err) {
            console.error("Erro ao copiar texto (método alternativo): ", err)
          }

          document.body.removeChild(textArea)
        })
    })
  })

  // Inicializar resultados
  if (backgroundColorInput && textColorInput) {
    updateAllControls(backgroundColorInput.value, textColorInput.value)
  }
})
