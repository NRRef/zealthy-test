import { config } from "../../config";

export const getSubmissions = async () => {
    try {
        const response = await fetch(`${config.baseUrl}/api/submissions`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to get submissions');
        }

        const data = await response.json();
        return data;
    } catch (e) {
        console.error('Error fetching submissions:', e);
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
