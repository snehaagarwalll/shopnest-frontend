import { useState } from "react";

export default function RoleToggle({ selectedRole, setSelectedRole }) {
  const roles = ["CUSTOMER", "SELLER", "ADMIN"];

  return (
    <div className="flex bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-full w-full">
      {roles.map((role) => (
        <button
          key={role}
          type="button"
          onClick={() => setSelectedRole(role)}
          className={`flex-1 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedRole === role
              ? "bg-white text-indigo-700 shadow-md"
              : "text-white"
          }`}
        >
          {role}
        </button>
      ))}
    </div>
  );
}