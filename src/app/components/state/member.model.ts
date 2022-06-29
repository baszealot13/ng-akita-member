import { guid } from '@datorama/akita';

export interface Member {
    id: string;
    title: string;
    completed: boolean;
}

export function createMember(title: string) {
    return {
        id: guid(),
        title,
        completed: false
    } as Member;
}
