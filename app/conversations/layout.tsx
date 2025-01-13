import Sidebar from '../components/sidebar/Sidebar';
import ConversationList from './components/ConversationList';
import getConversations from '../actions/getConversations';
import getUsers from '../actions/getUsers';
import { Metadata } from 'next';

export const metadata = {
  metadataBase: new URL('https://becchat.vercel.app'), // Replace with your actual domain
  title: 'BEC Alumni - Connect with Bapatla Engineering College Alumni',
  description:
    'BEC Alumni is your go-to platform to stay connected with Bapatla Engineering College alumni. Start engaging conversations, build connections, and relive your college memories!',
  keywords: [
    'BEC Alumni',
    'Bapatla',
    'Bapatla Engineering College',
    'BEC College',
    'BEC-Alumni',
    'BEC Chat',
    'Bapatla Alumni Network',
    'Bapatla College Chat',
    'Bapatla Engineering Alumni',
  ],
};


export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialConversations={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
