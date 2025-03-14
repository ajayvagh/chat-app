import {create} from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");     

            set(({authUser: res.data}));
        } catch (error) {
            console.log("Error in CheckAUth func", error)
            set(({authUser: null}));
        } finally {
            set({isCheckingAuth: false});
        }
    },

    signup: async (data) => {
        set({ isSigningUp: true });
    
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({ authUser: res.data });
            toast.success("Account created successfully!");  
        } catch (error) {
            console.log("Signup Error:", error);  
            if (error.response && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Signup failed. Please try again.");
            }
        } finally {
            set({ isSigningUp: false });
        }
    },

    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosInstance.post("/auth/login", data);
            set({ authUser: res.data });
            toast.success("Logged in successfully");
    
            try {
                get().connectSocket(); // Ensure this doesn't fail
            } catch (socketError) {
                console.error("Socket connection error:", socketError);
            }
        } catch (error) {
            console.error("Login Error:", error);
            toast.error(error.response?.data?.message || "Something went wrong! Please try again.");
        } finally {
            set({ isLoggingIn: false });
        }
    },
    

    logout: async () => {
    try {
        await axiosInstance.post("/auth/logout");
        set({ authUser: null });
        toast.success("Logged out successfully");

        try {
            get().disconnectSocket(); // Ensure this doesn't fail
        } catch (socketError) {
            console.error("Socket disconnect error:", socketError);
        }
    } catch (error) {
        console.error("Logout Error:", error);
        toast.error(error.response?.data?.message || "Logout failed. Please try again.");
    }

    },

    updateProfile: async(data) => {
        
    }

    
}))