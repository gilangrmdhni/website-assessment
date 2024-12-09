import { useSelector } from 'react-redux';

function Profile() {
  const userName = useSelector((state) => state.user.name);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-xl">Profile</h1>
      <p className="text-lg">Name: {userName}</p>
    </div>
  );
}

export default Profile;
