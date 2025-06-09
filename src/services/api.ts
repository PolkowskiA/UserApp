export interface UserProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthday: string;
  about: string;
  avatar: string;
}

const API_URL = "/api/user"; // future user enpoint

export const fetchUser = async (): Promise<UserProfileData | null> => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch user");
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const saveUser = async (data: UserProfileData): Promise<boolean> => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch (err) {
    console.error(err);
    return false;
  }
};
