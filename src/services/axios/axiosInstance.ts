import axios from 'axios';

const singleton = Symbol();
const singletonEnforcer = Symbol();

class ApiSingleton {
    public session: any;
    private isAuthorisationSet: boolean;

    constructor(enforcer: any) {
        if (enforcer !== singletonEnforcer) {
            throw new Error('Cannot construct singleton');
        }

        this.session = null;
        this.isAuthorisationSet = false;
    }

    static get instance() {
        // Try to get an efficient singleton
        // @ts-ignore
        if (!this[singleton]) {
            // @ts-ignore
            this[singleton] = new ApiSingleton(singletonEnforcer);
        }
        // @ts-ignore
        return this[singleton];
    }

    public isAuthorisationReady = () => {
        return this.isAuthorisationSet;
    };

    public setAuthorisation = () => {
        this.isAuthorisationSet = true;

        this.session = axios.create({
            // baseURL: publicRuntimeConfig.API_BASE_URL,
            headers: {
                // Authorization: `Bearer ${token}`,
                // 'Cache-Control': 'no-cache, no-store, must-revalidate',
                // Expires: 0,
                // Pragma: 'no-cache'
            }
        });

        this.session.interceptors.request.use((request: any) => {
            /**
             * Co-relate API calls
             */
            // request.headers['X-Correlation-Id'] = UUID;

            return request;
        });

        this.session.interceptors.response.use(
            (response: any) => {
                /**
                 * Track complete response
                 */
                return response;
            },
            (error: any) => {
                /**
                 * Track error response
                 */
                return Promise.reject(error);
            }
        );
    };

    public getWithOutHeader = (url: string, options: object) => {
        return axios.get(url, options);
    };

    public get = (url: string, options: object) => {
        return this.session.get(url, options);
    };
    public post = (url: string, data: object, options: object) => {
        return this.session.post(url, data, options);
    };
    public put = (url: string, data: object, options: object) => {
        return this.session.put(url, data, options);
    };

    public delete = (url: string, data: object) => this.session.delete(url, data);
}

export default ApiSingleton.instance;
