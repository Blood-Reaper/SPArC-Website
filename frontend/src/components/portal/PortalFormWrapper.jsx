import { useRef, useEffect } from "react";
import Reveal from "../common/Reveal";
import MemberLogin from "./MemberLogin";
import AlumniLogin from "./AlumniLogin";
import JoinForm from "./JoinForm";

const FORMS = {
  member: MemberLogin,
  alumni: AlumniLogin,
  join: JoinForm,
};

export default function PortalFormWrapper({ selectedRole, onBack }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedRole]);

  const FormComponent = FORMS[selectedRole];
  if (!FormComponent) return null;

  return (
    <section className="section" id="portal-form" ref={wrapperRef}>
      <div className="container" style={{ maxWidth: 560 }}>
        <Reveal as="div" className="portal-form-card">
          <FormComponent onBack={onBack} />
        </Reveal>
      </div>
    </section>
  );
}
