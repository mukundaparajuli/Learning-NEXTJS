type user = {
  name: string;
  username: string;
  email: string;
  phone: string;
  id: string;
};
export default async function GetUsers() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: [user] = await response.json();
  console.log(data);
  return (
    <>
      <h1>Users</h1>
      <div className="grid grid-cols-2 gap-2 text-white m-4">
        {data.map((user) => (
          <div
            key={user.id}
            className="flex justify-between justify-items-center bg-slate-700 p-4 rounded-md"
          >
            <div className="">
              <div className="text-lg font-semibold">{user.name}</div>
              <div className="text-sm">{user.username}</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-md">{user.email}</div>
              <div className="text-md">{user.phone}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
