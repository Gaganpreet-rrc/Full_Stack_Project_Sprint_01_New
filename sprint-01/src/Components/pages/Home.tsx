type HomeProps = {
  users: string[];
};

const Home = ({ users }: HomeProps) => (
  <div>
    <h2>Welcome to the Library App!</h2>

    <p>Total logged in users: {users.length}</p>
  </div>
);

export default Home;
