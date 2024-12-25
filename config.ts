const getBaseUrl = () => {
    if (typeof window !== 'undefined') return '';
    if (process.env.NETLIFY) {
        return `https://${process.env.SITE_NAME}.netlify.app`;
    }
    if (process.env.DEPLOY_URL) {
        return process.env.DEPLOY_URL;
    }
    if (process.env.URL) {
        return process.env.URL;
    }
    return `http://localhost:${process.env.PORT ?? 3000}`; 
};

export const config = {
    baseUrl: getBaseUrl(),
};