import { useEffect, useState } from "react";
import API from "../services/api";

function UserProfile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await API.get("/auth/me"); // JWT sent automatically
                setProfile(res.data);
            } catch (err) {
                console.error("Failed to fetch profile:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    if (loading) return <p className="text-center mt-10">Loading profile...</p>;
    if (!profile) return <p className="text-center mt-10">No profile found.</p>;

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
        </div>
    );
}

export default UserProfile;