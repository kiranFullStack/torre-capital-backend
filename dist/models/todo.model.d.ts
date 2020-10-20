import { Entity } from '@loopback/repository';
export declare class Todo extends Entity {
    title: string;
    isComplete: boolean;
    id?: string;
    subTasks?: any[];
    [prop: string]: any;
    constructor(data?: Partial<Todo>);
}
export interface TodoRelations {
}
export declare type TodoWithRelations = Todo & TodoRelations;
