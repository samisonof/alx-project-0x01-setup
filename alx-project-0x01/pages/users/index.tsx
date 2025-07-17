import Button from "@/components/common/Button";

const UsersPage: React.FC = () => (
  <div className="p-8">
    <h1 className="text-3xl font-semibold mb-4">Users</h1>
    <Button label="Add User" onClick={() => alert("Add user clicked!")} />
  </div>
);

export default UsersPage;
