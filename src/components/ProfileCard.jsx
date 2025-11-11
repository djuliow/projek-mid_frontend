import React from 'react';

const ProfileCard = ({ user }) => {
  if (!user) {
    return <div>Loading Profile...</div>;
  }

  return (
    <div className="bg-blue-200 border border-black rounded-xl m-4 p-4 text-center w-full max-w-sm">
      <img
        src={user.foto}
        alt="Foto Profil"
        className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-white object-cover"
      />
      <h1 className="text-2xl font-bold mb-2">{user.nama}</h1>
      <p>
        <strong>Umur:</strong> {user.umur}
      </p>
      <p>
        <strong>Tanggal Lahir:</strong> {user.tanggal_lahir}
      </p>
    </div>
  );
};

export default ProfileCard;