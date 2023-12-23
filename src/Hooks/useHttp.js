function useHttp() {
    const _get = async (url, options = {}) => fetch(url, options)
    const _post = async (url, body, options = {}) => fetch(url, { ...options, method: "POST", body })
    const _patch = async (url, body, options = {}) => fetch(url, { ...options, method: "PATCH", body })
    const _delete = async (url, options = {}) => fetch(url, { ...options, method: "DELETE" })

    return {
        _get,
        _post,
        _patch,
        _delete
    }

}

export default useHttp