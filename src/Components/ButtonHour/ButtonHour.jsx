import "./ButtonHour.css";
function ButtonHour({ name, min, max, cambio, textPlace, value }) {
  return (
    <input
      type={"number"}
      name={name}
      min={min}
      max={max}
      onChange={cambio}
      placeholder={textPlace}
      className="input_hour_time"
      value={value}
      required
    />
  );
}
export default ButtonHour;
