import zod from 'zod'

const createdTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string(),
})
export {createdTodo, updateTodo}