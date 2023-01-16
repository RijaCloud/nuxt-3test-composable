import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxt) => {
    return {
        provide: {
            myPlugin: () => {
                const paginate = usePaginate()
                return paginate.generatePaginationQuery
            }
        }
    }
})