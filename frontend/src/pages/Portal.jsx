import { useState } from "react";
import PortalHero from "../components/portal/PortalHero";
import PortalFormWrapper from "../components/portal/PortalFormWrapper";

export default function Portal() {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <>
      <PortalHero
        selectedRole={selectedRole}
        onSelectRole={setSelectedRole}
      />
      {selectedRole && (
        <PortalFormWrapper
          selectedRole={selectedRole}
          onBack={() => setSelectedRole(null)}
        />
      )}
    </>
  );
}
