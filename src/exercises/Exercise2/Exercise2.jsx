import "./Exercise2.css";

import Button from "../../components/Button/Button";

const Exercise2 = (props) => {
  return (
    <section>
      <h2 class="heading">E2 : Action</h2>
      <div className="button-section">
        {/* This button only receives the required 'buttonText' prop set to "Primary". */}
        <Button buttonText={"Primary"} />
        {/* This button receives 'buttonText' set to "Secondary" and the boolean 'isSecondary' as true. */}
        <Button buttonText={"Secondary"} isSecondary={true} />
        {/* This button receives 'buttonText' as "Invert" and the boolean 'isInverted' as true. */}
        <Button buttonText={"Invert"} isInverted={true} />
        {/* This button receives 'buttonText'as "Invert" and the boolean 'isInverted' as true and 'isSecondary' as true. */}
        <Button buttonText={"Invert"} isSecondary={true} isInverted={true} />
        {/* This button receives 'buttonText' as "caps" and the boolean 'inCaps' for
        capitalization as true. */}
        <Button buttonText={"caps"} inCaps={true} />
      </div>
    </section>
  );
};

export default Exercise2;
