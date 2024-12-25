import { config } from "../../config";

const getBaseUrl = () => {
    const isServer = typeof window === 'undefined';
    return isServer ? config.baseUrl : '';
};

export const getFormById = async (id: string) => {
    const baseUrl = getBaseUrl();
    try {
        const response = await fetch(`${baseUrl}/api/forms?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store, max-age=0',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to get form');
        }
        const data = await response.json();
        return data;
    } catch (e) {
        console.error('Error requesting form:', e);
        throw e;
    }
};

export const getForms = async () => {
    const baseUrl = getBaseUrl();
    try {
        const response = await fetch(`${baseUrl}/api/forms`, {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store, max-age=0',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to get forms');
        }
        const data = await response.json();
        return data;
    } catch (e) {
        console.error('Error requesting forms:', e);
        throw e;
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