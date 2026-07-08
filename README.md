# 👑 Conversion King

O **Conversion King** é uma aplicação web moderna e responsiva de conversão multidirecional de moedas. Diferente dos conversores tradicionais que apenas calculam a partir do Real, este projeto foi desenvolvido com uma lógica inteligente que permite converter de **qualquer moeda de origem para qualquer moeda de destino** de forma dinâmica e instantânea.

---

## 🚀 Funcionalidades

- 🔄 **Conversão Multidirecional**: Converta valores combinando qualquer uma das moedas disponíveis (ex: Dólar para Euro, Euro para Libra, Real para Bitcoin, etc.).
- ⚡ **Atualização em Tempo Real**: O layout, os nomes e as bandeiras mudam dinamicamente assim que os seletores (`<select>`) são alterados.
- 🧮 **Cálculos de Precisão**: Utiliza uma moeda base interna (BRL) como ponte para garantir cálculos de conversão cruzada precisos.
- 💵 **Formatação Monetária Internacional**: Exibe os valores formatados de acordo com o padrão cultural e monetário de cada país (ex: `R$ 1.000,00`, `$1,000.00`, `1.000,00 €`) utilizando a API nativa `Intl.NumberFormat`.
- 🎨 **Visual Moderno**: Fundo em degradê (*linear-gradient*) vibrante com um design centralizado e limpo, focado na experiência do usuário.

---

## 💶 Moedas Suportadas

Atualmente, o projeto simula taxas de câmbio para as seguintes moedas:
- **BRL** (Real Brasileiro) 🇧🇷
- **USD** (Dólar Americano) 🇺🇸
- **EUR** (Euro) 🇪🇺
- **GBP** (Libra Esterlina) 🇬🇧
- **BTC** (Bitcoin) ₿

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído puramente com tecnologias web fundamentais (Vanilla Stack):

- **HTML5**: Estruturação semântica dos elementos e formulários.
- **CSS3**: Estilização moderna, uso de Flexbox para centralização e efeitos de degradê no plano de fundo.
- **JavaScript (ES6+)**: Manipulação de eventos do DOM, lógica matemática de conversão cruzada e formatação internacional de moedas.

---

## 📂 Estrutura do Projeto

```text
├── assets/
│   ├── gif/
│   │   └── logo.gif          # Logo animada do projeto
│   └── img/
│       ├── brasil 2.png      # Bandeira do Brasil
│       ├── estados-unidos.png# Bandeira dos EUA
│       ├── euro.png          # Bandeira da União Europeia
│       ├── libra 1.png       # Bandeira do Reino Unido
│       ├── bitcoin 1.png     # Ícone do Bitcoin
│       └── Seta.png          # Seta indicativa de conversão
├── index.html                # Arquivo principal de marcação
├── style.css                 # Folha de estilo e design do app
└── scripts.js                # Lógica e inteligência da aplicação
```

---

## 🔧 Como Rodar o Projeto Localmente

1. **Clone o repositório** ou baixe os arquivos em seu computador:
   ```bash
   git clone https://github.com
   ```
2. **Navegue até a pasta do projeto**:
   ```bash
   cd conversion-king
   ```
3. **Abra o projeto**:
   - Abra o arquivo `index.html` diretamente no seu navegador de preferência, ou:
   - No VS Code, clique com o botão direito em `index.html` e selecione **Open with Live Server** (caso possua a extensão instalada).

---

## 📝 Próximos Passos (Roadmap de Evolução)

- [ ] **Integração com API de Câmbio**: Substituir as taxas fixas do código por requisições `fetch()` para puxar o valor do mercado financeiro em tempo real.
- [ ] **Validação de Moedas Iguais**: Impedir que o usuário tente converter uma moeda para ela mesma, desabilitando a opção correspondente ou exibindo um alerta.
- [ ] **Efeitos de Animação**: Adicionar transições suaves via CSS quando as bandeiras e textos forem alterados.
