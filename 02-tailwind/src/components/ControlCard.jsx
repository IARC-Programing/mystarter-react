import { Button } from "@mui/material";

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
    <div className='border p-2 rounded-md shadow-md m-2'>
      <h3> {title} </h3>
      <Button variant='contained' onClick={() => alertStart()}>
        Start
      </Button>
      <Button color='info' variant='contained'>
        {" "}
        Restart
      </Button>
      <Button color='error' variant='contained'>
        Down
      </Button>
      <div>{showData()}</div>
    </div>
  );
}
