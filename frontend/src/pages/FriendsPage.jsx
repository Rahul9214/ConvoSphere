import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getUserFriends } from "../lib/api";
import FriendCard from "../components/FriendCard";
import NoFriendsFound from "../components/NoFriendsFound";

const LOCAL_STORAGE_KEY = "deletedFriends"; // Key for storing deleted friends

const FriendsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [friendsList, setFriendsList] = useState([]); // Local state for managing friends
  const [deletedFriends, setDeletedFriends] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  ); // Load deleted friends from localStorage

  // Fetch only accepted friends
  const {
    data: friends = [],
    isLoading: loadingFriends,
    isError,
  } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends
  });

  // Sync friendsList with fetched friends only when `friends` changes
  useEffect(() => {
    if (friends.length > 0) {
      // Filter out deleted friends before setting the list
      const filteredFriends = friends.filter((friend) => !deletedFriends.includes(friend._id));
      setFriendsList(filteredFriends);
    }
  }, [friends, deletedFriends]); // Runs only when 'friends' or 'deletedFriends' changes

  // Function to remove a friend and store it in localStorage
  const removeFriend = (friendId) => {
    setDeletedFriends((prevDeleted) => {
      const updatedDeleted = [...prevDeleted, friendId];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedDeleted)); // Save to localStorage
      return updatedDeleted;
    });

    setFriendsList((prevFriends) => prevFriends.filter((friend) => friend._id !== friendId));
  };


  // Search filter
  const filteredFriends = friendsList.filter((friend) =>
    friend.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          All Friends
        </h2>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search friends..."
          className="input input-bordered w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Handle loading, error, empty, and success */}
        {loadingFriends ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg" />
          </div>
        ) : isError ? (
          <p className="text-error">Failed to load friends. Please try again.</p>
        ) : filteredFriends.length === 0 ? (
          <NoFriendsFound />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredFriends.map((friend) => (
              <FriendCard key={friend._id} friend={friend} onRemove={removeFriend} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;
