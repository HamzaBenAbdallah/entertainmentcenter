import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCurrentUser } from "Services/getCurrentUser";

const { user } = getCurrentUser();

const fetchWatched = async () => {
    if (user) {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/get-watched`,
            { user }
        );
        return response.data;
    }
};

export const useFetchWatched = () => {
    const { data: watchedList } = useQuery(["watchedList"], fetchWatched);
    return { watchedList };
};
