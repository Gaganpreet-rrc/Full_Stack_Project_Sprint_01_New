export const libraryTipsRepository = {
  async getAll() {
    const res = await fetch("http://localhost:3000/api/library-tips");
    return await res.json();
  },

  async add(tip: { title: string; description: string }) {
    const res = await fetch("http://localhost:3000/api/library-tips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tip),
    });
    return await res.json();
  },

  async remove(id: number) {
    await fetch(`http://localhost:3000/api/library-tips/${id}`, {
      method: "DELETE",
    });
  },
};