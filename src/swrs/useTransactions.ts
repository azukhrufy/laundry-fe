import {createFetchingSWR} from "./_factory";
import transactionService from "@/services/transaction";

export const useTransactionsList = createFetchingSWR({
    key: 'transaction-list',
    fetcher: transactionService.getAllTransaction
});
