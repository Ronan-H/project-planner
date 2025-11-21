
type Task = {
    name: string;
    requires: Task[];
    priority: number;
    supplies: string[];
    cost: number
};