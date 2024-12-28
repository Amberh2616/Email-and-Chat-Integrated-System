import React, { useState } from 'react';
import { EmailCollection } from '../components/EmailCollection';
import { SenderGroups } from '../components/SenderGroups';
import { EmailFilters } from '../components/EmailFilters';
import { EmailTimeGroups } from '../components/EmailTimeGroups';
import { mockEmails } from '../data/mockEmails';

export function HomePage() {
  const [view, setView] = useState<'grid' | 'list'>('list');

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-64 border-r bg-white">
        <EmailFilters />
      </div>
      <div className="flex-1">
        <div className="p-4 border-b bg-white flex justify-between items-center">
          <h1 className="font-semibold">Inbox</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded ${view === 'grid' ? 'bg-brand-lighter text-brand' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Grid
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded ${view === 'list' ? 'bg-brand-lighter text-brand' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              List
            </button>
          </div>
        </div>
        {view === 'grid' ? (
          <EmailCollection />
        ) : (
          <EmailTimeGroups 
            emails={mockEmails}
            onSelectEmail={(email) => console.log('Selected:', email)}
          />
        )}
      </div>
      <div className="w-72 border-l bg-white">
        <SenderGroups />
      </div>
    </div>
  );
}