import "./style.css"
import "./script.js"

document.querySelector("#app").innerHTML = `
    <div class="layout-grid">
        <div class="cards">
            <!-- Background -->
            <div class="container color-picker">
                <input type="color" id="background-color" class="display-none" value="#F5F5F6">
                <div class="input-with-copy">
                    <input type="text" id="background-hex" value="#F5F5F6">
                    <button class="copy-button" data-target="background-hex" title="Copiar valor hexadecimal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                    </button>
                </div>
                <div class="tabs bg-tabs">
                    <button class="tab-button active" data-tab="bg-hsl">HSL</button>
                    <button class="tab-button" data-tab="bg-rgb">RGB</button>
                    <button class="tab-button" data-tab="bg-lch">LCH</button>
                </div>
    
                <!-- Controles HSL -->
                <div class="tab-content active" id="bg-hsl-tab">
                    <div class="slider-group">
                        <label>Hue <span id="bg-h-value">0</span>°</label>
                        <input type="range" id="bg-h-slider" min="0" max="360" value="0" class="slider">
                    </div>
                    <div class="slider-group">
                        <label>Saturation <span id="bg-s-value">0</span>%</label>
                        <input type="range" id="bg-s-slider" min="0" max="100" value="0" class="slider">
                    </div>
                    <div class="slider-group">
                        <label>Lightness <span id="bg-l-value">100</span>%</label>
                        <input type="range" id="bg-l-slider" min="0" max="100" value="100" class="slider">
                    </div>
                    <div class="color-preview display-none" id="bg-hsl-preview"></div>
                    <input type="text" id="background-hsl" value="hsl(0, 0%, 100%)" readonly>
                </div>
    
                <!-- Controles RGB -->
                <div class="tab-content" id="bg-rgb-tab">
                    <div class="slider-group">
                        <label>Red <span id="bg-r-value">255</span></label>
                        <input type="range" id="bg-r-slider" min="0" max="255" value="255" class="slider">
                    </div>
                    <div class="slider-group">
                        <label>Green <span id="bg-g-value">255</span></label>
                        <input type="range" id="bg-g-slider" min="0" max="255" value="255" class="slider">
                    </div>
                    <div class="slider-group">
                        <label>Blue <span id="bg-b-value">255</span></label>
                        <input type="range" id="bg-b-slider" min="0" max="255" value="255" class="slider">
                    </div>
                    <div class="color-preview display-none" id="bg-rgb-preview"></div>
                    <input type="text" id="background-rgb" value="rgb(255, 255, 255)" readonly>
                </div>
                
                <!-- Controles LCH -->
                <div class="tab-content" id="bg-lch-tab">
                    <div class="slider-group">
                        <label>Lightness <span id="bg-lch-l-value">100</span>%</label>
                        <input type="range" id="bg-lch-l-slider" min="0" max="100" value="100" class="slider">
                    </div>
                    <div class="slider-group">
                        <label>Chroma <span id="bg-lch-c-value">0</span></label>
                        <input type="range" id="bg-lch-c-slider" min="0" max="132" value="0" class="slider">
                    </div>
                    <div class="slider-group">
                        <label>Hue <span id="bg-lch-h-value">0</span>°</label>
                        <input type="range" id="bg-lch-h-slider" min="0" max="360" value="0" class="slider">
                    </div>
                    <div class="color-preview display-none" id="bg-lch-preview"></div>
                    <input type="text" id="background-lch" value="lch(100% 0 0)" readonly>
                </div>
            </div>
    
            <!-- Foreground -->
            <div class="container color-picker">
                <input type="color" id="text-color" class="display-none" value="#131519">
                <div class="input-with-copy">
                    <input type="text" id="text-hex" value="#131519">
                    <button class="copy-button" data-target="text-hex" title="Copiar valor hexadecimal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                    </button>
                </div>
                <div class="tabs text-tabs">
                    <button class="tab-button active" data-tab="text-hsl">HSL</button>
                    <button class="tab-button" data-tab="text-rgb">RGB</button>
                    <button class="tab-button" data-tab="text-lch">LCH</button>
                </div>
    
                <!-- Controles HSL - Texto -->
                <div class="tab-content active" id="text-hsl-tab">
                    <div class="color-sliders">
                        <div class="slider-group">
                            <label>Hue <span id="text-h-value">0</span>°</label>
                            <input type="range" id="text-h-slider" min="0" max="360" value="0" class="slider">
                        </div>
                        <div class="slider-group">
                            <label>Saturation <span id="text-s-value">0</span>%</label>
                            <input type="range" id="text-s-slider" min="0" max="100" value="0" class="slider">
                        </div>
                        <div class="slider-group">
                            <label>Lightness <span id="text-l-value">0</span>%</label>
                            <input type="range" id="text-l-slider" min="0" max="100" value="0" class="slider">
                        </div>
                        <div class="color-preview display-none" id="text-hsl-preview"></div>
                        <input type="text" id="text-hsl" value="hsl(0, 0%, 0%)" readonly>
                    </div>
                </div>
    
                <!-- Controles RGB - Texto -->
                <div class="tab-content" id="text-rgb-tab">
                    <div class="color-sliders">
                        <div class="slider-group">
                            <label>Red <span id="text-r-value">0</span></label>
                            <input type="range" id="text-r-slider" min="0" max="255" value="0" class="slider">
                        </div>
                        <div class="slider-group">
                            <label>Green <span id="text-g-value">0</span></label>
                            <input type="range" id="text-g-slider" min="0" max="255" value="0" class="slider">
                        </div>
                        <div class="slider-group">
                            <label>Blue <span id="text-b-value">0</span></label>
                            <input type="range" id="text-b-slider" min="0" max="255" value="0" class="slider">
                        </div>
                        <div class="color-preview display-none" id="text-rgb-preview"></div>
                        <input type="text" id="text-rgb" value="rgb(0, 0, 0)" readonly>
                    </div>
                </div>
                
                <!-- Controles LCH - Texto -->
                <div class="tab-content" id="text-lch-tab">
                    <div class="color-sliders">
                        <div class="slider-group">
                            <label>Lightness <span id="text-lch-l-value">0</span>%</label>
                            <input type="range" id="text-lch-l-slider" min="0" max="100" value="0" class="slider">
                        </div>
                        <div class="slider-group">
                            <label>Chroma <span id="text-lch-c-value">0</span></label>
                            <input type="range" id="text-lch-c-slider" min="0" max="132" value="0" class="slider">
                        </div>
                        <div class="slider-group">
                            <label>Hue <span id="text-lch-h-value">0</span>°</label>
                            <input type="range" id="text-lch-h-slider" min="0" max="360" value="0" class="slider">
                        </div>
                        <div class="color-preview display-none" id="text-lch-preview"></div>
                        <input type="text" id="text-lch" value="lch(0% 0 0)" readonly>
                    </div>
                </div>
            </div>
    
            <div class="container contrast-result">
                <div class="result-item">
                    <span class="result-description">Relação de contraste</span>
                    <span id="contrast-ratio" class="result-description">21.00</span>
                </div>
                <div class="result-item">
                    <span class="result-description">AA Normal (mínimo 4.5:1)</span>
                    <span id="aa-normal" class="pass">Aprovado</span>
                </div>
                <div class="result-item">
                    <span class="result-description">AA Large (mínimo 3:1)</span>
                    <span id="aa-large" class="pass">Aprovado</span>
                </div>
                <div class="result-item">
                    <span class="result-description">AAA Normal (mínimo 7:1)</span>
                    <span id="aaa-normal" class="pass">Aprovado</span>
                </div>
                <div class="result-item">
                    <span class="result-description">AAA Large (mínimo 4.5:1)</span>
                    <span id="aaa-large" class="pass">Aprovado</span>
                </div>
            </div>
        </div>
    
        <div class="result-text" id="preview">
            <p class="large-text">Texto grande</p>
            <p>Texto de exemplo para visualizar o contraste</p>
            <p class="small-text">Texto pequeno para testar contraste</p>
        </div>
    </div>
`
