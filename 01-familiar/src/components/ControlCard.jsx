export default function ControlCard({ title }) {
  const alertStart = () => {
    window.alert("คณกำลังกด Start " + title);
  };

  const showData = () => {
    return (
      <div>
        <li>Hello</li>
        <li>World</li>
      </div>
    );
  };

  return (
    <div>
      <h3> {title} </h3>
      <button onClick={() => alertStart()}>Start</button>
      <button> Restart</button>
      <button>Down</button>
      <div>{showData()}</div>
    </div>
  );
}
