export default {
    state: {
        // 应用的数据
        todoList: [
            {
                content: "写作业",
                status: "active"
            },
            {
                content: "睡觉",
                status: "completed"
            }
        ],
        currentFilter: "active"
    },
    mutations: {
        addNewData(state, inputtingText) {
            state.todoList.push({
                content: inputtingText,
                status: "active"
            });
        }
    }
}