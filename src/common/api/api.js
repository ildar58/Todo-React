export class Api {
    static _host = 'http://localhost:4200'

    static getTasks() {
        return fetch(`${this._host}/items`).then(res => res.json())
    }

    static addTask(task) {
        return fetch(
            `${this._host}/items`,
            {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            })
            .then(res => res.json())
    }

    static updateTask(task) {
        return fetch(
            `${this._host}/items/${task.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(task),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            })
            .then(res => res.json())
    }

    static deleteTask(id) {
        return fetch(`${this._host}/items/${id}`, {method: 'DELETE'}).then(res => res.json())
    }
}
