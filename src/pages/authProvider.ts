import { AuthBindings } from "@refinedev/core";

const authProvider: AuthBindings = {
    // --
    login: async ({ email, password, remember, providerName }) => {
        // You can handle the login process according to your needs.

        // If the process is successful.
        return {
            success: true,
        };

        return {
            success: false,
            error: {
                name: "Login Error",
                message: "Invalid email or password",
            },
        };
    },
    // --

};

export default authProvider