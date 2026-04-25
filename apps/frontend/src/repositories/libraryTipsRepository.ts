const BASE_URL = "http://localhost:3000/api/library-tips";

export const libraryTipsRepository = {
  async getAll(userId: string) {
    const res = await fetch(BASE_URL, {
      headers: {
        "x-user-id": userId, // 🔥 send userId
      },
    });
    return await res.json();
  },

  async add(tip: { title: string; description: string }, userId: string) {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-user-id": userId, // 🔥 send userId
      },
      body: JSON.stringify(tip),
    });

    return await res.json();
  },

  async remove(id: number, userId: string) {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "x-user-id": userId, 
      },
    });
  },
};