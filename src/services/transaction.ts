import { serviceDelete, serviceGet, servicePost } from "./_factory";

const getAllTransaction = () =>
  serviceGet("/transactions", undefined, undefined);

const postTransaction = (data: any) =>
  servicePost("/transactions", data, undefined);

const deleteTransaction = (id: any) =>
  serviceDelete(`/transactions/${id}`, undefined, undefined);

const transactionService = {
  getAllTransaction,
  postTransaction,
  deleteTransaction,
};

export default transactionService;
