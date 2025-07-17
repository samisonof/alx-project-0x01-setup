import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address, phone, company, website }) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-blue-700 mb-2">{name}</h2>
      
      <ul className="text-sm text-gray-600 space-y-1">
        <li><span className="font-medium">📧 Email:</span> {email}</li>
        <li><span className="font-medium">📍 Address:</span> {address.street}, {address.city}, {address.zipcode}</li>
        <li><span className="font-medium">📞 Phone:</span> {phone}</li>
        <li><span className="font-medium">🌐 Website:</span> {website}</li>
      </ul>

      <div className="mt-4 border-t pt-3 text-sm text-gray-500">
        <p className="font-semibold">🏢 Company: {company.name}</p>
        <p className="italic">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
