# 🎨 Front-end - ToDo App (React + Next.js)

Interface moderna e responsiva para o gerenciamento de tarefas. Utiliza React, Next.js e TailwindCSS, com animações e feedbacks visuais elegantes.

---

## 🚀 Tecnologias

- React
- Next.js
- TypeScript
- Tailwind CSS
- Axios

---

## 💻 Funcionalidades

- 📝 Criar tarefas
- ✏️ Editar tarefas
- 🗑️ Excluir com animação de desaparecimento
- ✔️ Concluir com fade-out e ícone de check
- ✅ Design limpo, responsivo e com feedback visual

---

## 🔌 Integração com API

Todas as ações (CRUD) são feitas através de chamadas HTTP para a API REST do back-end.

Exemplo:

```ts
axios.get("http://localhost:8080/tasks");
```

---

## ▶️ Rodando o front-end

```bash
cd frontend
npm install
npm run dev
```

> A aplicação será iniciada em `http://localhost:3000`.

---

## 📁 Organização dos Componentes

| Pasta          | Conteúdo                      |
|----------------|-------------------------------|
| `/components`  | TaskItem, TaskForm, etc.      |
| `/types`       | Tipagens para tarefas         |
| `/pages`       | Página principal com listagem |

---

## 🧑‍💻 Boas práticas aplicadas

- Componentes reutilizáveis
- Estilização com Tailwind
- Animações com Tailwind transition
- Estado controlado via `useState`
- Separação clara entre lógica e UI

---

## ✨ Resultado Visual

A aplicação transmite profissionalismo e atenção aos detalhes — ideal para ser mostrada em portfólios e entrevistas técnicas.
