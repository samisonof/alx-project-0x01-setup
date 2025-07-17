import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const UsersPage: React.FC = () => (
  <div>
    <Header />
    <main className="p-8">
      <h1 className="text-3xl font-semibold mb-4">Users</h1>
      <Button label="Add User" onClick={() => alert("Add user clicked!")} />
    </main>
  </div>
);

export default UsersPage;
