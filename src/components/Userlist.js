export const NameList = () => {
  const names = ["Prakhar", "Rahul", "Diana"];
  return (
    <div>
      {names.map((name) => {
        return <h2 key={name}>{name}</h2>;
      })}
    </div>
  );
}