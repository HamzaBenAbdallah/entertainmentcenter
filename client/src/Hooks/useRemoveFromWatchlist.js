import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { getCurrentUser } from "Services/getCurrentUser";

const { user } = getCurrentUser();

const RemoveMovieFromWatchlist = async (movieDetails) => {
    return await axios.patch(
        `${process.env.REACT_APP_SERVER_URL}/remove-from-watchlist`,
        {
            movieId: movieDetails.id,
            user,
        }
    );
};

export const useRemoveFromWatchlist = (movieDetails) => {
    const queryClient = useQueryClient();

    const { mutate: mutateRemoveFromWatchlist } = useMutation(
        () => RemoveMovieFromWatchlist(movieDetails),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["get-watchlist-data"]);
                queryClient.invalidateQueries(["watchlistList"]);
                queryClient.invalidateQueries(["watchedList"]);
            },
        }
    );

    return {
        mutateRemoveFromWatchlist,
    };
};
