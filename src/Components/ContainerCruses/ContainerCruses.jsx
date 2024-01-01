import { v4 as uuidv4 } from "uuid";
import "./ContainerCruses.css";
function ContainerCruses({ courses }) {
  const coursesCrosses = (dayWeek) => {
    let newCourses = courses
      .filter((course) => course.week_course === dayWeek)
      .sort((a, b) => {
        let formatOpen24 =
          a.type_schedule_open == "1"
            ? a.hours_open_course == "12"
              ? 0
              : parseInt(a.hours_open_course)
            : a.hours_open_course == "12"
            ? 12
            : parseInt(a.hours_open_course) + 12;
        let formatFinish24 =
          b.type_schedule_open == "1"
            ? b.hours_open_course == "12"
              ? 0
              : parseInt(b.hours_open_course)
            : b.hours_open_course == "12"
            ? 12
            : parseInt(b.hours_open_course) + 12;

        if (formatOpen24 < formatFinish24) {
          return -1;
        }
        if (
          formatOpen24 === formatFinish24 &&
          parseInt(a.minutes_open_course) < parseInt(b.minutes_open_course)
        ) {
          return -1;
        }
      });

    // aquí devolvemos todos los cursos que se cruzan en parejas de dos
    let newCoursesCrosses = [];
    let o_course = 0;
    let f_course = 0;
    for (let i = 0; i < newCourses.length - 1; i++) {
      f_course =
        (newCourses[i].type_schedule_finish == "1"
          ? newCourses[i].hours_finish_course == "12"
            ? 0
            : parseInt(newCourses[i].hours_finish_course)
          : newCourses[i].hours_finish_course == "12"
          ? 12
          : parseInt(newCourses[i].hours_finish_course) + 12) *
          60 +
        parseInt(newCourses[i].minutes_finish_course);
      o_course =
        (newCourses[i + 1].type_schedule_open == "1"
          ? newCourses[i + 1].hours_open_course == "12"
            ? 0
            : parseInt(newCourses[i + 1].hours_open_course)
          : newCourses[i + 1].hours_open_course == "12"
          ? 12
          : parseInt(newCourses[i + 1].hours_open_course) + 12) *
          60 +
        parseInt(newCourses[i + 1].minutes_open_course);
      if (f_course > o_course) {
        newCoursesCrosses.push({
          id: uuidv4(),
          c_1: newCourses[i].name_course,
          c_2: newCourses[i + 1].name_course,
          time: f_course - o_course,
        });
      }
    }
    return newCoursesCrosses;
  };
  return (
    <div className="container_courses_crosses">
      <div className="container_title_courses_crosses">cruce de horarios</div>
      {coursesCrosses("1").length !== 0 ? (
        <div className="container_crosses crosses_lunes">
          <div className="title_container_crosses">lunes</div>
          {coursesCrosses("1").map((value) => (
            <span className="value_course_crosses" key={value.id}>
              <span className="course_grup_crosses">
                <span className="name_grup_crosses">Cursos</span>
                <span className="course_one_crosses">{value.c_1}</span>
                <span className="course_two_crosses">{value.c_2}</span>
              </span>
              <span className="time_crosses_value">
                <span className="name_time_crosses">Tiempo</span>
                {parseInt(value.time / 60) !== 0
                  ? parseInt(value.time / 60) + "h"
                  : ""}{" "}
                {parseInt(value.time % 60) !== 0
                  ? parseInt(value.time % 60) + "m"
                  : ""}
              </span>
            </span>
          ))}
        </div>
      ) : (
        ""
      )}
      {coursesCrosses("2").length !== 0 ? (
        <div className="container_crosses crosses_martes">
          <div className="title_container_crosses">martes</div>
          {coursesCrosses("2").map((value) => (
            <span className="value_course_crosses" key={value.id}>
              <span className="course_grup_crosses">
                <span className="name_grup_crosses">Cursos</span>
                <span className="course_one_crosses">{value.c_1}</span>
                <span className="course_two_crosses">{value.c_2}</span>
              </span>
              <span className="time_crosses_value">
                <span className="name_time_crosses">Tiempo</span>
                {parseInt(value.time / 60) !== 0
                  ? parseInt(value.time / 60) + "h"
                  : ""}{" "}
                {parseInt(value.time % 60) !== 0
                  ? parseInt(value.time % 60) + "m"
                  : ""}
              </span>
            </span>
          ))}
        </div>
      ) : (
        ""
      )}
      {coursesCrosses("3").length !== 0 ? (
        <div className="container_crosses crosses_miercoles">
          <div className="title_container_crosses">miércoles</div>
          {coursesCrosses("3").map((value) => (
            <span className="value_course_crosses" key={value.id}>
              <span className="course_grup_crosses">
                <span className="name_grup_crosses">Cursos</span>
                <span className="course_one_crosses">{value.c_1}</span>
                <span className="course_two_crosses">{value.c_2}</span>
              </span>
              <span className="time_crosses_value">
                <span className="name_time_crosses">Tiempo</span>
                {parseInt(value.time / 60) !== 0
                  ? parseInt(value.time / 60) + "h"
                  : ""}{" "}
                {parseInt(value.time % 60) !== 0
                  ? parseInt(value.time % 60) + "m"
                  : ""}
              </span>
            </span>
          ))}
        </div>
      ) : (
        ""
      )}
      {coursesCrosses("4").length !== 0 ? (
        <div className="container_crosses crosses_jueves">
          <div className="title_container_crosses">jueves</div>
          {coursesCrosses("4").map((value) => (
            <span className="value_course_crosses" key={value.id}>
              <span className="course_grup_crosses">
                <span className="name_grup_crosses">Cursos</span>
                <span className="course_one_crosses">{value.c_1}</span>
                <span className="course_two_crosses">{value.c_2}</span>
              </span>
              <span className="time_crosses_value">
                <span className="name_time_crosses">Tiempo</span>
                {parseInt(value.time / 60) !== 0
                  ? parseInt(value.time / 60) + "h"
                  : ""}{" "}
                {parseInt(value.time % 60) !== 0
                  ? parseInt(value.time % 60) + "m"
                  : ""}
              </span>
            </span>
          ))}
        </div>
      ) : (
        ""
      )}
      {coursesCrosses("5").length !== 0 ? (
        <div className="container_crosses crosses_viernes">
          <div className="title_container_crosses">viernes</div>
          {coursesCrosses("5").map((value) => (
            <span className="value_course_crosses" key={value.id}>
              <span className="course_grup_crosses">
                <span className="name_grup_crosses">Cursos</span>
                <span className="course_one_crosses">{value.c_1}</span>
                <span className="course_two_crosses">{value.c_2}</span>
              </span>
              <span className="time_crosses_value">
                <span className="name_time_crosses">Tiempo</span>
                {parseInt(value.time / 60) !== 0
                  ? parseInt(value.time / 60) + "h"
                  : ""}{" "}
                {parseInt(value.time % 60) !== 0
                  ? parseInt(value.time % 60) + "m"
                  : ""}
              </span>
            </span>
          ))}
        </div>
      ) : (
        ""
      )}
      {coursesCrosses("6").length !== 0 ? (
        <div className="container_crosses crosses_sabado">
          <div className="title_container_crosses">sábado</div>
          {coursesCrosses("6").map((value) => (
            <span className="value_course_crosses" key={value.id}>
              <span className="course_grup_crosses">
                <span className="name_grup_crosses">Cursos</span>
                <span className="course_one_crosses">{value.c_1}</span>
                <span className="course_two_crosses">{value.c_2}</span>
              </span>
              <span className="time_crosses_value">
                <span className="name_time_crosses">Tiempo</span>
                {parseInt(value.time / 60) !== 0
                  ? parseInt(value.time / 60) + "h"
                  : ""}{" "}
                {parseInt(value.time % 60) !== 0
                  ? parseInt(value.time % 60) + "m"
                  : ""}
              </span>
            </span>
          ))}
        </div>
      ) : (
        ""
      )}
      {coursesCrosses("7").length !== 0 ? (
        <div className="container_crosses crosses_domingo">
          <div className="title_container_crosses">domingo</div>
          {coursesCrosses("7").map((value) => (
            <span className="value_course_crosses" key={value.id}>
              <span className="course_grup_crosses">
                <span className="name_grup_crosses">Cursos</span>
                <span className="course_one_crosses">{value.c_1}</span>
                <span className="course_two_crosses">{value.c_2}</span>
              </span>
              <span className="time_crosses_value">
                <span className="name_time_crosses">Tiempo</span>
                {parseInt(value.time / 60) !== 0
                  ? parseInt(value.time / 60) + "h"
                  : ""}{" "}
                {parseInt(value.time % 60) !== 0
                  ? parseInt(value.time % 60) + "m"
                  : ""}
              </span>
            </span>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default ContainerCruses;
