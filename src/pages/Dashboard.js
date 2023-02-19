const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h4>Dashboard</h4>
      <h2>Welcome {user ? user.name : "Please log in"}</h2>
    </section>
  );
};
export default Dashboard;
