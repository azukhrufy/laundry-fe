// hooks
import useSWR from 'swr'
import { AxiosResponse } from 'axios'

/**
 * Create an SWR hooks to fetch data, with some magic ✨
 * 1. Automatically delay data fetching depend on authentication requirement,
 *    see `withAuth` params
 * 2. If you need to require current user data in your fetching params,
 *    you can use special token `$user`, that will be resolved to user data in `AuthContext`
 * @example
 * ```
 * const useUserProductList = createFetchingSWR('user-product', getUserProductList)
 *
 * function SampleComponent() {
 *   const {data, isLoading} = useUserProductList('$user._id')
 *   console.log(data)
 *   // print user product list for current user
 *
 *   return ...
 * }
 *
 * @param {Object} params
 * @param {string} params.key
 * unique swr key prefix, can be anything that identify fetched data type
 * @param {() => Promise<any>} params.fetcher
 * fetcher function, must have token as last params,
 * **PITFALL**: make sure that the function.length will return a valid count of arguments,
 * since the hooks need it to apply token as last params
 * ```
 * // assume the the function service
 * const serviceCall = (arg, token) => fetch(...)
 *
 * // assume fetcher1, fetcher2, fetcher3 will be used for fetcher params
 * const fetcher1 = (...args) => serviceCall.getList(args)
 * console.log(fetcher.length) // prints 0, will not work
 *
 * const fetcher2 = (arg, token) => serviceCall(arg, token)
 * console.log(fetcher.length) // prints 2, will work
 * const fetcher3 = serviceCall
 * console.log(fetcher.length) // prints 2, will work
 * ```
 * @param {(import('axios').AxiosResponse)=> any} [params.adapter=(res) => res.data.results]
 * function to transform fetch response,  type `(AxiosResponse) => any`
 * @param {'always'|'when-available'|'never'} [params.withAuth='when-available']
 * include auth token in fetch request, available values `'always'|'when-available'|'never'`,
 * also delay fecthing until user if available when when set no `always` and `when-available`
 * @param {Object?} [params.SWRConfig={}]
 * SWR config override, @see https://swr.vercel.app/docs/options#options
 * @returns {Object}
 * SWR return, with additional field of `key: array` and `isLoading: boolean`
 */

type SWRParams = {
  key : string,
  fetcher: any,
  adapter?: any,
  withAuth?: string
  SWRConfig?: any,
}

export function createFetchingSWR({
  key,
  fetcher,
  adapter = (res : any) => res.data,
  withAuth = 'when-available',
  SWRConfig = {}
} : SWRParams) {
  return () => {

    const swrKey = [key, 'public']

    const swr = useSWR(
      swrKey,
      async () => {
        return fetcher().then((res : any) =>  adapter(res))
      },
      SWRConfig
    )

    return {
      ...swr,
      key: swrKey
    }
  }
}
