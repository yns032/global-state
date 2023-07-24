import { useColoria } from "../context/ColoriaContext";

const Coloria = ({ id }) => {
  const { state } = useColoria();
  const color = state.colors[id];

  return (
    <div>
      <h2>Coloria-{id}</h2>
      <p>Rengi: {color}</p>
    </div>
  );
};
export default Coloria;
