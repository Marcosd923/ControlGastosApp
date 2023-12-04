import Gasto from "./Gasto";
const ListadoGastos = ({ gastos, setGastoEditar }) => {
  return (
    <div className="listo-gatos contenedor">
      <h2>{gastos.length ? "Gastos" : "No hay gastos aun"}</h2>
      {gastos.map((gasto) => (
        <Gasto key={gasto.id} gasto={gasto} setGastoEditar={setGastoEditar} />
      ))}
    </div>
  );
};

export default ListadoGastos;
