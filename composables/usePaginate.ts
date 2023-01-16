import { useState } from "#app";
export default function usePaginate() {
    const generatePaginationQuery = (pageSize = 0, page = 0) => {
        return {
            _perPage: pageSize,
            _page: page,
        }
    }
    return useState('paginate', () => {
        return {
            generatePaginationQuery
        }
    } )
}
