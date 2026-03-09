export interface Call {
    caller: string;
    receiver: string;
    timestamp?: Date;
    status: 'ATENDIDA' | 'PERDIDA' | 'FALHOU';
}
