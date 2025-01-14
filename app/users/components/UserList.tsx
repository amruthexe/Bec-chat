'use client';

import { User } from '@prisma/client';
import UserBox from './UserBox';
import { useState } from 'react';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter users by search query (name or email)
  const filteredUsers = users.filter((user) =>
    user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200 block w-full left-0">
      <div className="px-5 border-b">
        <div className="flex-col">
          <div className="text-2xl font-bold text-neutral-800 py-4">Members</div>

          {/* Styled Search Bar */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or email..."
              className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-full text-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
           
          </div>
        </div>
      </div>

      {/* Render Filtered Users */}
      {filteredUsers.map((user) => (
        <UserBox key={user.id} user={user} />
      ))}

      {/* Show message if no users are found */}
      {filteredUsers.length === 0 && (
        <div className="px-5 py-4 text-gray-500">No users found.</div>
      )}
    </aside>
  );
};

export default UserList;
