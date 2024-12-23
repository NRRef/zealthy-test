export const getSubmissions = async () => {
    try {
        const response = await fetch(`/api/submissions`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Failed to get form');
        }

        const data = await response.json();
        return data;
    } catch (e) {
        throw e;
    }
};

export const submitForm = async (formData: object, id: string) => {
    try {
        const response = await fetch('/api/submissions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData,
                formId: id,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to submit form');
        }
    } catch (e) {
        throw e;
    }
};
