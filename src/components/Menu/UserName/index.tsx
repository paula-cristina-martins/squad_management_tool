interface PropsUser {
  name: string;
  initials: string;
}

export default function UserName(props: PropsUser) {
  return (
    <div className="flex w-1/2 mx-auto justify-end items-center">
      {props.name}
      <p className="flex items-center p-2 m-2 bg-gray-300 hover:bg-gray-400 rounded-full text-black">
        {props.initials}
      </p>
    </div>
  );
}