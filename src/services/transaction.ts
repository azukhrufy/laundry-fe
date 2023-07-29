import { serviceGet, servicePost } from "./_factory";

const getAllTransaction = () => serviceGet('/transactions', undefined, undefined)

const postTransaction = (data : any) => servicePost('/transactions', data, undefined) 

const transactionService = {
    getAllTransaction,
    postTransaction
}

export default transactionService