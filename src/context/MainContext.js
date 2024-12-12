import { CommonContext } from "./CommonContext";
import { StudentContext } from "./StudentContext";
import { SubjectContext } from "./SubjectContext";

export const MainContext = ({ children }) => {
  return (
    <>
      <CommonContext>
        <StudentContext>
          <SubjectContext>{children}</SubjectContext>
        </StudentContext>
      </CommonContext>
    </>
  );
};
