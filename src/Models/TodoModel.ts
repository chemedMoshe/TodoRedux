import { v4 } from "uuid"

export default class TodoModel {
    public id: string
    public completed: boolean = false
    constructor(public title: string,) {
        this.id = v4()
    }

}