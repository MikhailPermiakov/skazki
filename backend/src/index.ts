import { Elysia } from 'elysia'

const app = new Elysia()

app.get('/', () => {
    return { status: 'backend running' }
})

app.listen(3000)

console.log('API running on 3000')