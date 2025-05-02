# 🔧 Back-end - ToDo App (Spring Boot)

API REST robusta para gerenciamento de tarefas, desenvolvida com **Java 17 + Spring Boot**. Utiliza PostgreSQL como banco de dados relacional.

---

## 🚀 Tecnologias

- Java 17
- Spring Boot
- Spring Data JPA
- PostgreSQL
- RESTful API
- Gradle (ou Maven)

---

## 📁 Endpoints da API

| Método | Rota               | Descrição                 |
|--------|--------------------|---------------------------|
| GET    | `/tasks`           | Lista todas as tarefas    |
| POST   | `/tasks`           | Cria uma nova tarefa      |
| PUT    | `/tasks/{id}`      | Atualiza uma tarefa       |
| DELETE | `/tasks/{id}`      | Exclui uma tarefa         |

---

## 🗄️ Estrutura da Entidade

```java
@Entity
public class Task {
  private Long id;
  private String title;
  private String description;
  private Boolean completed;
}
```

---

## ⚙️ Execução local

```bash
cd backend
./mvnw spring-boot:run
```

> A API será executada em `http://localhost:8080`.

---

## 🛢️ Banco de Dados

- PostgreSQL
- Nome da tabela: `tasks`
- Campos: `id`, `title`, `description`, `completed`

Execute no seu banco:

```sql
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT FALSE
);
```

---

## 💡 Observações

- Projeto estruturado com base nos princípios SOLID e separação de responsabilidades.
- Pode ser facilmente acoplado a outros front-ends ou aplicativos mobile.
