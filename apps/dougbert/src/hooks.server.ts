import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    // If the request is protected, validate user session or redirect if unauthorized.
    // This fails during prerendering, so let it.
    try {
        // await connectDatabase();
    } catch(error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }

    const response = await resolve(event);
    
    return response;
};
