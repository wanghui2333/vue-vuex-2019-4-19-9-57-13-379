export default {
    state: {
        // 应用的数据
        todoList: [],
        index: 0,
        currentFilter: "all"
    },
    mutations: {
        addNewData(state, data) {
            state.todoList.push({
                id: data.id,
                content: data.content,
                status: data.status
            });
        }
    }
}