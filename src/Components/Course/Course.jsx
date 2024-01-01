import "./Course.css";
import { AiFillDelete } from "react-icons/ai";

function Course({
  idCourse,
  nameCourse,
  open_c_h,
  open_c_m,
  type_schedule_open,
  finish_c_h,
  finish_c_m,
  type_schedule_finish,
  deleteCourse,
}) {
  return (
    <div className="container_course">
      <div className="title_course">{nameCourse}</div>
      <div className="time_course">
        {`${open_c_h < 10 ? "0" + open_c_h : open_c_h}:${
          open_c_m < 10 ? "0" + open_c_m : open_c_m
        } ${type_schedule_open === "1" ? "am" : "pm"} - ${finish_c_h < 10 ? "0" + finish_c_h : finish_c_h}:${
          finish_c_m < 10 ? "0" + finish_c_m : finish_c_m
        } ${type_schedule_finish === "1" ? "am" : "pm"}`}
        {``}
      </div>
      <div
        className="button_delete_course"
        onClick={() => deleteCourse(idCourse)}
      >
        <AiFillDelete></AiFillDelete>
      </div>
    </div>
  );
}
export default Course;
