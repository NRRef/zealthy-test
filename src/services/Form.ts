export const getFormById = async (id: string) => {
    try {
        const response = await fetch(`/api/forms?id=${id}`);
        if (!response.ok) {
            throw new Error('Failed to get form');
        }
        const data = await response.json();
        return data
    } catch (e) {
        console.error('Error requesting form:', e);
    }
};

export const getForms = async () => {
    try {
        const response = await fetch(`/api/forms`);
        if (!response.ok) {
            throw new Error('Failed to get form');
        }
        const data = await response.json();
        return data
    } catch (e) {
        console.error('Error requesting form:', e);
    }
};

export const submitNewForm = async (name: string, steps: string[][]) => {
    try {
        const response = await fetch('/api/forms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                steps,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to submit form');
        }
    } catch (e) {
        throw e;
    }
};