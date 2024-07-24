# TaskSync (Front-End)

TaskSync allows your team to keep track of tasks with real-time updates, notifying you by email when new tasks are added.

- Built with [Vue](https://vuejs.org/)
- Async state managed by [Vue Query](https://tanstack.com/query/latest/docs/framework/vue/overview)
- Server connection via [Socket.IO](https://socket.io/)
- Form validation with [VeeValidate](https://vee-validate.logaretm.com/v4/) and [Zod](https://zod.dev/)
- Styling with [tailwindcss](https://tailwindcss.com/) and [shadcn-vue](https://www.shadcn-vue.com/)

[TaskSync (Back-End)](https://github.com/borjamarti/tasksync-back)

## Project Setup

The back-end server URL by default is `http://localhost:3000`. If you have the server running on another port, modify the `VITE_SERVER_URL` variable in `.env`.

```sh
npm install
```

### Start Project

```sh
npm run dev
```
