'use client';

import { useState } from 'react';
import { User } from '@prisma/client';
import UserBox from './UserBox';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter users based on the search query
  const filteredUsers = users.filter((user) =>
    user.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200 block w-full left-0">
      {/* Header with Search Bar */}
      <div className="px-5 border-b">
        <div className="flex-col">
          <div className="text-2xl font-bold text-neutral-800 py-4">People</div>
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none pb-4 focus:ring-2 focus:ring-blue-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
       
        </div>
      </div>

      {/* User List */}
      {filteredUsers.map((user) => (
        <UserBox key={user.id} user={user} />
      ))}
    </aside>
  );
};

export default UserList;
