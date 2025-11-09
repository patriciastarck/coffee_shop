# 🚀 Projeto CofDev

Este é um projeto web moderno construído com **Next.js 15** (usando o App Router) e **React 19**.

O projeto é escrito em **TypeScript** e utiliza **Tailwind CSS 4** para estilização, em conjunto com a biblioteca de componentes **shadcn/ui** para uma UI limpa e acessível.

Ele também inclui várias bibliotecas para funcionalidades ricas, como:
* Validação de formulários com **React Hook Form** e **Zod**.
* Um carrossel de imagens com **Embla Carousel**.
* Animações de scroll com **AOS (Animate on Scroll)**.
* Bibliotecas de ícones **Lucide** e **Phosphor Icons**.

---

## 💻 Tecnologias Utilizadas

Este projeto utiliza um conjunto de ferramentas moderno:

### Framework Principal
* **Next.js 15.5**
* **React 19.1**
* **TypeScript 5**

### Estilização e UI
* **Tailwind CSS 4**
* **shadcn/ui** (estilo "New York")
* **Lucide React** (Ícones)
* **Phosphor Icons** (Ícones)
* `tailwind-merge` & `clsx` (Utilitários de classe)

### Funcionalidades
* **React Hook Form** & **Zod** (Gerenciamento e validação de formulários)
* **Embla Carousel** (Carrossel)
* **AOS** (Animações ao rolar)
* **tw-animate-css** (Plugin de Animate.css para Tailwind)

### Ferramentas (Tooling)
* **ESLint** (com a nova configuração "Flat Config" - `eslint.config.mjs`)
* **PostCSS**

---

## 🏁 Como Começar

Siga estas etapas para configurar e executar o projeto localmente.

### Pré-requisitos

* **Node.js** (versão 18.18 ou mais recente)
* **Um gerenciador de pacotes** (npm, yarn, pnpm ou bun)

### Instalação e Execução

1.  **Clone o repositório** (ou certifique-se de ter os arquivos do projeto).

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd petdev
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

4.  **Crie um arquivo de ambiente (se necessário):**
    O arquivo `.gitignore` está configurado para ignorar arquivos `.env*`. Se o seu projeto precisar de chaves de API ou outras variáveis de ambiente, crie um arquivo `.env.local` na raiz.

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

6.  **Abra seu navegador:**
    Visite [http://localhost:3000](http://localhost:3000) para ver o projeto em ação.

---

## 📜 Scripts Disponíveis

Aqui estão os scripts definidos no `package.json`:

* `npm run dev`: 🚀 Inicia o servidor de desenvolvimento em `localhost:3000`.
* `npm run build`: 📦 Compila o projeto para produção.
* `npm run start`: ⚡ Inicia o servidor de produção (requer `npm run build` primeiro).
* `npm run lint`: 🧹 Executa o ESLint para verificar erros de linting e estilo de código.
