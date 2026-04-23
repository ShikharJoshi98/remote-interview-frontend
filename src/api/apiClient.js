const API_URL = import.meta.env.VITE_API_URL;

const request = async (
    endpoint,
    options = {}
) => {
    console.log(options.body)
    const response = await fetch(
        `${API_URL}${endpoint}`,
        {
            ...options,

            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {})
            },

        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || 'Request Failed'
        );
    }

    return data;
}

export const get = (
    endpoint,
    headers = {}
) => request(
    endpoint,
    {
        method: "GET",
        headers
    }
);

export const post = (
    endpoint,
    body,
    headers = {}
) =>
    request(
        endpoint,
        {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }
    );