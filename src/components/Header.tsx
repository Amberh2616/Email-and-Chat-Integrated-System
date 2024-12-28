import React from 'react';
import { Menu, Settings, HelpCircle, Mail } from 'lucide-react';

export function Header() {
  return (
    <div className="h-12 bg-brand flex items-center justify-between px-3 text-white">
      <div className="flex items-center">
        <Menu className="w-5 h-5 mr-4 cursor-pointer" />
        <div className="flex items-center">
          <Mail className="w-6 h-6 mr-2" />
          <span className="text-xl font-semibold">Mail</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="bg-white/20 text-white placeholder-white/70 px-4 py-1 rounded-sm w-64"
        />
        <Settings className="w-5 h-5 cursor-pointer" />
        <HelpCircle className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
}