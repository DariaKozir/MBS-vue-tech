export const EmptyHistory: History = { amount: 0, from: "", to: "", result: 0 };

export type History = {
    amount: number | string;
    from: string;
    to: string;
    result: number | string;
};
